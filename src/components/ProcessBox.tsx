
import React from 'react';
import { Process } from '../types/process';

interface ProcessBoxProps {
  process: Process;
}

const ProcessBox: React.FC<ProcessBoxProps> = ({ process }) => {
  const hasAllLinks = process.pdfLink && process.figmaLink;
  const hasNoLinks = !process.pdfLink && !process.figmaLink;
  
  const borderColor = hasAllLinks ? 'border-l-green-500' : 'border-l-yellow-500';
  const hoverBorderColor = hasAllLinks ? 'hover:border-l-green-600' : 'hover:border-l-yellow-600';

  const handleClick = () => {
    if (process.pdfLink) {
      window.open(process.pdfLink, '_blank');
    } else if (process.figmaLink) {
      window.open(process.figmaLink, '_blank');
    }
  };

  const handlePdfClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (process.pdfLink) {
      window.open(process.pdfLink, '_blank');
    }
  };

  const handleFigmaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (process.figmaLink) {
      window.open(process.figmaLink, '_blank');
    }
  };

  return (
    <div 
      className={`bg-white/90 p-4 rounded-lg border-l-4 ${borderColor} ${hoverBorderColor} 
                 transition-all duration-300 cursor-pointer hover:bg-white hover:scale-105 
                 hover:shadow-lg group`}
      onClick={handleClick}
    >
      <div className="text-sm font-medium text-gray-800 mb-3">
        {process.name}
      </div>
      
      <div className="flex gap-2 justify-end">
        {process.pdfLink && (
          <button
            onClick={handlePdfClick}
            className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
            title="Ver PDF"
          >
            PDF
          </button>
        )}
        {process.figmaLink && (
          <button
            onClick={handleFigmaClick}
            className="px-2 py-1 bg-purple-500 text-white text-xs rounded hover:bg-purple-600 transition-colors"
            title="Ver Figma"
          >
            FIGMA
          </button>
        )}
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
  );
};

export default ProcessBox;
