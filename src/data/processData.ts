
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
        name: 'CONTROL CUPO',
        pdfLink:'https://drive.google.com/file/d/1vAl_x_OcL72NYk8CHyidICMd7044ATET/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/74GfVbGmkYkrSZkvi1JrEe/Asignaci%C3%B3n-Cupo-Clientes?node-id=0-1&t=abKn3zFPwG7LXHxQ-1'
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
        id: 'creacion-op',
        name: 'CREACIÓN ORDEN PRODUCCIÓN',
        pdfLink: 'https://drive.google.com/file/d/1BeY7ScJyU1yigd6SIrdtKCVBCJyWsG7e/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/uLKom2kYlZ7X4duAeOUf6y/Creaci%C3%B3n-Orden-de-Producci%C3%B3n-HUMADEA?node-id=0-1&t=gpnhuL9ZwkxTa8EP-1'
      },
      {
        id: 'enturnamiento',
        name: 'ENTURNAMIENTO',
        figmaLink: 'https://www.figma.com/board/dsVuiJid3C4MIuo0iCRq8F/Enturnamiento---HUMAEDA?node-id=7-2246&t=hhrXbVoLnWJacgRS-0'
      },
      {
        id: 'consecucion-vehiculo',
        name: 'CONSECUCIÓN DE VEHÍCULO',
      },
      {
        id: 'creacion-do',
        name: 'CREACIÓN D.O',
      },
      {
        id: 'aprobacion-do',
        name: 'APROBACIÓN D.O',
      }
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
      },
      {
        id: 'activacion-vehiculo',
        name: 'ACTIVACIÓN VEHÍCULO',
        pdfLink: 'https://drive.google.com/file/d/1UpJLJ0v8r79PbSivKvfHdqmR_dCTCRKw/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/hQeE8dzKmGoItzKi2Vutaw/An%C3%A1lisis-y-Seguridad?node-id=0-1&p=f&t=Hpy9SuGFySKbMYxk-0'
      },
      {
        id: 'creacion-contenedor',
        name: 'CREACIÓN CONTENEDOR',
      },
      {
        id: 'precinto-controles',
        name: 'PRECINTO CONTROLES',
      }
    ]
  },
  {
    id: 'documents',
    title: 'DOCUMENTACIÓN Y MANIFIESTOS',
    icon: '📋',
    bgClass: 'bg-gradient-to-br from-orange-50 to-orange-100',
    processes: [
      {
        id: 'creacion-op-manifiesto',
        name: 'CREACIÓN OP. MANIFIESTO',
      },
      {
        id: 'remesa',
        name: 'REMESA',
      },
      {
        id: 'manifiesto',
        name: 'MANIFIESTO'
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
        id: 'trafico-en-ruta',
        name: 'TRÁFICO EN RUTA',
      },
      {
        id: 'tracking-seguridad',
        name: 'TRACKING SEGURIDAD TRÁFICO',
      },
      {
        id: 'tracking-comercial',
        name: 'TRACKING COMERCIAL - OPERACIONES',
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
    bgClass: 'bg-gradient-to-br from-yellow-50 to-yellow-200',
    processes: [
      {
        id: 'cumplidos',
        name: 'CUMPLIDOS',
      },
      {
        id: 'facturacion',
        name: 'FACTURACIÓN',
      },
      {
        id: 'liquidacion',
        name: 'LIQUIDACIÓN',
      },
      {
        id: 'cartera',
        name: 'CARTERA',
        pdfLink: 'https://drive.google.com/file/d/1PoOPoLzjUBTwCUFGvKqFuaik2jgf0iAk/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/Fqm6ln3bdm714Q3ZKAkrzE/Cartera-Transportador-Humadea?node-id=5004-261&t=PKNaIYy4jP2v3O9c-0'
      },
      {
        id: 'tesoreria',
        name: 'TESORERÍA',
      }
    ]
  },
  {
    id: 'specialized',
    title: 'OPERACIÓN ESPECIALIZADA',
    icon: '🌍',
    bgClass: 'bg-gradient-to-br from-red-50 to-red-100',
    processes: [
      {
        id: 'internacional',
        name: 'INTERNACIONAL',
      },
      {
        id: 'comercial-operaciones',
        name: 'COMERCIAL OPERACIONES',
      },
      {
        id: 'seguridad-trafico-esp',
        name: 'SEGURIDAD Y TRÁFICO',
      },
      {
        id: 'gestion-financiera',
        name: 'G. FINANCIERA',
      },
      {
        id: 'liberes-fronteras',
        name: 'LIBERES FRONTERAS TERRESTRES',
      },
      {
        id: 'rapido-humadea',
        name: 'RAPIDO HUMADEA',
      },
      {
        id: 'turnpike',
        name: 'TURNPIKE',
      }
    ]
  },
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
        id: 'comercio-exterior',
        name: 'COMERCIO EXTERIOR',
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
        id: 'rodamientos',
        name: 'RODAMIENTOS',
      },
      {
        id: 'lineas-negocio',
        name: 'LÍNEAS DE NEGOCIO',
        pdfLink:'https://drive.google.com/file/d/1rqH5WwxX68xa3Ui1gx8A3RTqpI2kBSev/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/phaRlMnfCQfymxvGhNdzcp/L%C3%ADneas-de-Negocio-Humadea?node-id=0-1&p=f&t=4TTgukClu5oBjtHG-0'
      },
      {
        id: 'servicio-cliente',
        name: 'SERVICIO CLIENTE',
      },
      {
        id: 'cartera-turnpike',
        name: 'CARTERA TURNPIKE',
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
    figmaLink: ''
  }
};
