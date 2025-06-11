
import React from 'react';
import { processData } from '../data/processData';
import { Process } from '../types/process';

const Summary = () => {
  const calculateSummary = () => {
    let completos = 0;
    let parciales = 0;
    let pendientes = 0;

    processData.forEach(phase => {
      // Excluir las áreas de apoyo del cálculo del resumen
      if (phase.id === 'procesos-apoyo') {
        return;
      }
      
      phase.processes.forEach((process: Process) => {
        const hasAllLinks = process.pdfLink && process.figmaLink;
        const hasNoLinks = !process.pdfLink && !process.figmaLink;
        
        if (hasAllLinks) {
          completos++;
        } else if (hasNoLinks) {
          pendientes++;
        } else {
          parciales++;
        }
      });
    });

    return {
      completos,
      parciales,
      pendientes,
      total: completos + parciales + pendientes
    };
  };

  const calculateExcludedSummary = () => {
    // Procesos excluidos - estos son los que están en la nueva pestaña
    const excludedProcesses = [
      { pdfLink: 'https://drive.google.com/file/d/12rUQY-YVWv1-KUxWWgpgowYqA10RBD9v/view?usp=drive_link', figmaLink: 'https://www.figma.com/board/dsVuiJid3C4MIuo0iCRq8F/Enturnamiento---HUMAEDA?node-id=7-2246&t=hhrXbVoLnWJacgRS-0' }, // Enturnamiento
      { figmaLink: 'https://www.figma.com/board/ZStCeumbdvrJmf0SfstQ83/Seguridad-y-Trafico?node-id=0-1&t=ntrVYURgfKn1Xayl-0' }, // Seguridad - Tráfico
      {}, // Tracking Seguridad y Tráfico
      {} // Servicio al Cliente
    ];

    let completosExcluidos = 0;
    let parcialesExcluidos = 0;
    let pendientesExcluidos = 0;

    excludedProcesses.forEach(process => {
      const hasAllLinks = process.pdfLink && process.figmaLink;
      const hasNoLinks = !process.pdfLink && !process.figmaLink;
      
      if (hasAllLinks) {
        completosExcluidos++;
      } else if (hasNoLinks) {
        pendientesExcluidos++;
      } else {
        parcialesExcluidos++;
      }
    });

    return {
      completos: completosExcluidos,
      parciales: parcialesExcluidos,
      pendientes: pendientesExcluidos,
      total: excludedProcesses.length
    };
  };

  const summary = calculateSummary();
  const excludedSummary = calculateExcludedSummary();

  return (
    <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg border border-blue-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">📊 Resumen del Estado de Procesos</h2>
      
      {/* Resumen Principal */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">Procesos Principales</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-100 p-4 rounded-lg text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-700">{summary.completos}</div>
            <div className="text-sm font-medium text-green-600">Completados</div>
            <div className="text-xs text-green-500 mt-1">PDF + Figma</div>
          </div>
          
          <div className="bg-orange-100 p-4 rounded-lg text-center border-l-4 border-orange-500">
            <div className="text-2xl font-bold text-orange-700">{summary.parciales}</div>
            <div className="text-sm font-medium text-orange-600">Parciales</div>
            <div className="text-xs text-orange-500 mt-1">Solo PDF o Figma</div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg text-center border-l-4 border-yellow-500">
            <div className="text-2xl font-bold text-yellow-700">{summary.pendientes}</div>
            <div className="text-sm font-medium text-yellow-600">Pendientes</div>
            <div className="text-xs text-yellow-500 mt-1">Sin enlaces</div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg text-center border-l-4 border-blue-500">
            <div className="text-2xl font-bold text-blue-700">{summary.total}</div>
            <div className="text-sm font-medium text-blue-600">Total</div>
            <div className="text-xs text-blue-500 mt-1">Procesos</div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <div className="text-sm text-gray-600">
            Progreso: <span className="font-semibold text-green-600">{Math.round((summary.completos / summary.total) * 100)}%</span> completado
          </div>
        </div>
      </div>

      {/* Resumen Procesos Excluidos */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">Procesos Excluidos</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-50 p-3 rounded-lg text-center border border-green-200">
            <div className="text-lg font-bold text-green-600">{excludedSummary.completos}</div>
            <div className="text-xs font-medium text-green-500">Completados</div>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-lg text-center border border-orange-200">
            <div className="text-lg font-bold text-orange-600">{excludedSummary.parciales}</div>
            <div className="text-xs font-medium text-orange-500">Parciales</div>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-lg text-center border border-yellow-200">
            <div className="text-lg font-bold text-yellow-600">{excludedSummary.pendientes}</div>
            <div className="text-xs font-medium text-yellow-500">Pendientes</div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
            <div className="text-lg font-bold text-gray-600">{excludedSummary.total}</div>
            <div className="text-xs font-medium text-gray-500">Total Excluidos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
