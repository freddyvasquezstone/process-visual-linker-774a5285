
import React, { useState } from 'react';
import { processData } from '../data/processData';
import { Process } from '../types/process';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Eye, CheckCircle } from 'lucide-react';

const ResponsibleBreakdown = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const calculateResponsibleSummary = () => {
    let validacionHumadea = 0;
    let validacionStone = 0;
    let refinadoStone = 0;

    // IDs de los procesos que deben excluirse del conteo (mismos que en Summary.tsx)
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
      // Excluir las áreas de apoyo del cálculo del resumen (igual que en Summary.tsx)
      if (phase.id === 'procesos-apoyo') {
        return;
      }
      
      phase.processes.forEach((process: Process) => {
        // Excluir los procesos específicos que van en la pestaña adicional
        if (excludedProcessIds.includes(process.id)) {
          return;
        }

        switch (process.responsableStatus) {
          case 'validacion-humadea':
            validacionHumadea++;
            break;
          case 'validacion-stone':
            validacionStone++;
            break;
          case 'refinado-stone':
            refinadoStone++;
            break;
          default:
            // Si no tiene estado asignado, lo contamos como validación humadea por defecto
            validacionHumadea++;
            break;
        }
      });
    });

    return {
      validacionHumadea,
      validacionStone,
      refinadoStone,
      total: validacionHumadea + validacionStone + refinadoStone
    };
  };

  const getProcessesByStatus = (status: string) => {
    const processes: { name: string; phase: string }[] = [];

    // IDs de los procesos que deben excluirse del conteo (mismos que en Summary.tsx)
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
      // Excluir las áreas de apoyo del cálculo del resumen (igual que en Summary.tsx)
      if (phase.id === 'procesos-apoyo') {
        return;
      }
      
      phase.processes.forEach((process: Process) => {
        // Excluir los procesos específicos que van en la pestaña adicional
        if (excludedProcessIds.includes(process.id)) {
          return;
        }

        const processStatus = process.responsableStatus || 'validacion-humadea';
        if (processStatus === status) {
          processes.push({
            name: process.name,
            phase: phase.title
          });
        }
      });
    });

    return processes;
  };

  const summary = calculateResponsibleSummary();

  const handleCategoryClick = (status: string) => {
    setActiveFilter(activeFilter === status ? null : status);
  };

  return (
    <div className="mb-8">
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="h-6 w-6" />
            Desglose por Responsables
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div 
              className="bg-blue-100 p-4 rounded-lg text-center border-l-4 border-blue-500 cursor-pointer hover:bg-blue-200 transition-colors"
              onClick={() => handleCategoryClick('validacion-humadea')}
            >
              <div className="text-2xl font-bold text-blue-700">{summary.validacionHumadea}</div>
              <div className="text-sm font-medium text-blue-600">Validación Humadea</div>
              <div className="text-xs text-blue-500 mt-1">Click para ver detalles</div>
            </div>
            
            <div 
              className="bg-purple-100 p-4 rounded-lg text-center border-l-4 border-purple-500 cursor-pointer hover:bg-purple-200 transition-colors"
              onClick={() => handleCategoryClick('validacion-stone')}
            >
              <div className="text-2xl font-bold text-purple-700">{summary.validacionStone}</div>
              <div className="text-sm font-medium text-purple-600">Validación Stone</div>
              <div className="text-xs text-purple-500 mt-1">Click para ver detalles</div>
            </div>
            
            <div 
              className="bg-green-100 p-4 rounded-lg text-center border-l-4 border-green-500 cursor-pointer hover:bg-green-200 transition-colors"
              onClick={() => handleCategoryClick('refinado-stone')}
            >
              <div className="text-2xl font-bold text-green-700">{summary.refinadoStone}</div>
              <div className="text-sm font-medium text-green-600">Refinado Stone</div>
              <div className="text-xs text-green-500 mt-1">Click para ver detalles</div>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="text-lg font-bold text-gray-700">
              Total de Procesos: {summary.total}
            </div>
          </div>

          {activeFilter && (
            <div className="mt-6 p-4 bg-white rounded-lg border shadow-sm">
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Procesos en {activeFilter === 'validacion-humadea' ? 'Validación Humadea' : 
                             activeFilter === 'validacion-stone' ? 'Validación Stone' : 'Refinado Stone'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {getProcessesByStatus(activeFilter).map((process, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                    <div className="font-medium text-sm text-gray-800">{process.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{process.phase}</div>
                  </div>
                ))}
              </div>
              {getProcessesByStatus(activeFilter).length === 0 && (
                <div className="text-center text-gray-500 py-4">
                  No hay procesos en esta categoría
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResponsibleBreakdown;
