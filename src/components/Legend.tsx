
import React from 'react';

const Legend = () => {
  const legendItems = [
    { bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100', title: 'Configuración Inicial', description: 'Preparación de recursos básicos' },
    { bgClass: 'bg-gradient-to-br from-purple-50 to-purple-100', title: 'Gestión de Clientes', description: 'Administración de cartera de clientes' },
    { bgClass: 'bg-gradient-to-br from-green-50 to-green-100', title: 'Configuración Operativa', description: 'Definición de parámetros comerciales' },
    { bgClass: 'bg-gradient-to-br from-orange-50 to-orange-100', title: 'Operación Especializada', description: 'Servicios específicos y especializados' },
    { bgClass: 'bg-gradient-to-br from-blue-50 to-blue-200', title: 'Proceso Operativo', description: 'Flujo principal de operaciones' },
    { bgClass: 'bg-gradient-to-br from-yellow-50 to-yellow-100', title: 'Control y Seguimiento', description: 'Monitoreo en tiempo real' },
    { bgClass: 'bg-gradient-to-br from-pink-50 to-pink-100', title: 'Gestión Financiera', description: 'Procesos de facturación y cobro' },
    { bgClass: 'bg-gradient-to-br from-red-50 to-red-100', title: 'Gestión de Riesgos', description: 'Manejo de excepciones y contingencias' },
    { bgClass: 'bg-gradient-to-br from-green-50 to-green-200', title: 'Soporte y Servicios', description: 'Servicios transversales de apoyo' }
  ];

  return (
    <div className="bg-gray-50 p-5 rounded-lg mt-8 border-2 border-gray-200">
      <h3 className="text-gray-700 mb-4 text-lg font-semibold">📋 Leyenda del Proceso</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <div className={`w-5 h-5 rounded ${item.bgClass} mr-3 border border-gray-300`}></div>
            <span className="text-sm">
              <strong>{item.title}:</strong> {item.description}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-white rounded-lg border">
        <h4 className="font-semibold text-gray-700 mb-2">Estado de Enlaces:</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-1 bg-green-500 mr-2 rounded"></div>
            <span>Verde: PDF y Figma disponibles</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-yellow-500 mr-2 rounded"></div>
            <span>Amarillo: Sin enlaces disponibles</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-orange-500 mr-2 rounded"></div>
            <span>Naranja: Enlace parcial disponible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
