
import React from 'react';
import ProcessBox from './ProcessBox';
import { Process } from '../types/process';

const ExcludedProcesses = () => {
  // Procesos excluidos según la solicitud del usuario
  const excludedProcesses: Process[] = [
    {
      id: 'enturnamiento-excluded',
      name: 'ENTURNAMIENTO',
      pdfLink: 'https://drive.google.com/file/d/12rUQY-YVWv1-KUxWWgpgowYqA10RBD9v/view?usp=drive_link',
      figmaLink: 'https://www.figma.com/board/dsVuiJid3C4MIuo0iCRq8F/Enturnamiento---HUMAEDA?node-id=7-2246&t=hhrXbVoLnWJacgRS-0'
    },
    {
      id: 'seguridad-trafico-excluded',
      name: 'SEGURIDAD - TRÁFICO',
      figmaLink: 'https://www.figma.com/board/ZStCeumbdvrJmf0SfstQ83/Seguridad-y-Trafico?node-id=0-1&t=ntrVYURgfKn1Xayl-0'
    },
    {
      id: 'tracking-seguridad-excluded',
      name: 'TRACKING SEGURIDAD Y TRÁFICO'
    },
    {
      id: 'servicio-cliente-excluded',
      name: 'SERVICIO AL CLIENTE'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🔄 Procesos Excluidos del Proyecto Principal
        </h2>
        <p className="text-gray-600">
          Estos procesos no se incluyen en el conteo principal pero están disponibles para referencia
        </p>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg">
        <div className="text-xl font-bold mb-4 pb-3 border-b-2 border-gray-300 flex items-center">
          <span className="text-2xl mr-3">📋</span>
          PROCESOS NO INCLUIDOS EN EL PROYECTO
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {excludedProcesses.map((process, index) => (
            <ProcessBox 
              key={process.id}
              process={process}
              phaseId="excluded"
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <div className="flex">
          <div className="flex-shrink-0">
            <span className="text-yellow-400 text-xl">⚠️</span>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Nota:</strong> Estos procesos están duplicados para referencia y no afectan los contadores del proyecto principal.
              Los procesos originales permanecen en sus fases correspondientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcludedProcesses;
