
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

  return (
    <div className={`mb-10 p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${phase.bgClass}`}>
      <div className="text-xl font-bold mb-4 pb-3 border-b-2 border-white/30 flex items-center">
        <span className="text-2xl mr-3">{phase.icon}</span>
        FASE {phaseNumber}: {phase.title}
      </div>
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 min-h-[100px]"
        onDragOver={handleContainerDragOver}
        onDrop={handleContainerDrop}
        onDragLeave={handleDragLeave}
      >
        {phase.processes.map((process, index) => (
          <div
            key={process.id}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            className={`transition-all duration-200 ${
              dragOverIndex === index ? 'scale-105 bg-blue-100/50 rounded-lg p-1' : ''
            }`}
          >
            <ProcessBox 
              process={process}
              phaseId={phase.id}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessPhase;
