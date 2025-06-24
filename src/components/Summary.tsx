import React from 'react';
import { processData } from '../data/processData';
import { Process } from '../types/process';

const Summary = () => {
  const calculateSummary = () => {
    let completos = 0;
    let parciales = 0;
    let pendientes = 0;

    // IDs de los procesos que deben excluirse del conteo principal
    const excludedProcessIds = [
      'enturnamiento',
      'seguridad-trafico',
      'tracking-seguridad',
      'novedades-cupo',
      'novedades-op',
      'novedades-liquidacion',
      'riesgos-seguros',
      'siniestros'
    ];

    processData.forEach(phase => {
      // Excluir las áreas de apoyo del cálculo del resumen
      if (phase.id === 'procesos-apoyo') {
        return;
      }
      
      phase.processes.forEach((process: Process) => {
        // Excluir los procesos específicos que van en la pestaña adicional
        if (excludedProcessIds.includes(process.id)) {
          return;
        }

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
    let completosExcluidos = 0;
    let parcialesExcluidos = 0;
    let pendientesExcluidos = 0;

    // IDs de los procesos que están en la pestaña adicional
    const excludedProcessIds = [
      'enturnamiento',
      'seguridad-trafico',
      'tracking-seguridad',
      'novedades-cupo',
      'novedades-op',
      'novedades-liquidacion',
      'riesgos-seguros',
      'siniestros'
    ];

    processData.forEach(phase => {
      phase.processes.forEach((process: Process) => {
        // Solo contar los procesos que están en la pestaña adicional
        if (excludedProcessIds.includes(process.id)) {
          const hasAllLinks = process.pdfLink && process.figmaLink;
          const hasNoLinks = !process.pdfLink && !process.figmaLink;
          
          if (hasAllLinks) {
            completosExcluidos++;
          } else if (hasNoLinks) {
            pendientesExcluidos++;
          } else {
            parcialesExcluidos++;
          }
        }
      });
    });

    return {
      completos: completosExcluidos,
      parciales: parcialesExcluidos,
      pendientes: pendientesExcluidos,
      total: excludedProcessIds.length
    };
  };

  const calculateSupportSummary = () => {
    let completosApoyo = 0;
    let parcialesApoyo = 0;
    let pendientesApoyo = 0;

    const supportPhase = processData.find(phase => phase.id === 'procesos-apoyo');
    
    if (supportPhase) {
      supportPhase.processes.forEach((process: Process) => {
        const hasAllLinks = process.pdfLink && process.figmaLink;
        const hasNoLinks = !process.pdfLink && !process.figmaLink;
        
        if (hasAllLinks) {
          completosApoyo++;
        } else if (hasNoLinks) {
          pendientesApoyo++;
        } else {
          parcialesApoyo++;
        }
      });
    }

    return {
      completos: completosApoyo,
      parciales: parcialesApoyo,
      pendientes: pendientesApoyo,
      total: supportPhase ? supportPhase.processes.length : 0
    };
  };

  const summary = calculateSummary();
  const excludedSummary = calculateExcludedSummary();
  const supportSummary = calculateSupportSummary();

  // Calcular el resumen total combinado
  const totalSummary = {
    completos: summary.completos + excludedSummary.completos + supportSummary.completos,
    parciales: summary.parciales + excludedSummary.parciales + supportSummary.parciales,
    pendientes: summary.pendientes + excludedSummary.pendientes + supportSummary.pendientes,
    total: summary.total + excludedSummary.total + supportSummary.total
  };

  return (
    <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg border border-blue-100">
      {/* TÍTULO PRINCIPAL */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📊 Resumen del Estado de Procesos - Análisis de Información y Estructuración STONE para Proyecto HUMADEA
      </h2>
      
      {/* RESUMEN GENERAL DEL ESTADO - DESTACADO */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-md border-2 border-blue-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🎯 Resumen General del Estado
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl text-center border-l-4 border-green-500 shadow-md transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-green-700 mb-2">{totalSummary.completos}</div>
            <div className="text-lg font-semibold text-green-600 mb-1">Completados</div>
            <div className="text-sm text-green-500">PDF + Figma</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-xl text-center border-l-4 border-orange-500 shadow-md transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-orange-700 mb-2">{totalSummary.parciales}</div>
            <div className="text-lg font-semibold text-orange-600 mb-1">Parciales</div>
            <div className="text-sm text-orange-500">Solo PDF o Figma</div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl text-center border-l-4 border-yellow-500 shadow-md transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-yellow-700 mb-2">{totalSummary.pendientes}</div>
            <div className="text-lg font-semibold text-yellow-600 mb-1">Pendientes</div>
            <div className="text-sm text-yellow-500">Sin enlaces</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl text-center border-l-4 border-blue-500 shadow-md transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-blue-700 mb-2">{totalSummary.total}</div>
            <div className="text-lg font-semibold text-blue-600 mb-1">Total</div>
            <div className="text-sm text-blue-500">Procesos</div>
          </div>
        </div>
        
        {/* INDICADOR DE PROGRESO PRINCIPAL */}
        <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
          <div className="text-2xl font-bold text-gray-700 mb-2">
            🚀 Progreso General del Proyecto
          </div>
          <div className="text-4xl font-black text-green-600 mb-2">
            {Math.round((totalSummary.completos / totalSummary.total) * 100)}%
          </div>
          <div className="text-lg text-gray-600">
            Completado ({totalSummary.completos} de {totalSummary.total} procesos)
          </div>
          
          {/* Barra de progreso visual */}
          <div className="mt-4 bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${Math.round((totalSummary.completos / totalSummary.total) * 100)}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* SEPARADOR Y TÍTULO PARA DESGLOSE DETALLADO */}
      <div className="border-t-2 border-gray-300 pt-6">
        <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">
          📋 Desglose Detallado por Categorías
        </h3>
        
        {/* Procesos Principales */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-bold text-gray-600 mb-3 flex items-center">
            <span className="mr-2">🔧</span>
            Procesos Principales
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
            <div className="bg-green-50 p-3 rounded-lg text-center border border-green-200">
              <div className="text-xl font-bold text-green-600">{summary.completos}</div>
              <div className="text-sm font-medium text-green-500">Completados</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg text-center border border-orange-200">
              <div className="text-xl font-bold text-orange-600">{summary.parciales}</div>
              <div className="text-sm font-medium text-orange-500">Parciales</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg text-center border border-yellow-200">
              <div className="text-xl font-bold text-yellow-600">{summary.pendientes}</div>
              <div className="text-sm font-medium text-yellow-500">Pendientes</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center border border-blue-200">
              <div className="text-xl font-bold text-blue-600">{summary.total}</div>
              <div className="text-sm font-medium text-blue-500">Total</div>
            </div>
          </div>
          <div className="text-center bg-gray-50 p-2 rounded">
            <span className="text-sm font-bold text-gray-600">
              Progreso: <span className="text-lg font-black text-green-600">{Math.round((summary.completos / summary.total) * 100)}%</span>
            </span>
          </div>
        </div>

        {/* Procesos Adicionales */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-bold text-gray-600 mb-3 flex items-center">
            <span className="mr-2">➕</span>
            Procesos Adicionales
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
            <div className="bg-green-50 p-3 rounded-lg text-center border border-green-200">
              <div className="text-xl font-bold text-green-600">{excludedSummary.completos}</div>
              <div className="text-sm font-medium text-green-500">Completados</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg text-center border border-orange-200">
              <div className="text-xl font-bold text-orange-600">{excludedSummary.parciales}</div>
              <div className="text-sm font-medium text-orange-500">Parciales</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg text-center border border-yellow-200">
              <div className="text-xl font-bold text-yellow-600">{excludedSummary.pendientes}</div>
              <div className="text-sm font-medium text-yellow-500">Pendientes</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
              <div className="text-xl font-bold text-gray-600">{excludedSummary.total}</div>
              <div className="text-sm font-medium text-gray-500">Total</div>
            </div>
          </div>
          <div className="text-center bg-gray-50 p-2 rounded">
            <span className="text-sm font-bold text-gray-600">
              Progreso: <span className="text-lg font-black text-green-600">{excludedSummary.total > 0 ? Math.round((excludedSummary.completos / excludedSummary.total) * 100) : 0}%</span>
            </span>
          </div>
        </div>

        {/* Procesos de Apoyo */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-bold text-gray-600 mb-3 flex items-center">
            <span className="mr-2">🤝</span>
            Procesos de Apoyo
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
            <div className="bg-green-50 p-3 rounded-lg text-center border border-green-200">
              <div className="text-xl font-bold text-green-600">{supportSummary.completos}</div>
              <div className="text-sm font-medium text-green-500">Completados</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg text-center border border-orange-200">
              <div className="text-xl font-bold text-orange-600">{supportSummary.parciales}</div>
              <div className="text-sm font-medium text-orange-500">Parciales</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg text-center border border-yellow-200">
              <div className="text-xl font-bold text-yellow-600">{supportSummary.pendientes}</div>
              <div className="text-sm font-medium text-yellow-500">Pendientes</div>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg text-center border border-purple-200">
              <div className="text-xl font-bold text-purple-600">{supportSummary.total}</div>
              <div className="text-sm font-medium text-purple-500">Total</div>
            </div>
          </div>
          <div className="text-center bg-gray-50 p-2 rounded">
            <span className="text-sm font-bold text-gray-600">
              Progreso: <span className="text-lg font-black text-green-600">{supportSummary.total > 0 ? Math.round((supportSummary.completos / supportSummary.total) * 100) : 0}%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;