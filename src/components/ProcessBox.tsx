
import React from 'react';
import { Process, DragData } from '../types/process';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';
import { ExternalLink, FileText, Figma, GripVertical, FileCheck, MessageSquare } from 'lucide-react';

interface ProcessBoxProps {
  process: Process;
  phaseId: string;
  index: number;
}

const ProcessBox: React.FC<ProcessBoxProps> = ({ process, phaseId, index }) => {
  const hasAllLinks = process.pdfLink && process.figmaLink;
  const hasNoLinks = !process.pdfLink && !process.figmaLink;
  
  const borderColor = hasAllLinks ? 'border-l-green-500' : hasNoLinks ? 'border-l-yellow-500' : 'border-l-orange-500';
  const hoverBorderColor = hasAllLinks ? 'hover:border-l-green-600' : hasNoLinks ? 'hover:border-l-yellow-600' : 'hover:border-l-orange-600';

  const handlePdfClick = () => {
    if (process.pdfLink) {
      window.open(process.pdfLink, '_blank');
    }
  };

  const handleFigmaClick = () => {
    if (process.figmaLink) {
      window.open(process.figmaLink, '_blank');
    }
  };

  const handleDocumentoRefinadoClick = () => {
    if (process.documentoRefinadoLink) {
      window.open(process.documentoRefinadoLink, '_blank');
    }
  };

  const handleDocumentoObservacionesClick = () => {
    if (process.documentoObservacionesLink) {
      window.open(process.documentoObservacionesLink, '_blank');
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    const dragData: DragData = {
      processId: process.id,
      phaseId: phaseId,
      index: index
    };
    e.dataTransfer.setData('text/plain', JSON.stringify(dragData));
    e.dataTransfer.effectAllowed = 'move';
    
    // Add visual feedback
    setTimeout(() => {
      (e.target as HTMLElement).style.opacity = '0.5';
    }, 0);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    (e.target as HTMLElement).style.opacity = '1';
  };

  const getResponsableStatusBadge = () => {
    if (!process.responsableStatus) return null;
    
    const statusConfig = {
      'validacion-humadea': { text: 'Val. Humadea', color: 'bg-blue-100 text-blue-800' },
      'validacion-stone': { text: 'Val. Stone', color: 'bg-purple-100 text-purple-800' },
      'refinado-stone': { text: 'Ref. Stone', color: 'bg-green-100 text-green-800' }
    };
    
    const config = statusConfig[process.responsableStatus];
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${config.color}`}>
        {config.text}
      </span>
    );
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`bg-white/90 p-4 rounded-lg border-l-4 ${borderColor} ${hoverBorderColor} 
                 transition-all duration-300 cursor-move hover:bg-white hover:scale-105 
                 hover:shadow-lg group relative`}
    >
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-50 transition-opacity">
        <GripVertical className="h-4 w-4 text-gray-400" />
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer">
            <div className="text-sm font-medium text-gray-800 mb-3 flex items-center justify-between pr-6">
              {process.name}
              <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="mt-2 flex items-center justify-between">
              <div className="flex gap-1">
                <div className={`w-2 h-2 rounded-full ${process.pdfLink ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <div className={`w-2 h-2 rounded-full ${process.figmaLink ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <div className={`w-2 h-2 rounded-full ${process.documentoRefinadoLink ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <div className={`w-2 h-2 rounded-full ${process.documentoObservacionesLink ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className={`text-xs font-medium ${hasAllLinks ? 'text-green-600' : hasNoLinks ? 'text-yellow-600' : 'text-orange-600'}`}>
                  {hasAllLinks ? 'Completo' : hasNoLinks ? 'Pendiente' : 'Parcial'}
                </div>
                {getResponsableStatusBadge()}
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="w-56 bg-white border shadow-lg">
          {process.pdfLink && (
            <DropdownMenuItem 
              onClick={handlePdfClick}
              className="flex items-center gap-2 cursor-pointer hover:bg-red-50"
            >
              <FileText className="h-4 w-4 text-red-500" />
              <span>Documentación</span>
            </DropdownMenuItem>
          )}
          
          {process.figmaLink && (
            <DropdownMenuItem 
              onClick={handleFigmaClick}
              className="flex items-center gap-2 cursor-pointer hover:bg-purple-50"
            >
              <Figma className="h-4 w-4 text-purple-500" />
              <span>Figma</span>
            </DropdownMenuItem>
          )}

          {process.documentoRefinadoLink && (
            <DropdownMenuItem 
              onClick={handleDocumentoRefinadoClick}
              className="flex items-center gap-2 cursor-pointer hover:bg-green-50"
            >
              <FileCheck className="h-4 w-4 text-green-500" />
              <span>Documento Refinado</span>
            </DropdownMenuItem>
          )}

          {process.documentoObservacionesLink && (
            <DropdownMenuItem 
              onClick={handleDocumentoObservacionesClick}
              className="flex items-center gap-2 cursor-pointer hover:bg-orange-50"
            >
              <MessageSquare className="h-4 w-4 text-orange-500" />
              <span>Documento Observaciones</span>
            </DropdownMenuItem>
          )}
          
          {!process.pdfLink && !process.figmaLink && !process.documentoRefinadoLink && !process.documentoObservacionesLink && (
            <DropdownMenuItem disabled className="text-gray-400">
              <span>No hay enlaces disponibles</span>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProcessBox;
