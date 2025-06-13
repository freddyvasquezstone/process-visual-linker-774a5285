import { Phase } from '../types/process';

export const generalDiagram = {
  title: 'ARQUITECTURA GENERAL PROCESOS STONE',
  icon: '🏗️',
  bgClass: 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white',
  process: {
    id: 'arquitectura-general',
    name: 'ARQUITECTURA GENERAL PROCESOS STONE',
    pdfLink: 'https://example.com/arquitectura-general.pdf',
    figmaLink: 'https://example.com/arquitectura-general-figma'
  }
};

export const coreBusinessDiagram = {
  title: 'CORE BUSINESS',
  icon: '💼',
  bgClass: 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white',
  process: {
    id: 'core-business',
    name: 'CORE BUSINESS',
    pdfLink: 'https://example.com/core-business.pdf',
    figmaLink: 'https://example.com/core-business-figma'
  }
};

export const ventajasStone = {
  title: 'VENTAJAS STONE',
  icon: '⭐',
  bgClass: 'bg-gradient-to-br from-green-500 to-emerald-600 text-white',
  process: {
    id: 'ventajas-stone',
    name: 'VENTAJAS STONE',
    pdfLink: 'https://example.com/ventajas-stone.pdf',
    figmaLink: 'https://example.com/ventajas-stone-figma'
  }
};

