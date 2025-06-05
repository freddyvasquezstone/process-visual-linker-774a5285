
import React from 'react';
import { processData } from '../data/processData';
import ProcessPhase from './ProcessPhase';
import Legend from './Legend';

const ProcessFlowDiagram = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
        <h1 className="text-center text-slate-800 mb-8 text-4xl font-bold text-shadow">
          🚛 Diagrama de Flujo - Proceso de Transporte
        </h1>
        
        {processData.map((phase, index) => (
          <React.Fragment key={phase.id}>
            <ProcessPhase 
              phase={phase}
              phaseNumber={index + 1}
            />
            {index < processData.length - 1 && (
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
      </div>
    </div>
  );
};

export default ProcessFlowDiagram;
