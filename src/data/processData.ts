
import { Phase } from '../types/process';

export const processData: Phase[] = [
  {
    id: 'client',
    title: 'GESTIÓN DE CLIENTES',
    icon: '👥',
    bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100',
    processes: [
      {
        id: 'creacion-cliente',
        name: 'CREACIÓN DE CLIENTE',
        pdfLink: 'https://drive.google.com/file/d/17fhFOsycQ66PFRpenquByK2CfDsXHAIy/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/Yk7d3FBrjSF1FH5iU12L3j/Creaci%C3%B3n-de-un-Cliente-y-Activaci%C3%B3n?node-id=0-1&t=SkvrcmYqvhSetBIb-1'
      },
      {
        id: 'activacion-cliente',
        name: 'ACTIVACIÓN DE CLIENTES',
        pdfLink: 'https://drive.google.com/file/d/15tbYB_GmdzattnqrojWLZbB7QFO9XvIf/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/WkcZJsvTWhuAviNFOy9npL/Activaci%C3%B3n-Clientes-HUMADEA?node-id=0-1&t=DVlbYgYEO2IXOPgE-1'
      },
      {
        id: 'cupo-cliente',
        name: 'ASIGNACIÓN DE CUPO CLIENTES',
        pdfLink:'https://drive.google.com/file/d/1vAl_x_OcL72NYk8CHyidICMd7044ATET/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/74GfVbGmkYkrSZkvi1JrEe/Asignaci%C3%B3n-Cupo-Clientes?node-id=0-1&t=abKn3zFPwG7LXHxQ-1'
      },
      {
        id: 'novedades-cupo',
        name: 'NOVEDADES CUPOS DE CLIENTES',
        pdfLink:'https://drive.google.com/file/d/1N-d71Hu3z428oE1bLJimWiiIQmZUeOmh/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/O30JXnUaUExEHptYRfcqTY/Novedades-Cupo-de-Cliente?node-id=0-1&p=f&t=RiMP9W5iSAtrdE3b-0 '
      }
    ]
  },
  {
    id: 'main-oper',
    title: 'PROCESO OPERATIVO PRINCIPAL',
    icon: '📋',
    bgClass: 'bg-gradient-to-br from-green-50 to-green-100',
    processes: [
      {
        id: 'asociados',
        name: 'CREACIÓN DE ASOCIADOS, CONDUCTORES Y POSEEDORES',
        pdfLink: 'https://drive.google.com/file/d/1hX9U6sYKmxVpDQp3bEE-LRsmIUM7TKif/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/Bdc4WIArk91v49BcDsoXyD/Creaci%C3%B3n-de-un-Asociado?node-id=0-1&p=f&t=kPpSD9PrVF0Q0OFb-0'
      },
      
      {
        id: 'creacion-op',
        name: 'CREACIÓN ORDEN PRODUCCIÓN',
        pdfLink: 'https://drive.google.com/file/d/1BeY7ScJyU1yigd6SIrdtKCVBCJyWsG7e/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/uLKom2kYlZ7X4duAeOUf6y/Creaci%C3%B3n-Orden-de-Producci%C3%B3n-HUMADEA?node-id=0-1&t=gpnhuL9ZwkxTa8EP-1'
      },
      {
        id: 'novedades-op',
        name: 'NOVEDADES OP',
        pdfLink: 'https://drive.google.com/file/d/1kpuejtZcxDPJdWS2G9MlAtp0F9Ki1Ckp/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/UAE9bV4404qRICSBipbLVy/Novedades-Orden-de-Producci%C3%B3n?t=jl9oTRqoBmGbjhyK-0'
      },
      {
        id: 'lineas-negocio',
        name: 'LÍNEAS DE NEGOCIO',
        pdfLink:'https://drive.google.com/file/d/1rqH5WwxX68xa3Ui1gx8A3RTqpI2kBSev/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/phaRlMnfCQfymxvGhNdzcp/L%C3%ADneas-de-Negocio-Humadea?node-id=0-1&p=f&t=4TTgukClu5oBjtHG-0'
      },
      {
        id: 'refrigerados',
        name: 'CREACIÓN OP REFRIGERADOS, MERCANCÍAS PELIGROSAS Y RO RO, EXTRADIMENSIONADA',
        pdfLink: 'https://drive.google.com/file/d/16A5rBzWamUa2fdy2OCt10u4EmPh7qANY/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/uLKom2kYlZ7X4duAeOUf6y/Creaci%C3%B3n-Orden-de-Producci%C3%B3n-HUMADEA?node-id=0-1&t=gpnhuL9ZwkxTa8EP-1'
      },
      {
        id: 'fletes-tarifas',
        name: 'FLETES Y TARIFAS',
        pdfLink:'https://drive.google.com/file/d/1bMmLwkY-EN-YSeTsb29atWDab0QwgotY/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/jO92PF5KDyyW3I3l9rfrFm/Tarifas-y-Fletes-HUMADEA?node-id=0-1&p=f&t=a4hDS6VGRxNTQ2XE-0'
      },
      {
        id: 'liquidos',
        name: 'LÍQUIDOS',
        figmaLink: 'https://www.figma.com/board/cPli8EvLlViIEpm28jhcq1/L%C3%ADquidos-Humadea?node-id=603-139&t=ky1rpTdB8m7Bs6Zu-0'
      },
      {
        id: 'orden-cargue',
        name: 'ORDEN DE CARGUE',
        pdfLink: 'https://drive.google.com/file/d/1q9YJ3zoEAWuMhY6hcKZs574xY74hGLVs/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/LpryNSsTSvMSGNxHeSuNYD/Flow-chart--Community-?node-id=0-1&p=f&t=t92OpLAuDJYUje2S-0'
      },
      {
        id: 'guia-costos',
        name: 'GUIA DE COSTOS OPERACIONALES',
        pdfLink: 'https://drive.google.com/file/d/1wr4mELXV71xCOZN62dUrU8hYskdlAhw3/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/u5Lc4QMvrGl1c2KOopQ8oe/Gu%C3%ADa-de-Costos-Operacionales?node-id=0-1&p=f&t=DdjoSo1c5xYlQcUI-0'
      },
      {
        id: 'enturnamiento',
        name: 'ENTURNAMIENTO',
        pdfLink: 'https://drive.google.com/file/d/12rUQY-YVWv1-KUxWWgpgowYqA10RBD9v/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/dsVuiJid3C4MIuo0iCRq8F/Enturnamiento---HUMAEDA?node-id=7-2246&t=hhrXbVoLnWJacgRS-0'
      },
      {
        id: 'comercio-exterior',
        name: 'COMERCIO EXTERIOR',
        ///pdfLink: 'https://drive.google.com/file/d/12rUQY-YVWv1-KUxWWgpgowYqA10RBD9v/view?usp=drive_link',
        figmaLink: 'https://docs.google.com/document/d/1ZV-qQllj6y0gSzdqqU-XLZD78l6rmTSy/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true'
      },

      {
        id: 'creacion-do',
        name: 'CREACIÓN D.O',
      },
      {
        id: 'aprobacion-do',
        name: 'APROBACIÓN D.O',
      },
      {
        id: 'servicio-cliente',
        name: 'SERVICIO CLIENTE',
      },
    ]
  },
  {
    id: 'config',
    title: 'CONFIGURACIÓN DE VEHÍCULOS',
    icon: '🚛',
    bgClass: 'bg-gradient-to-br from-green-50 to-green-200',
    processes: [
      {
        id: 'creacion-vehiculo',
        name: 'CREACIÓN VEHÍCULO',
        pdfLink: 'https://drive.google.com/file/d/19iJTZI_c3j0huuWF0HU9VcQi_Ku_SBhi/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/FexMN0ZtIh1Cp4CbV5jIOW/Creacion-de-Vehiculo?node-id=0-1&p=f&t=33efp8dlAvYMyk0w-0'
      },

      {
        id: 'activacion-vehiculo',
        name: 'ACTIVACIÓN VEHÍCULO',
        pdfLink: 'https://drive.google.com/file/d/1UpJLJ0v8r79PbSivKvfHdqmR_dCTCRKw/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/hQeE8dzKmGoItzKi2Vutaw/An%C3%A1lisis-y-Seguridad?node-id=0-1&p=f&t=Hpy9SuGFySKbMYxk-0'
      },
      {
        id: 'rodamientos',
        name: 'RODAMIENTOS'
      },
      {
        id: 'logistica-contenedores',
        name: 'LOGÍSTICA - CONTENEDORES'
      },
      {
        id: 'control-precintos',
        name: 'CONTROL DE PRECINTOS'
      },
    ]
  },
  {
    id: 'documents',
    title: 'DOCUMENTACIÓN Y MANIFIESTOS',
    icon: '📋',
    bgClass: 'bg-gradient-to-br from-orange-50 to-orange-100',
    processes: [
      
      {
        id: 'remesa',
        name: 'REMESA',
      },
      {
        id: 'manifiesto',
        name: 'MANIFIESTO'
      },
      {
        id: 'reexpediciones',
        name: 'REEXPEDICIONES'
      },
      {
        id: 'operacion-internacional',
        name: 'OPERACIÓN INTERNACIONAL'
      },
      {
        id: 'cartera-transportador',
        name: 'CARTERA TRANSPORTADOR',
        pdfLink: 'https://drive.google.com/file/d/1PoOPoLzjUBTwCUFGvKqFuaik2jgf0iAk/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/Fqm6ln3bdm714Q3ZKAkrzE/Cartera-Transportador-Humadea?node-id=5004-261&t=PKNaIYy4jP2v3O9c-0'
      }
    ]
  },
  {
    id: 'tracking',
    title: 'TRÁFICO Y SEGUIMIENTO',
    icon: '📍',
    bgClass: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
    processes: [
      {
        id: 'seguridad-analisis',
        name: 'SEGURIDAD - ANÁLISIS VEHÍCULOS, POSEEDORES',
        pdfLink: 'https://drive.google.com/file/d/1IfYS0ZyDnsLs4k1lfjU1b4KnHVVjivpx/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/hQeE8dzKmGoItzKi2Vutaw/An%C3%A1lisis-y-Seguridad?node-id=0-1&p=f&t=Hpy9SuGFySKbMYxk-0'
      },
      {
        id: 'tracking-seguridad',
        name: 'TRACKING SEGURIDAD TRÁFICO',
      },
      {
        id: 'tracking-comercial',
        name: 'TRACKING COMERCIAL',
      },
      {
        id: 'tracking-comercial',
        name: 'TRACKING OPERATIVO',
      },
      {
        id: 'seguridad-trafico',
        name: 'SEGURIDAD - TRÁFICO',
        figmaLink: 'https://www.figma.com/board/ZStCeumbdvrJmf0SfstQ83/Seguridad-y-Trafico?node-id=0-1&t=ntrVYURgfKn1Xayl-0'
      }
    ]
  },
  {
    id: 'risk',
    title: 'GESTIÓN DE RIESGOS',
    icon: '⚠️',
    bgClass: 'bg-gradient-to-br from-red-50 to-red-100',
    processes: [
      {
        id: 'riesgos-seguros',
        name: 'RIESGOS Y SEGUROS',
        //pdfLink: 'https://drive.google.com/file/d/1IfYS0ZyDnsLs4k1lfjU1b4KnHVVjivpx/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/yeUQMGsMYRK4HzkaYusITP/Seguros-Humadea?node-id=0-1&p=f&t=Fx8vFMfx4ySmmSKN-0'
      },
      
      {
        id: 'siniestros',
        name: 'SINIESTROS'
      },
      
    ]
  },
  {
    id: 'financial',
    title: 'GESTIÓN FINANCIERA',
    icon: '💵',
    bgClass: 'bg-gradient-to-br from-yellow-50 to-yellow-200',
    processes: [
      {
        id: 'anticipo',
        name: 'CREACIÓN DE ANTICIPO'
      },
      {
        id: 'cumplidos',
        name: 'CUMPLIDOS Y LIQUIDACIONES',
      },
      {
        id: 'novedades-liquidacion',
        name: 'NOVEDADES DE LIQUIDACIÓN Y CUMPLIDOS'
      },
      {
        id: 'facturacion',
        name: 'FACTURACIÓN',
      },
      {
        id: 'tesoreria',
        name: 'TESORERÍA',
      }
    ]
  },
  //{
  //  id: 'specialized',
  // title: 'OPERACIÓN ESPECIALIZADA',
  //  icon: '🌍',
  //  bgClass: 'bg-gradient-to-br from-red-50 to-red-100',
  //  processes: [
  //    
  //    {
  //      id: 'logistica-contenedores',
  //      name: 'LOGÍSTICA - CONTENEDORES'
  //    },
  //    {
  //      id: 'operacion-internacional',
  //      name: 'OPERACIÓN INTERNACIONAL'
  //    }
  //    
  //  ]
  //},
  {
    id: 'support-areas',
    title: 'ÁREAS DE APOYO',
    icon: '🛠️',
    bgClass: 'bg-gradient-to-br from-green-50 to-green-200',
    processes: [
      {
        id: 'auditoria',
        name: 'AUDITORÍA',
      },
      {
        id: 'juridico',
        name: 'JURÍDICO',
      },
      {
        id: 'contabilidad',
        name: 'CONTABILIDAD',
      },
      {
        id: 'compras',
        name: 'COMPRAS',
      },
      
      {
        id: 'gestion-humana',
        name: 'GESTIÓN HUMANA',
      },
      {
        id: 'gestion-calidad',
        name: 'GESTIÓN CALIDAD HSQE',
      },
      {
        id: 'sistema',
        name: 'SISTEMA',
      }
    ]
  },
  {
    id: 'additional-services',
    title: 'SERVICIOS ADICIONALES',
    icon: '⚙️',
    bgClass: 'bg-gradient-to-br from-purple-50 to-purple-100',
    processes: [
      
      {
        id: 'estructura-app',
        name: 'ESTRUCTURA APP'
      },
      {
        id: 'turnpike',
        name: 'TURNPIKE'
      }
    ]
  }
];

