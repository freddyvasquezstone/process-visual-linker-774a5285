import React, { useState } from 'react';
import ProcessBox from './ProcessBox';
import { Phase, DragData } from '../types/process';

interface ProcessPhaseProps {
  phase: Phase;
  phaseNumber: number;
  onReorderProcesses: (phaseId: string, fromIndex: number, toIndex: number, fromPhaseId?: string) => void;
}

const ProcessPhase: React.FC<ProcessPhaseProps> = ({ phase, phaseNumber, onReorderProcesses }) => {
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    setDragOverIndex(null);
    
    try {
      const dragDataStr = e.dataTransfer.getData('text/plain');
      const dragData: DragData = JSON.parse(dragDataStr);
      
      // Si es la misma fase, reordenar dentro de la fase
      if (dragData.phaseId === phase.id) {
        if (dragData.index !== dropIndex) {
          onReorderProcesses(phase.id, dragData.index, dropIndex);
        }
      } else {
        // Si es diferente fase, mover entre fases
        onReorderProcesses(phase.id, dragData.index, dropIndex, dragData.phaseId);
      }
    } catch (error) {
      console.error('Error handling drop:', error);
    }
  };

  const handleContainerDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleContainerDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOverIndex(null);
    
    try {
      const dragDataStr = e.dataTransfer.getData('text/plain');
      const dragData: DragData = JSON.parse(dragDataStr);
      
      // Si es diferente fase y se suelta en el contenedor, agregar al final
      if (dragData.phaseId !== phase.id) {
        onReorderProcesses(phase.id, dragData.index, phase.processes.length, dragData.phaseId);
      }
    } catch (error) {
      console.error('Error handling container drop:', error);
    }
  };

  // Función para organizar procesos en filas según la fase
  const organizeProcessesInRows = () => {
    const processes = phase.processes;
    
    console.log(`Organizando procesos para fase ${phase.id}:`, processes.map(p => p.name));
    
    switch (phase.id) {
      case 'comercial':
        return [
          processes.slice(0, 4),   // Fila 1: 4 elementos
          processes.slice(4, 5),   // Fila 2: 1 elemento
          processes.slice(5, 8),   // Fila 3: 3 elementos
          processes.slice(8, 10),  // Fila 4: 2 elementos
          processes.slice(10, 12)  // Fila 5: 2 elementos
        ];
      
      case 'operativa':
        const operativaRows = [
          processes.slice(0, 4),   // Fila 1: 4 elementos
          processes.slice(4, 10),  // Fila 2: 6 elementos (incluye ORDEN DE RETIRO)
          processes.slice(10, 14), // Fila 3: 4 elementos
          processes.slice(14, 16)  // Fila 4: 2 elementos
        ];
        console.log('Filas operativa:', operativaRows.map(row => row.map(p => p.name)));
        return operativaRows;
      
      case 'trafico-seguridad':
        return [
          processes.slice(0, 3)    // Fila única: 3 elementos
        ];
      
      case 'gestion-riesgo':
        return [
          processes.slice(0, 2)    // Fila única: 2 elementos
        ];
      
      case 'gestion-financiera':
        return [
          processes.slice(0, 2),   // Fila 1: 2 elementos
          processes.slice(2, 5),   // Fila 2: 3 elementos
          processes.slice(5, 7)    // Fila 3: 2 elementos
        ];
      
      case 'procesos-adicionales':
        return [
          processes.slice(0, 3)    // Fila única: 3 elementos
        ];
      
      case 'procesos-apoyo':
        return [
          processes.slice(0, 4),   // Fila 1: 4 elementos
          processes.slice(4, 8)    // Fila 2: 4 elementos
        ];
      
      default:
        // Fallback para cualquier fase no especificada
        return [processes];
    }
  };

  const processRows = organizeProcessesInRows();

  const renderProcessRow = (rowProcesses: any[], rowIndex: number) => {
    const getGridCols = () => {
      const count = rowProcesses.length;
      switch (count) {
        case 1: return 'grid-cols-1';
        case 2: return 'grid-cols-1 md:grid-cols-2';
        case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
        case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
        case 5: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
        case 6: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6';
        default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      }
    };

    return (
      <div 
        key={`row-${rowIndex}`}
        className={`grid ${getGridCols()} gap-4 mb-4`}
        onDragOver={handleContainerDragOver}
        onDrop={handleContainerDrop}
        onDragLeave={handleDragLeave}
      >
        {rowProcesses.map((process, processIndex) => {
          const globalIndex = processRows.slice(0, rowIndex).flat().length + processIndex;
          console.log(`Renderizando proceso: ${process.name} en fila ${rowIndex}, índice ${processIndex}`);
          return (
            <div
              key={process.id}
              onDragOver={(e) => handleDragOver(e, globalIndex)}
              onDrop={(e) => handleDrop(e, globalIndex)}
              className={`transition-all duration-200 ${
                dragOverIndex === globalIndex ? 'scale-105 bg-blue-100/50 rounded-lg p-1' : ''
              }`}
            >
              <ProcessBox 
                process={process}
                phaseId={phase.id}
                index={globalIndex}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`mb-10 p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${phase.bgClass}`}>
      <div className="text-xl font-bold mb-4 pb-3 border-b-2 border-white/30 flex items-center">
        <span className="text-2xl mr-3">{phase.icon}</span>
        FASE {phaseNumber}: {phase.title}
      </div>
      <div className="mt-4">
        {processRows.map((rowProcesses, rowIndex) => 
          rowProcesses.length > 0 && renderProcessRow(rowProcesses, rowIndex)
        )}
      </div>
    </div>
  );
};

export default ProcessPhase;
