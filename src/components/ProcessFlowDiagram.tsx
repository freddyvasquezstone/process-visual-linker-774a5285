
import React, { useState } from 'react';
import { processData } from '../data/processData';
import ProcessPhase from './ProcessPhase';
import GeneralDiagram from './GeneralDiagram';
import Legend from './Legend';
import Summary from './Summary';
import ExcludedProcesses from './ExcludedProcesses';
import { Phase, Process } from '../types/process';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProcessFlowDiagram = () => {
  const [phases, setPhases] = useState<Phase[]>(processData);

  const handleReorderProcesses = (
    targetPhaseId: string, 
    fromIndex: number, 
    toIndex: number, 
    fromPhaseId?: string
  ) => {
    setPhases(prevPhases => {
      const newPhases = [...prevPhases];
      
      if (fromPhaseId && fromPhaseId !== targetPhaseId) {
        // Mover entre fases diferentes
        const fromPhaseIndex = newPhases.findIndex(p => p.id === fromPhaseId);
        const toPhaseIndex = newPhases.findIndex(p => p.id === targetPhaseId);
        
        if (fromPhaseIndex !== -1 && toPhaseIndex !== -1) {
          const processToMove = newPhases[fromPhaseIndex].processes[fromIndex];
          
          // Remover del origen
          newPhases[fromPhaseIndex] = {
            ...newPhases[fromPhaseIndex],
            processes: newPhases[fromPhaseIndex].processes.filter((_, index) => index !== fromIndex)
          };
          
          // Agregar al destino
          const newProcesses = [...newPhases[toPhaseIndex].processes];
          newProcesses.splice(toIndex, 0, processToMove);
          
          newPhases[toPhaseIndex] = {
            ...newPhases[toPhaseIndex],
            processes: newProcesses
          };
        }
      } else {
        // Reordenar dentro de la misma fase
        const phaseIndex = newPhases.findIndex(p => p.id === targetPhaseId);
        
        if (phaseIndex !== -1) {
          const newProcesses = [...newPhases[phaseIndex].processes];
          const [movedProcess] = newProcesses.splice(fromIndex, 1);
          newProcesses.splice(toIndex, 0, movedProcess);
          
          newPhases[phaseIndex] = {
            ...newPhases[phaseIndex],
            processes: newProcesses
          };
        }
      }
      
      return newPhases;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
        <h1 className="text-center text-slate-800 mb-8 text-4xl font-bold text-shadow">
          🚛 Diagrama de Flujo - Proceso de Transporte 
          <h1>
                          GRUPO HUMADEA
          </h1>
                          
        </h1>
        
        
        
        <Tabs defaultValue="main-processes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="main-processes" className="text-lg font-bold">Procesos Principales</TabsTrigger>
            <TabsTrigger value="excluded-processes" className="text-lg font-bold">Procesos Adicionales</TabsTrigger>
          </TabsList>
          
          <TabsContent value="main-processes">
            <GeneralDiagram />
            
            {phases.map((phase, index) => (
              <React.Fragment key={phase.id}>
                <ProcessPhase 
                  phase={phase}
                  phaseNumber={index + 1}
                  onReorderProcesses={handleReorderProcesses}
                />
                {index < phases.length - 1 && (
                  <div className="text-center text-3xl text-gray-500 my-4">
                    {index === 2 || index === 6 ? (
                      <div className="flex justify-center items-center my-5">
                        <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden rounded">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="animate-bounce">⬇️</div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
            
            <Legend />
          </TabsContent>
          
          <TabsContent value="excluded-processes">
            <ExcludedProcesses />
          </TabsContent>
        </Tabs>

        <Summary />
      </div>
    </div>
  );
};

export default ProcessFlowDiagram;
