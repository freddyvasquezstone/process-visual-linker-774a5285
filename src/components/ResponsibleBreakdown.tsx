import React, { useState } from 'react';
import { processData } from '../data/processData';
import { Process } from '../types/process';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Eye, CheckCircle, FileText, Figma, FileCheck, MessageSquare } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';

const ResponsibleBreakdown = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const calculateResponsibleSummary = () => {
    let validacionHumadea = 0;
    let validacionStone = 0;
    let refinadoStone = 0;

    // IDs de los procesos que deben excluirse del conteo principal y que son considerados adicionales
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

    // Procesos principales (todas las fases excepto apoyo y excluyendo los IDs excluidos)
    processData.forEach(phase => {
      if (phase.id === 'procesos-apoyo') {
        return;
      }
      phase.processes.forEach((process: Process) => {
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
            validacionHumadea++;
            break;
        }
      });
    });

    // Procesos adicionales (solo los IDs excluidos, en cualquier fase excepto apoyo)
    processData.forEach(phase => {
      if (phase.id === 'procesos-apoyo') {
        return;
      }
      phase.processes.forEach((process: Process) => {
        if (excludedProcessIds.includes(process.id)) {
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
              validacionHumadea++;
              break;
          }
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
    const processes: { name: string; phase: string; process: Process }[] = [];

    // Incluir TODOS los procesos, incluyendo los adicionales
    processData.forEach(phase => {
      phase.processes.forEach((process: Process) => {
        const processStatus = process.responsableStatus || 'validacion-humadea';
        if (processStatus === status) {
          processes.push({
            name: process.name,
            phase: phase.title,
            process: process
          });
        }
      });
    });

    return processes;
  };

  const handlePdfClick = (process: Process) => {
    if (process.pdfLink) {
      window.open(process.pdfLink, '_blank');
    }
  };

  const handleFigmaClick = (process: Process) => {
    if (process.figmaLink) {
      window.open(process.figmaLink, '_blank');
    }
  };

  const handleDocumentoRefinadoClick = (process: Process) => {
    if (process.documentoRefinadoLink) {
      window.open(process.documentoRefinadoLink, '_blank');
    }
  };

  const handleDocumentoObservacionesClick = (process: Process) => {
    if (process.documentoObservacionesLink) {
      window.open(process.documentoObservacionesLink, '_blank');
    }
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
                {getProcessesByStatus(activeFilter).map((item, index) => (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="font-medium text-sm text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{item.phase}</div>
                        <div className="mt-2 flex gap-1">
                          <div 
                            className={`w-2 h-2 rounded-full ${item.process.pdfLink ? 'bg-green-500' : 'bg-gray-300'}`} 
                            title="Documentación PDF"
                          ></div>
                          <div 
                            className={`w-2 h-2 rounded-full ${item.process.figmaLink ? 'bg-green-500' : 'bg-gray-300'}`} 
                            title="Figma"
                          ></div>
                          <div 
                            className={`w-2 h-2 rounded-full ${item.process.documentoRefinadoLink ? 'bg-green-500' : 'bg-gray-300'}`} 
                            title="Documento Refinado"
                          ></div>
                          <div 
                            className={`w-2 h-2 rounded-full ${item.process.documentoObservacionesLink ? 'bg-green-500' : 'bg-gray-300'}`} 
                            title="Documento Observaciones"
                          ></div>
                        </div>
                      </div>
                    </DropdownMenuTrigger>
                    
                    <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                      <DropdownMenuItem 
                        onClick={() => handlePdfClick(item.process)}
                        className={`flex items-center gap-2 cursor-pointer hover:bg-red-50 ${!item.process.pdfLink ? 'opacity-50' : ''}`}
                      >
                        <FileText className="h-4 w-4 text-red-500" />
                        <span>Documentación</span>
                        {!item.process.pdfLink && <span className="text-xs text-gray-400 ml-auto">(Sin enlace)</span>}
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem 
                        onClick={() => handleFigmaClick(item.process)}
                        className={`flex items-center gap-2 cursor-pointer hover:bg-purple-50 ${!item.process.figmaLink ? 'opacity-50' : ''}`}
                      >
                        <Figma className="h-4 w-4 text-purple-500" />
                        <span>Figma</span>
                        {!item.process.figmaLink && <span className="text-xs text-gray-400 ml-auto">(Sin enlace)</span>}
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />

                      <DropdownMenuItem 
                        onClick={() => handleDocumentoRefinadoClick(item.process)}
                        className={`flex items-center gap-2 cursor-pointer hover:bg-green-50 ${!item.process.documentoRefinadoLink ? 'opacity-50' : ''}`}
                      >
                        <FileCheck className="h-4 w-4 text-green-500" />
                        <span>Documento Refinado</span>
                        {!item.process.documentoRefinadoLink && <span className="text-xs text-gray-400 ml-auto">(Sin enlace)</span>}
                      </DropdownMenuItem>

                      <DropdownMenuItem 
                        onClick={() => handleDocumentoObservacionesClick(item.process)}
                        className={`flex items-center gap-2 cursor-pointer hover:bg-orange-50 ${!item.process.documentoObservacionesLink ? 'opacity-50' : ''}`}
                      >
                        <MessageSquare className="h-4 w-4 text-orange-500" />
                        <span>Documento Observaciones</span>
                        {!item.process.documentoObservacionesLink && <span className="text-xs text-gray-400 ml-auto">(Sin enlace)</span>}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
