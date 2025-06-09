
import React from 'react';
import ProcessBox from './ProcessBox';
import { generalDiagram, coreBusinessDiagram } from '../data/processData';

const GeneralDiagram = () => {
  return (
    <div className="mb-10">
      {/* Arquitectura General Procesos Stone con ambas opciones */}
      <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${generalDiagram.bgClass}`}>
        <div className="text-xl font-bold mb-4 pb-3 border-b-2 border-white/30 flex items-center">
          <span className="text-2xl mr-3">{generalDiagram.icon}</span>
          {generalDiagram.title}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <ProcessBox 
            process={generalDiagram.process}
            phaseId="general"
            index={0}
          />
          <ProcessBox 
            process={coreBusinessDiagram.process}
            phaseId="general"
            index={1}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralDiagram;
