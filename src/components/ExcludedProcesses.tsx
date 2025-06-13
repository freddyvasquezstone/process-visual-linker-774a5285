
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
      pdfLink: 'https://drive.google.com/file/d/1owCaQnpG2DEkWtwbzaaNCLfhXGrIJJxQ/view?usp=drive_link',
      figmaLink: 'https://www.figma.com/board/ZStCeumbdvrJmf0SfstQ83/Seguridad-y-Trafico?node-id=0-1&t=ntrVYURgfKn1Xayl-0'
    },
    {
      id: 'tracking-seguridad-excluded',
      name: 'TRAKING SEGURIDAD Y TRÁFICO',
      pdfLink: 'https://drive.google.com/file/d/1_zqS7-hHL_Cd_DjDXbjEszHGp_BCmBeQ/view?usp=drive_link',
      figmaLink: 'https://www.figma.com/board/wlQ0QLIByXhLmYmhjOyzIw/Tracking-Seguridad---Trafico?node-id=0-1&p=f&t=jiaXEAdMx1Px0mzy-0'
    },
    {
      id: 'servicio-cliente-excluded',
      name: 'SERVICIO AL CLIENTE',
      pdfLink: 'https://drive.google.com/file/d/1sVKOouS3HANO4UgUE20LmdtoFMIKjDtt/view?usp=drive_link',
      figmaLink: 'https://www.figma.com/board/GtrZkRloRE7zcqm1jPN2mY/Servicio-Al-cliente-HUMADEA?node-id=0-1&p=f&t=HEICLz4ekWxwa70E-0'
    },
    {
        id: 'novedades-cupo',
        name: 'NOVEDADES CUPO DE CLIENTES',
        pdfLink:'https://drive.google.com/file/d/1N-d71Hu3z428oE1bLJimWiiIQmZUeOmh/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/O30JXnUaUExEHptYRfcqTY/Novedades-Cupo-de-Cliente?node-id=0-1&p=f&t=RiMP9W5iSAtrdE3b-0'
    },
    {
        id: 'novedades-op',
        name: 'NOVEDADES ORDEN DE PRODUCCIÓN',
        pdfLink: 'https://drive.google.com/file/d/1kpuejtZcxDPJdWS2G9MlAtp0F9Ki1Ckp/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/UAE9bV4404qRICSBipbLVy/Novedades-Orden-de-Producci%C3%B3n?t=jl9oTRqoBmGbjhyK-0'
      },
    {
        id: 'novedades-liquidacion',
        name: 'NOVEDADES DE CUMPLIDOS Y LIQUIDACIONES',
        pdfLink: 'https://drive.google.com/file/d/1dpQE5zrsin8ahjzEFDJQoLT7Gd1n9Ee8/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/SY4Nm8QW4zSpVIC8CaSj1p/Novedades-de-Liquidaci%C3%B3n-y-Cumplidos-HUMADEA?node-id=0-1&p=f&t=RvjDniWYrWYMl10e-0'
      },
    {
        id: 'riesgos-seguros',
        name: 'RIESGOS Y SEGUROS',
        pdfLink: 'https://drive.google.com/file/d/1Lyd5bVxzz6HqbcPaV7gdSHL5PMO07h7C/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/yeUQMGsMYRK4HzkaYusITP/Seguros-Humadea?node-id=0-1&p=f&t=Fx8vFMfx4ySmmSKN-0'
      },
    {
        id: 'siniestros',
        name: 'SINIESTROS'
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
