
import React from 'react';
import ProcessBox from './ProcessBox';
import { Phase } from '../types/process';

interface ProcessPhaseProps {
  phase: Phase;
  phaseNumber: number;
}

const ProcessPhase: React.FC<ProcessPhaseProps> = ({ phase, phaseNumber }) => {
  return (
    <div className={`mb-10 p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${phase.bgClass}`}>
      <div className="text-xl font-bold mb-4 pb-3 border-b-2 border-white/30 flex items-center">
        <span className="text-2xl mr-3">{phase.icon}</span>
        FASE {phaseNumber}: {phase.title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {phase.processes.map((process) => (
          <ProcessBox 
            key={process.id}
            process={process}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessPhase;