export const processData: Phase[] = [
  {
    id: 'comercial',
    title: 'COMERCIAL',
    icon: '💼',
    bgClass: 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white',
    processes: [
      {
        id: 'cotizacion',
        name: 'COTIZACIÓN',
        pdfLink: 'https://example.com/cotizacion.pdf',
        figmaLink: 'https://example.com/cotizacion-figma'
      },
      {
        id: 'negociacion',
        name: 'NEGOCIACIÓN',
        pdfLink: 'https://example.com/negociacion.pdf'
      },
      {
        id: 'solicitud-servicio',
        name: 'SOLICITUD DE SERVICIO',
        figmaLink: 'https://example.com/solicitud-servicio-figma'
      },
      {
        id: 'conformacion-carta-porte',
        name: 'CONFORMACIÓN CARTA DE PORTE',
      },
      {
        id: 'solicitud-tracking',
        name: 'SOLICITUD TRACKING',
        pdfLink: 'https://example.com/solicitud-tracking.pdf',
        figmaLink: 'https://example.com/solicitud-tracking-figma'
      },
      {
        id: 'instrucciones-especiales',
        name: 'INSTRUCCIONES ESPECIALES',
      },
      {
        id: 'reserva-cita',
        name: 'RESERVA DE CITA',
        pdfLink: 'https://example.com/reserva-cita.pdf'
      },
      {
        id: 'agendamiento',
        name: 'AGENDAMIENTO',
        figmaLink: 'https://example.com/agendamiento-figma'
      },
      {
        id: 'consolidacion-cargue',
        name: 'CONSOLIDACIÓN DE CARGUE',
      },
      {
        id: 'orden-cargue',
        name: 'ORDEN DE CARGUE',
        pdfLink: 'https://example.com/orden-cargue.pdf',
        figmaLink: 'https://example.com/orden-cargue-figma'
      },
      {
        id: 'seguimiento-remesa',
        name: 'SEGUIMIENTO DE REMESA',
      },
      {
        id: 'acta-entrega',
        name: 'ACTA DE ENTREGA',
        pdfLink: 'https://example.com/acta-entrega.pdf'
      }
    ]
  },
  {
    id: 'operativa',
    title: 'OPERATIVA',
    icon: '⚙️',
    bgClass: 'bg-gradient-to-br from-orange-500 to-red-600 text-white',
    processes: [
      {
        id: 'recibo-mercancia',
        name: 'RECIBO DE MERCANCÍA',
        pdfLink: 'https://example.com/recibo-mercancia.pdf',
        figmaLink: 'https://example.com/recibo-mercancia-figma'
      },
      {
        id: 'almacenamiento',
        name: 'ALMACENAMIENTO',
        pdfLink: 'https://example.com/almacenamiento.pdf'
      },
      {
        id: 'picking',
        name: 'PICKING',
        figmaLink: 'https://example.com/picking-figma'
      },
      {
        id: 'consolidacion',
        name: 'CONSOLIDACIÓN',
      },
      {
        id: 'orden-cargue-op',
        name: 'ORDEN DE CARGUE',
        pdfLink: 'https://example.com/orden-cargue-op.pdf',
        figmaLink: 'https://example.com/orden-cargue-op-figma'
      },
      {
        id: 'orden-retiro',
        name: 'ORDEN DE RETIRO',
        pdfLink: 'https://example.com/orden-retiro.pdf',
        figmaLink: 'https://example.com/orden-retiro-figma'
      },
      {
        id: 'remesa',
        name: 'REMESA',
        pdfLink: 'https://example.com/remesa.pdf'
      },
      {
        id: 'transporte-interno',
        name: 'TRANSPORTE INTERNO',
        figmaLink: 'https://example.com/transporte-interno-figma'
      },
      {
        id: 'transporte-externo',
        name: 'TRANSPORTE EXTERNO',
      },
      {
        id: 'entrega-mercancia',
        name: 'ENTREGA DE MERCANCÍA',
        pdfLink: 'https://example.com/entrega-mercancia.pdf',
        figmaLink: 'https://example.com/entrega-mercancia-figma'
      },
      {
        id: 'devolucion',
        name: 'DEVOLUCIÓN',
        pdfLink: 'https://example.com/devolucion.pdf'
      },
      {
        id: 'gestion-novedad',
        name: 'GESTIÓN DE NOVEDAD',
        figmaLink: 'https://example.com/gestion-novedad-figma'
      },
      {
        id: 'liquidacion',
        name: 'LIQUIDACIÓN',
      },
      {
        id: 'facturacion',
        name: 'FACTURACIÓN',
        pdfLink: 'https://example.com/facturacion.pdf',
        figmaLink: 'https://example.com/facturacion-figma'
      },
      {
        id: 'recaudo',
        name: 'RECAUDO',
        pdfLink: 'https://example.com/recaudo.pdf'
      },
      {
        id: 'cierre-guia',
        name: 'CIERRE DE GUÍA',
        figmaLink: 'https://example.com/cierre-guia-figma'
      }
    ]
  },
  {
    id: 'trafico-seguridad',
    title: 'TRÁFICO Y SEGURIDAD',
    icon: '🚛',
    bgClass: 'bg-gradient-to-br from-purple-500 to-pink-600 text-white',
    processes: [
      {
        id: 'asignacion-vehiculo',
        name: 'ASIGNACIÓN DE VEHÍCULO',
        pdfLink: 'https://example.com/asignacion-vehiculo.pdf',
        figmaLink: 'https://example.com/asignacion-vehiculo-figma'
      },
      {
        id: 'gestion-conductor',
        name: 'GESTIÓN DEL CONDUCTOR',
        pdfLink: 'https://example.com/gestion-conductor.pdf'
      },
      {
        id: 'tracking-satelital',
        name: 'TRACKING SATELITAL',
        figmaLink: 'https://example.com/tracking-satelital-figma'
      }
    ]
  },
  {
    id: 'gestion-riesgo',
    title: 'GESTIÓN DE RIESGO',
    icon: '⚠️',
    bgClass: 'bg-gradient-to-br from-yellow-500 to-orange-600 text-white',
    processes: [
      {
        id: 'aseguramiento',
        name: 'ASEGURAMIENTO',
        pdfLink: 'https://example.com/aseguramiento.pdf',
        figmaLink: 'https://example.com/aseguramiento-figma'
      },
      {
        id: 'gestion-reclamos',
        name: 'GESTIÓN DE RECLAMOS',
        pdfLink: 'https://example.com/gestion-reclamos.pdf'
      }
    ]
  },
  {
    id: 'gestion-financiera',
    title: 'GESTIÓN FINANCIERA',
    icon: '💰',
    bgClass: 'bg-gradient-to-br from-green-500 to-emerald-600 text-white',
    processes: [
      {
        id: 'cartera',
        name: 'CARTERA',
        pdfLink: 'https://example.com/cartera.pdf',
        figmaLink: 'https://example.com/cartera-figma'
      },
      {
        id: 'tesoreria',
        name: 'TESORERÍA',
        pdfLink: 'https://example.com/tesoreria.pdf'
      },
      {
        id: 'contabilidad',
        name: 'CONTABILIDAD',
        figmaLink: 'https://example.com/contabilidad-figma'
      },
      {
        id: 'presupuesto',
        name: 'PRESUPUESTO',
      },
      {
        id: 'costos',
        name: 'COSTOS',
        pdfLink: 'https://example.com/costos.pdf',
        figmaLink: 'https://example.com/costos-figma'
      },
      {
        id: 'auditoria',
        name: 'AUDITORÍA',
        pdfLink: 'https://example.com/auditoria.pdf'
      },
      {
        id: 'tributaria',
        name: 'TRIBUTARIA',
        figmaLink: 'https://example.com/tributaria-figma'
      }
    ]
  },
  {
    id: 'procesos-adicionales',
    title: 'PROCESOS ADICIONALES',
    icon: '➕',
    bgClass: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white',
    processes: [
      {
        id: 'mejora-continua',
        name: 'MEJORA CONTINUA',
        pdfLink: 'https://example.com/mejora-continua.pdf',
        figmaLink: 'https://example.com/mejora-continua-figma'
      },
      {
        id: 'capacitacion',
        name: 'CAPACITACIÓN',
        pdfLink: 'https://example.com/capacitacion.pdf'
      },
      {
        id: 'servicio-cliente',
        name: 'SERVICIO AL CLIENTE',
        figmaLink: 'https://example.com/servicio-cliente-figma'
      }
    ]
  },
  {
    id: 'procesos-apoyo',
    title: 'PROCESOS DE APOYO',
    icon: '🤝',
    bgClass: 'bg-gradient-to-br from-gray-500 to-slate-600 text-white',
    processes: [
      {
        id: 'recursos-humanos',
        name: 'RECURSOS HUMANOS',
        pdfLink: 'https://example.com/recursos-humanos.pdf',
        figmaLink: 'https://example.com/recursos-humanos-figma'
      },
      {
        id: 'sistemas',
        name: 'SISTEMAS',
        pdfLink: 'https://example.com/sistemas.pdf'
      },
      {
        id: 'juridico',
        name: 'JURÍDICO',
        figmaLink: 'https://example.com/juridico-figma'
      },
      {
        id: 'compras',
        name: 'COMPRAS',
      },
      {
        id: 'mantenimiento',
        name: 'MANTENIMIENTO',
        pdfLink: 'https://example.com/mantenimiento.pdf',
        figmaLink: 'https://example.com/mantenimiento-figma'
      },
      {
        id: 'seguridad-industrial',
        name: 'SEGURIDAD INDUSTRIAL',
        pdfLink: 'https://example.com/seguridad-industrial.pdf'
      },
      {
        id: 'gestion-ambiental',
        name: 'GESTIÓN AMBIENTAL',
        figmaLink: 'https://example.com/gestion-ambiental-figma'
      },
      {
        id: 'direccion-general',
        name: 'DIRECCIÓN GENERAL',
      }
    ]
  }
];

export const excludedProcesses = [
  {
    id: 'proceso-excluido-1',
    name: 'PROCESO EXCLUIDO 1',
    reason: 'Razón de exclusión'
  },
  {
    id: 'proceso-excluido-2',
    name: 'PROCESO EXCLUIDO 2',
    reason: 'Razón de exclusión'
  }
];
