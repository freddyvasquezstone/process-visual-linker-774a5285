
import React from 'react';
import { Process } from '../types/process';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ExternalLink, FileText, Figma } from 'lucide-react';

interface ProcessBoxProps {
  process: Process;
}

const ProcessBox: React.FC<ProcessBoxProps> = ({ process }) => {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div 
          className={`bg-white/90 p-4 rounded-lg border-l-4 ${borderColor} ${hoverBorderColor} 
                     transition-all duration-300 cursor-pointer hover:bg-white hover:scale-105 
                     hover:shadow-lg group`}
        >
          <div className="text-sm font-medium text-gray-800 mb-3 flex items-center justify-between">
            {process.name}
            <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="mt-2 flex items-center justify-between">
            <div className="flex gap-1">
              <div className={`w-2 h-2 rounded-full ${process.pdfLink ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <div className={`w-2 h-2 rounded-full ${process.figmaLink ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            </div>
            <div className={`text-xs font-medium ${hasAllLinks ? 'text-green-600' : hasNoLinks ? 'text-yellow-600' : 'text-orange-600'}`}>
              {hasAllLinks ? 'Completo' : hasNoLinks ? 'Pendiente' : 'Parcial'}
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-48 bg-white border shadow-lg">
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
        
        {hasNoLinks && (
          <DropdownMenuItem disabled className="text-gray-400">
            <span>No hay enlaces disponibles</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProcessBox;
