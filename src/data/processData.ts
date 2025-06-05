
import { Phase } from '../types/process';

export const processData: Phase[] = [
  {
    id: 'config',
    title: 'CONFIGURACIÓN INICIAL',
    icon: '🔧',
    bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100',
    processes: [
      {
        id: 'vehiculos',
        name: 'CREACIÓN DE VEHÍCULOS',
        pdfLink: 'https://example.com/vehiculos.pdf',
        //figmaLink: 'https://figma.com/vehiculos'
      },
      {
        id: 'asociados',
        name: 'CREACIÓN DE ASOCIADOS, CONDUCTORES Y POSEEDORES',
        pdfLink: 'https://example.com/asociados.pdf'
      },
      {
        id: 'activacion',
        name: 'ACTIVACIÓN DE VEHÍCULOS'
      },
      {
        id: 'seguridad-analisis',
        name: 'SEGURIDAD - ANÁLISIS',
        figmaLink: 'https://figma.com/seguridad'
      }
    ]
  },
  {
    id: 'client',
    title: 'GESTIÓN DE CLIENTES',
    icon: '👥',
    bgClass: 'bg-gradient-to-br from-purple-50 to-purple-100',
    processes: [
      {
        id: 'creacion-cliente',
        name: 'CREACIÓN DE CLIENTE',
        pdfLink: 'https://example.com/cliente.pdf',
        figmaLink: 'https://figma.com/cliente'
      },
      {
        id: 'activacion-cliente',
        name: 'ACTIVACIÓN DE CLIENTES'
      },
      {
        id: 'cupo-cliente',
        name: 'ASIGNACIÓN DE CUPO CLIENTES',
        pdfLink: 'https://example.com/cupo.pdf'
      },
      {
        id: 'novedades-cupo',
        name: 'NOVEDADES CUPOS DE CLIENTES'
      }
    ]
  },
  {
    id: 'oper-config',
    title: 'CONFIGURACIÓN OPERATIVA',
    icon: '💰',
    bgClass: 'bg-gradient-to-br from-green-50 to-green-100',
    processes: [
      {
        id: 'fletes-tarifas',
        name: 'FLETES Y TARIFAS',
        pdfLink: 'https://example.com/fletes.pdf',
        figmaLink: 'https://figma.com/fletes'
      },
      {
        id: 'costos-operacionales',
        name: 'GUÍA DE COSTOS OPERACIONALES'
      },
      {
        id: 'lineas-negocio',
        name: 'LÍNEAS DE NEGOCIO - RELACIÓN OP'
      }
    ]
  },
  {
    id: 'specialized',
    title: 'OPERACIÓN ESPECIALIZADA',
    icon: '🚛',
    bgClass: 'bg-gradient-to-br from-orange-50 to-orange-100',
    processes: [
      {
        id: 'refrigerados',
        name: 'CREACIÓN OP REFRIGERADOS, MERCANCÍAS PELIGROSAS Y RO RO, EXTRADIMENSIONADA'
      },
      {
        id: 'comercio-exterior',
        name: 'COMERCIO EXTERIOR',
        figmaLink: 'https://figma.com/comercio'
      },
      {
        id: 'logistica-contenedores',
        name: 'LOGÍSTICA - CONTENEDORES'
      },
      {
        id: 'operacion-internacional',
        name: 'OPERACIÓN INTERNACIONAL'
      }
    ]
  },
  {
    id: 'main-oper',
    title: 'PROCESO OPERATIVO PRINCIPAL',
    icon: '📋',
    bgClass: 'bg-gradient-to-br from-blue-50 to-blue-200',
    processes: [
      {
        id: 'enturnamiento',
        name: 'ENTURNAMIENTO'
      },
      {
        id: 'creacion-op',
        name: 'CREACIÓN DE OP',
        pdfLink: 'https://example.com/creacion-op.pdf',
        figmaLink: 'https://figma.com/creacion-op'
      },
      {
        id: 'novedades-op',
        name: 'NOVEDADES OP'
      },
      {
        id: 'orden-cargue',
        name: 'ORDEN DE CARGUE'
      },
      {
        id: 'remesa',
        name: 'REMESA'
      },
      {
        id: 'manifiesto',
        name: 'MANIFIESTO'
      }
    ]
  },
  {
    id: 'tracking',
    title: 'CONTROL Y SEGUIMIENTO',
    icon: '📍',
    bgClass: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
    processes: [
      {
        id: 'control-precintos',
        name: 'CONTROL DE PRECINTOS'
      },
      {
        id: 'tracking-seguridad',
        name: 'TRACKING SEGURIDAD TRÁFICO'
      },
      {
        id: 'tracking-comercial',
        name: 'TRACKING COMERCIAL - OPERACIONES'
      },
      {
        id: 'seguridad-trafico',
        name: 'SEGURIDAD - TRÁFICO'
      }
    ]
  },
  {
    id: 'financial',
    title: 'GESTIÓN FINANCIERA',
    icon: '💵',
    bgClass: 'bg-gradient-to-br from-pink-50 to-pink-100',
    processes: [
      {
        id: 'anticipo',
        name: 'CREACIÓN DE ANTICIPO'
      },
      {
        id: 'cumplidos-liquidaciones',
        name: 'CUMPLIDOS Y LIQUIDACIONES'
      },
      {
        id: 'novedades-liquidacion',
        name: 'NOVEDADES DE LIQUIDACIÓN Y CUMPLIDOS'
      },
      {
        id: 'cartera-transportador',
        name: 'CARTERA TRANSPORTADOR'
      }
    ]
  },
  {
    id: 'risk',
    title: 'GESTIÓN DE RIESGOS Y EXCEPCIONES',
    icon: '⚠️',
    bgClass: 'bg-gradient-to-br from-red-50 to-red-100',
    processes: [
      {
        id: 'riesgos-seguros',
        name: 'RIESGOS Y SEGUROS'
      },
      {
        id: 'reexpediciones',
        name: 'REEXPEDICIONES'
      },
      {
        id: 'siniestros',
        name: 'SINIESTROS'
      },
      {
        id: 'liquidos',
        name: 'LÍQUIDOS'
      }
    ]
  },
  {
    id: 'support',
    title: 'SOPORTE Y SERVICIOS',
    icon: '🛠️',
    bgClass: 'bg-gradient-to-br from-green-50 to-green-200',
    processes: [
      {
        id: 'servicio-cliente',
        name: 'SERVICIO AL CLIENTE - PQRs'
      },
      {
        id: 'rodamientos',
        name: 'RODAMIENTOS'
      },
      {
        id: 'estructura-app',
        name: 'ESTRUCTURA APP TURNPIKE'
      }
    ]
  }
];
