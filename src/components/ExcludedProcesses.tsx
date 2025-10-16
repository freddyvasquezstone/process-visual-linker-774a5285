
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
      figmaLink: 'https://www.figma.com/board/dsVuiJid3C4MIuo0iCRq8F/Enturnamiento---HUMAEDA?node-id=7-2246&t=hhrXbVoLnWJacgRS-0',
      documentoRefinadoLink: 'https://drive.google.com/file/d/1H-x1JNTxnz76zd6FuOu0wxNlQCtQgE8b/view?usp=drive_link',
      documentoObservacionesLink: 'https://docs.google.com/spreadsheets/d/1xEym7Q0n7ppPsprHYK54XTeM5ehaRKtq/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true',
      responsableStatus: 'refinado-stone'
    },
    {
      id: 'seguridad-trafico-excluded',
      name: 'SEGURIDAD - TRÁFICO',
      pdfLink: 'https://drive.google.com/file/d/1owCaQnpG2DEkWtwbzaaNCLfhXGrIJJxQ/view?usp=drive_link',
      figmaLink: 'https://www.figma.com/board/ZStCeumbdvrJmf0SfstQ83/Seguridad-y-Trafico?node-id=0-1&t=ntrVYURgfKn1Xayl-0',
      documentoRefinadoLink: 'https://drive.google.com/file/d/1V8FXqYhc9krPzjm0fPjRuDb3Q3eNNnzy/view?usp=drive_link',
      documentoObservacionesLink: 'https://docs.google.com/spreadsheets/d/1tr8sW7C-PlmWzTdunYVJL9ISWwFeh8Ra/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true',
      responsableStatus: 'refinado-stone'
    },
    {
      id: 'tracking-seguridad-excluded',
      name: 'TRAKING SEGURIDAD Y TRÁFICO',
      pdfLink: 'https://drive.google.com/file/d/1_zqS7-hHL_Cd_DjDXbjEszHGp_BCmBeQ/view?usp=drive_link',
      figmaLink: 'https://www.figma.com/board/wlQ0QLIByXhLmYmhjOyzIw/Tracking-Seguridad---Trafico?node-id=0-1&p=f&t=jiaXEAdMx1Px0mzy-0',
      documentoRefinadoLink: 'https://drive.google.com/file/d/1uCfjCkxVnbwjIT4LnYxArEL13k-j2rJr/view?usp=drive_link',
      documentoObservacionesLink: 'https://docs.google.com/spreadsheets/d/1BtcGWjH6ZniepBAYDihIwGRhIZyPnX6L/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true',
      responsableStatus: 'refinado-stone'
    },
    {
        id: 'novedades-cupo',
        name: 'NOVEDADES CUPO DE CLIENTES',
        pdfLink:'https://drive.google.com/file/d/1N-d71Hu3z428oE1bLJimWiiIQmZUeOmh/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/O30JXnUaUExEHptYRfcqTY/Novedades-Cupo-de-Cliente?node-id=0-1&p=f&t=RiMP9W5iSAtrdE3b-0',
        documentoRefinadoLink: 'https://drive.google.com/file/d/1Ru9EWaoAjA08oQmxhEx_oN-eA2ei5gIz/view?usp=drive_link',
        documentoObservacionesLink: 'https://docs.google.com/spreadsheets/d/1cOoaWlTyRDJII-ffScjtnQx4er_EMXCh/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true',
        responsableStatus: 'refinado-stone'
    },
    {
        id: 'novedades-op',
        name: 'NOVEDADES ORDEN DE PRODUCCIÓN',
        pdfLink: 'https://drive.google.com/file/d/1kpuejtZcxDPJdWS2G9MlAtp0F9Ki1Ckp/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/UAE9bV4404qRICSBipbLVy/Novedades-Orden-de-Producci%C3%B3n?t=jl9oTRqoBmGbjhyK-0',
        documentoRefinadoLink: 'https://drive.google.com/file/d/1XmJiC1_G1mMzJAgwcy4sJG6zPSQnvqtg/view?usp=drive_link',
        documentoObservacionesLink: 'https://docs.google.com/spreadsheets/d/1AHiJoFr40xvJyoLutZSSVKtlaMtiSGXE/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true',
        responsableStatus: 'refinado-stone'
      },
    {
        id: 'novedades-liquidacion',
        name: 'NOVEDADES DE CUMPLIDOS Y LIQUIDACIONES',
        pdfLink: 'https://drive.google.com/file/d/1dpQE5zrsin8ahjzEFDJQoLT7Gd1n9Ee8/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/SY4Nm8QW4zSpVIC8CaSj1p/Novedades-de-Liquidaci%C3%B3n-y-Cumplidos-HUMADEA?node-id=0-1&p=f&t=RvjDniWYrWYMl10e-0',
        documentoRefinadoLink: 'https://drive.google.com/file/d/1yKVbExBD-lK7ZPKbmQSEG7yIUXhneC9X/view?usp=drive_link',
        documentoObservacionesLink: 'https://docs.google.com/spreadsheets/d/1VGr1Fn59sApjLbcmqrLPb1kONSmvNIBX/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true',
        responsableStatus: 'refinado-stone'
      },
    {
        id: 'riesgos-seguros',
        name: 'RIESGOS Y SEGUROS',
        pdfLink: 'https://drive.google.com/file/d/1Lyd5bVxzz6HqbcPaV7gdSHL5PMO07h7C/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/yeUQMGsMYRK4HzkaYusITP/Seguros-Humadea?node-id=0-1&p=f&t=Fx8vFMfx4ySmmSKN-0',
        documentoRefinadoLink: 'https://drive.google.com/file/d/1P8i3VI2sqUy6J_br-_KhVLd_OvU26WHz/view?usp=drive_link',
        documentoObservacionesLink: 'https://docs.google.com/spreadsheets/d/1obmpK-my2MlyAGhTHzMPMGvTl5h6Gnhv/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true',
        responsableStatus: 'refinado-stone'
      },
    {
        id: 'siniestros',
        name: 'SINIESTROS',
        pdfLink: 'https://drive.google.com/file/d/1BveLteIHxoJhiUNVp8gK847yJkQFPcB_/view?usp=drive_link',
        figmaLink:'https://www.figma.com/board/7fYrPn1eY54FZdUISWH8oA/Siniestros-HUMADEA?t=AUH7kEKBSItw6lRB-0',
        documentoRefinadoLink: 'https://drive.google.com/file/d/13MwI0yZQDZZm_lRqY6hpfZmTK1wFwfRj/view?usp=drive_link',
        documentoObservacionesLink: 'https://docs.google.com/spreadsheets/d/1obmpK-my2MlyAGhTHzMPMGvTl5h6Gnhv/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true',
        responsableStatus: 'refinado-stone'
      },
      {
        id: 'estructura-app',
        name: 'ESTRUCTURA APP',
        pdfLink: 'https://drive.google.com/file/d/1mPe5amfvhF1OOo9Z0qR4DHaRb8QD03_f/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/qLHim6TIvac6glqikYUWkC/Estructuraci%C3%B3n-APP-HUMADEA?node-id=0-1&p=f&t=RGTmKkea9OOvD07X-0',
        documentoRefinadoLink: 'https://drive.google.com/file/d/1y-LycV4wQ_8NiTOZ3xdRmCnJBk6hZaqA/view?usp=drive_link',
        documentoObservacionesLink: 'https://docs.google.com/spreadsheets/d/1y9S2q7xyxZk2afQVUgHom1b5ozjSr7Vn/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true',
        responsableStatus: 'refinado-stone'
      },
      {
        id: 'servicio-cliente',
        name: 'SERVICIO AL CLIENTE',
        pdfLink: 'https://drive.google.com/file/d/1sVKOouS3HANO4UgUE20LmdtoFMIKjDtt/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/GtrZkRloRE7zcqm1jPN2mY/Servicio-Al-cliente-HUMADEA?node-id=0-1&p=f&t=HEICLz4ekWxwa70E-0',
        documentoRefinadoLink: 'https://drive.google.com/file/d/1h4ZoRLJiEmOHu0ArTMDPYrgIQWAJkRBQ/view?usp=drive_link',
        documentoObservacionesLink: 'https://docs.google.com/spreadsheets/d/1cdZ2oB2kr3czAl9F7vD25E0rnxcGpqtd/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true',
        responsableStatus: 'refinado-stone'
      },
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