export const generalDiagram = {
  id: 'general-diagram',
  title: 'ARQUITECTURA GENERAL PROCESOS',
  icon: '📊',
  bgClass: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
  process: {
    id: 'diagrama-general',
    name: 'ARQUITECTURA GENERAL PROCESOS',
    pdfLink: 'https://drive.google.com/file/d/1x3CADoSWyWQs4izS3czP4u6sg6FnLsH2/view?usp=drive_link',
    figmaLink: 'https://www.figma.com/board/OpUQDOUmTwd3jJdImHC1yJ/Arquitectura-TMS-HUMADEA?node-id=0-1&p=f&t=DQVjEOe3jKb1wdDs-0'
  }
};

export const coreBusinessDiagram = {
  id: 'core-business-diagram',
  title: 'ARQUITECTURA CORE DE NEGOCIOS HUMADEA',
  icon: '🏢',
  bgClass: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
  process: {
    id: 'core-negocio',
    name: 'ARQUITECTURA CORE DE NEGOCIOS HUMADEA',
    pdfLink: 'https://drive.google.com/file/d/1q9Rpt7cDCkaX7Yq2HN0teUQid2-t2Eub/view?usp=drive_link',
    figmaLink: 'https://drive.google.com/file/d/1q9Rpt7cDCkaX7Yq2HN0teUQid2-t2Eub/view?usp=drive_link'
  }
};
