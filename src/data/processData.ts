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
        pdfLink: 'https://drive.google.com/file/d/19iJTZI_c3j0huuWF0HU9VcQi_Ku_SBhi/view?usp=drive_link',
        //figmaLink: 'https://figma.com/vehiculos'
      },
      {
        id: 'asociados',
        name: 'CREACIÓN DE ASOCIADOS, CONDUCTORES Y POSEEDORES',
        pdfLink: 'https://drive.google.com/file/d/1hX9U6sYKmxVpDQp3bEE-LRsmIUM7TKif/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/Bdc4WIArk91v49BcDsoXyD/Creaci%C3%B3n-de-un-Asociado?node-id=0-1&p=f&t=kPpSD9PrVF0Q0OFb-0'
      },
      {
        id: 'activacion',
        name: 'ACTIVACIÓN DE VEHÍCULOS',
        pdfLink: 'https://drive.google.com/file/d/1UpJLJ0v8r79PbSivKvfHdqmR_dCTCRKw/view?usp=drive_link'
      },
      {
        id: 'seguridad-analisis',
        name: 'SEGURIDAD - ANÁLISIS',
        pdfLink: 'https://drive.google.com/file/d/1-hBSib88wMtuKKS4B8QLJko7WA9AJ3Kp/view?usp=drive_link'
        ///figmaLink: 'https://figma.com/seguridad'
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
    id: 'oper-config',
    title: 'CONFIGURACIÓN OPERATIVA',
    icon: '💰',
    bgClass: 'bg-gradient-to-br from-green-50 to-green-100',
    processes: [
      {
        id: 'fletes-tarifas',
        name: 'FLETES Y TARIFAS'
      },
      {
        id: 'costos-operacionales',
        name: 'GUÍA DE COSTOS OPERACIONALES'
      },
      {
        id: 'lineas-negocio',
        name: 'LÍNEAS DE NEGOCIO - RELACIÓN OP',
        pdfLink:'https://drive.google.com/file/d/1rqH5WwxX68xa3Ui1gx8A3RTqpI2kBSev/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/phaRlMnfCQfymxvGhNdzcp/L%C3%ADneas-de-Negocio-Humadea?node-id=0-1&p=f&t=4TTgukClu5oBjtHG-0'
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
        name: 'CREACIÓN OP REFRIGERADOS, MERCANCÍAS PELIGROSAS Y RO RO, EXTRADIMENSIONADA',
        pdfLink: 'https://drive.google.com/file/d/16A5rBzWamUa2fdy2OCt10u4EmPh7qANY/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/uLKom2kYlZ7X4duAeOUf6y/Creaci%C3%B3n-Orden-de-Producci%C3%B3n-HUMADEA?node-id=0-1&t=gpnhuL9ZwkxTa8EP-1'
      },
      {
        id: 'comercio-exterior',
        name: 'COMERCIO EXTERIOR',
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
        name: 'ENTURNAMIENTO',
        figmaLink: 'https://www.figma.com/board/dsVuiJid3C4MIuo0iCRq8F/Enturnamiento---HUMAEDA?node-id=7-2246&t=hhrXbVoLnWJacgRS-0'
      },
      {
        id: 'creacion-op',
        name: 'CREACIÓN DE OP',
        pdfLink: 'https://drive.google.com/file/d/1BeY7ScJyU1yigd6SIrdtKCVBCJyWsG7e/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/uLKom2kYlZ7X4duAeOUf6y/Creaci%C3%B3n-Orden-de-Producci%C3%B3n-HUMADEA?node-id=0-1&t=gpnhuL9ZwkxTa8EP-1'
      },
      {
        id: 'creacion-opr',
        name: 'CREACIÓN OP REFRIGERADOS, MERCANCIAS PELIGROSAS,  RORO, EXTRADIMENSIONADA',
        
      },
      {
        id: 'novedades-op',
        name: 'NOVEDADES OP',
        pdfLink: 'https://drive.google.com/file/d/1kpuejtZcxDPJdWS2G9MlAtp0F9Ki1Ckp/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/UAE9bV4404qRICSBipbLVy/Novedades-Orden-de-Producci%C3%B3n?t=jl9oTRqoBmGbjhyK-0'
      },
      {
        id: 'orden-carguee',
        name: 'ORDEN DE CARGUE',
        //pdfLink: 'https://drive.google.com/file/d/1kpuejtZcxDPJdWS2G9MlAtp0F9Ki1Ckp/view?usp=drive_link',
        //figmaLink: 'https://www.figma.com/board/UAE9bV4404qRICSBipbLVy/Novedades-Orden-de-Producci%C3%B3n?t=jl9oTRqoBmGbjhyK-0'
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
        name: 'SEGURIDAD - TRÁFICO',
        figmaLink: 'https://www.figma.com/board/ZStCeumbdvrJmf0SfstQ83/Seguridad-y-Trafico?node-id=0-1&t=ntrVYURgfKn1Xayl-0'
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
        name: 'CARTERA TRANSPORTADOR',
        pdfLink: 'https://drive.google.com/file/d/1q9tySNrgTLMiOB8CEvZX2G278IuWwbV5/view?usp=drive_link',
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
  bgClass: 'bg-gradient-to-br from-indigo-50 to-indigo-100 flex justify-center items-center min-h-screen',
  process: {
    id: 'diagrama-general',
    name: 'ARQUITECTURA GENERAL PROCESOS STONE',
    pdfLink: 'https://drive.google.com/file/d/1x3CADoSWyWQs4izS3czP4u6sg6FnLsH2/view?usp=drive_link',
    figmaLink: 'https://www.figma.com/board/OpUQDOUmTwd3jJdImHC1yJ/Arquitectura-TMS-HUMADEA?node-id=0-1&p=f&t=DQVjEOe3jKb1wdDs-0'
  }
};

export const coreBusinessDiagram = {
  id: 'core-business-diagram',
  title: 'ARQUITECTURA CORE DE NEGOCIOS HUMADEA',
  icon: '🏢',
  bgClass: 'bg-gradient-to-br from-indigo-50 to-indigo-100 flex justify-center items-center min-h-screen',
  process: {
    id: 'core-negocio',
    name: 'ARQUITECTURA CORE DE NEGOCIOS HUMADEA',
    pdfLink: 'https://drive.google.com/file/d/1q9Rpt7cDCkaX7Yq2HN0teUQid2-t2Eub/view?usp=drive_link',
    figmaLink: '' // Agregar enlace cuando esté disponible
  }
};
