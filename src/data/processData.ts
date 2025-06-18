import { Phase } from '../types/process';

export const processData: Phase[] = [
  {
    id: 'comercial',
    title: 'COMERCIAL',
    icon: '👥',
    bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100',
    processes: [
      // Primera fila - 4 elementos
      {
        id: 'creacion-cliente',
        name: 'CREACIÓN DE CLIENTES',
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
        id: 'asignacion-cupo',
        name: 'ASIGNACIÓN CUPO CLIENTES',
        pdfLink:'https://drive.google.com/file/d/1vAl_x_OcL72NYk8CHyidICMd7044ATET/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/74GfVbGmkYkrSZkvi1JrEe/Asignaci%C3%B3n-Cupo-Clientes?node-id=0-1&t=abKn3zFPwG7LXHxQ-1'
      },
      {
        id: 'novedades-cupo',
        name: 'NOVEDADES CUPO DE CLIENTES',
        pdfLink:'https://drive.google.com/file/d/1N-d71Hu3z428oE1bLJimWiiIQmZUeOmh/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/O30JXnUaUExEHptYRfcqTY/Novedades-Cupo-de-Cliente?node-id=0-1&p=f&t=RiMP9W5iSAtrdE3b-0'
      },
      // Segunda fila - 1 elemento
      {
        id: 'fletes-tarifas',
        name: 'TARIFAS Y FLETES',
        pdfLink:'https://drive.google.com/file/d/1bMmLwkY-EN-YSeTsb29atWDab0QwgotY/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/jO92PF5KDyyW3I3l9rfrFm/Tarifas-y-Fletes-HUMADEA?node-id=0-1&p=f&t=a4hDS6VGRxNTQ2XE-0'
      },
      // Tercera fila - 3 elementos
      {
        id: 'creacion-op',
        name: 'CREACIÓN ORDEN DE PRODUCCIÓN CARGA GENERAL',
        pdfLink: 'https://drive.google.com/file/d/1BeY7ScJyU1yigd6SIrdtKCVBCJyWsG7e/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/uLKom2kYlZ7X4duAeOUf6y/Creaci%C3%B3n-Orden-de-Producci%C3%B3n-HUMADEA?node-id=0-1&t=gpnhuL9ZwkxTa8EP-1'
      },
      {
        id: 'lineas-negocio',
        name: 'LÍNEAS DE NEGOCIO',
        pdfLink:'https://drive.google.com/file/d/1rqH5WwxX68xa3Ui1gx8A3RTqpI2kBSev/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/phaRlMnfCQfymxvGhNdzcp/L%C3%ADneas-de-Negocio-Humadea?node-id=0-1&p=f&t=4TTgukClu5oBjtHG-0'
      },
      {
        id: 'liquidos',
        name: 'LÍQUIDOS',
        pdfLink: 'https://drive.google.com/file/d/17P_ELAB0Q2xBlk7xv4TolH98z914aiT-/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/cPli8EvLlViIEpm28jhcq1/L%C3%ADquidos-Humadea?node-id=603-139&t=ky1rpTdB8m7Bs6Zu-0'
      },
      // Cuarta fila - 2 elementos (uno grande y uno amarillo para novedades)
      {
        id: 'refrigerados',
        name: 'CREACIÓN OP REFRIGERADOS, MERCANCÍAS PELIGROSAS, RORO, EXTRADIMENSIONADA',
        pdfLink: 'https://drive.google.com/file/d/16A5rBzWamUa2fdy2OCt10u4EmPh7qANY/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/uLKom2kYlZ7X4duAeOUf6y/Creaci%C3%B3n-Orden-de-Producci%C3%B3n-HUMADEA?node-id=0-1&t=gpnhuL9ZwkxTa8EP-1'
      },
      {
        id: 'novedades-op',
        name: 'NOVEDADES ORDEN DE PRODUCCIÓN',
        pdfLink: 'https://drive.google.com/file/d/1kpuejtZcxDPJdWS2G9MlAtp0F9Ki1Ckp/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/UAE9bV4404qRICSBipbLVy/Novedades-Orden-de-Producci%C3%B3n?t=jl9oTRqoBmGbjhyK-0'
      },
      // Quinta fila - 2 elementos
      {
        id: 'servicio-cliente',
        name: 'SERVICIO AL CLIENTE',
        pdfLink: 'https://drive.google.com/file/d/1sVKOouS3HANO4UgUE20LmdtoFMIKjDtt/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/GtrZkRloRE7zcqm1jPN2mY/Servicio-Al-cliente-HUMADEA?node-id=0-1&p=f&t=HEICLz4ekWxwa70E-0'
      },
      
      {
        id: 'tracking-comercial',
        name: 'TRAKING COMERCIAL',
        pdfLink: 'https://drive.google.com/file/d/1jNQxJ0exP-scMXSpIbjsPwF3UDPSPWoZ/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/TGOina1BTCGigymBxoV0I6/Tracking-Comercial-HUMADEA?node-id=0-1&p=f&t=ZC1Ha9JmjqZ695ay-0'
      }
    ]
  },
  {
    id: 'operativa',
    title: 'OPERATIVA',
    icon: '🚛',
    bgClass: 'bg-gradient-to-br from-green-50 to-green-100',
    processes: [
      // Primera fila - 4 elementos
      {
        id: 'asociados',
        name: 'CREACIÓN DE ASOCIADOS, CONDUCTORES Y POSEEDORES',
        pdfLink: 'https://drive.google.com/file/d/1hX9U6sYKmxVpDQp3bEE-LRsmIUM7TKif/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/Bdc4WIArk91v49BcDsoXyD/Creaci%C3%B3n-de-un-Asociado?node-id=0-1&p=f&t=kPpSD9PrVF0Q0OFb-0'
      },
      {
        id: 'enturnamiento',
        name: 'ENTURNAMIENTO',
        pdfLink: 'https://drive.google.com/file/d/12rUQY-YVWv1-KUxWWgpgowYqA10RBD9v/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/dsVuiJid3C4MIuo0iCRq8F/Enturnamiento---HUMAEDA?node-id=7-2246&t=hhrXbVoLnWJacgRS-0'
      },
      {
        id: 'creacion-vehiculo',
        name: 'CREACIÓN DE VEHÍCULO',
        pdfLink: 'https://drive.google.com/file/d/19iJTZI_c3j0huuWF0HU9VcQi_Ku_SBhi/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/FexMN0ZtIh1Cp4CbV5jIOW/Creacion-de-Vehiculo?node-id=0-1&p=f&t=33efp8dlAvYMyk0w-0'
      },
      {
        id: 'activacion-vehiculo',
        name: 'ACTIVACIÓN DE VEHÍCULO',
        pdfLink: 'https://drive.google.com/file/d/1UpJLJ0v8r79PbSivKvfHdqmR_dCTCRKw/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/hQeE8dzKmGoItzKi2Vutaw/An%C3%A1lisis-y-Seguridad?node-id=0-1&p=f&t=Hpy9SuGFySKbMYxk-0'
      },
      // Segunda fila - 4 elementos
      {
        id: 'logistica-contenedores',
        name: 'LOGÍSTICA CONTENEDORES',
        pdfLink: 'https://drive.google.com/file/d/18TMuHXG1lvkkrHYoyyuUvudWl2Ro3Wwj/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/UOqIwXpPPyB2rvRtwoEnMF/Log%C3%ADstica-Contenedores-HUMADEA?node-id=0-1&p=f&t=o7tYoLnXAhK6FCkH-0'

      },
      {
        id: 'control-precintos',
        name: 'CONTROL DE PRECINTOS',
        pdfLink: 'https://drive.google.com/file/d/1joBTgY3N-8lT9-m3xzlXatHGnhZK_gmq/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/9w4zsTYXko8nUofbfzy69Q/Control-de-Precintos-Humadea?node-id=0-1&p=f&t=OGb8gi55LNGlanx9-0'
      },
      {
        id: 'orden-cargue',
        name: 'ORDEN DE CARGUE',
        pdfLink: 'https://drive.google.com/file/d/1q9YJ3zoEAWuMhY6hcKZs574xY74hGLVs/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/LpryNSsTSvMSGNxHeSuNYD/Flow-chart--Community-?node-id=0-1&p=f&t=t92OpLAuDJYUje2S-0'
      },
      {
        id: 'orden-retiro',
        name: 'ORDEN DE RETIRO',
        pdfLink: 'https://drive.google.com/file/d/1VFuSfgfb-t8m7P_0RGsC172ns1i_acNg/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/DN8xLmqoSZUlw6fujz0zFy/Orden-de-Retiro-Humadea?node-id=0-1&p=f&t=5ntyJd0EFwPV6ZFi-0'
      },
      {
        id: 'remesa',
        name: 'REMESA',
        pdfLink: 'https://drive.google.com/file/d/1lUDhDf9SE1lZGAB-bMUUNkzoD5q2siv-/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/NhIRrig9LAoDR8YiFT1hCu/Remesas-Humadea?node-id=0-1&p=f&t=SLMcPANSWgZCwGBh-0'
      },
      {
        id: 'manifiesto',
        name: 'MANIFIESTO',
        pdfLink: 'https://drive.google.com/file/d/1gqTyuZkG3i4WrPrBfmQHmQ6whOo4LATe/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/IoYDWKlOs9CtCDAovyhyez/Manifiestos-Humadea?node-id=0-1&p=f&t=aeFhI4k2ZgsGIcNi-0'
      },
     
      // Tercera fila - 4 elementos
      {
        id: 'reexpediciones',
        name: 'REEXPEDICIONES',
        pdfLink: 'https://drive.google.com/file/d/1RuSUDwQO9_AFC9c0Bjx_ceL4ZHUxRPLp/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/2PvvDR3GIsmpDbqJ8LnkeQ/Reexpedici%C3%B3n-de-Manifiestos?node-id=0-1&p=f&t=sbPa2ET0OpTbNfIr-0'
      },
      {
        id: 'operacion-internacional',
        name: 'OPERACIÓN INTERNACIONAL',
        pdfLink: 'https://drive.google.com/file/d/1vealvWO9SOOIHCdt9qJWyYAHieYuo6dc/view?usp=drive_link', 
        figmaLink: 'https://www.figma.com/board/qiGlYwHKuJPRhhZXTfdaNE/Operacion-Internacional-HUMADEA?node-id=0-1&p=f&t=fkwyPiIgBjRNmFbA-0'
      },

      {
        id: 'comercio-exterior',
        name: 'COMERCIO EXTERIOR',
        pdfLink: 'https://drive.google.com/file/d/1zPW9FPJec5IxU67lNBTNGcNtbNDiQUtX/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/4ie7Dx9TwzV07Bsf3cJmSP/Comercio-Exterior-HUMADEA?t=vxOhhHpCZp1JY7om-0'
      },
      {
        id: 'creacion-do',
        name: 'CREACIÓN D.O',
        pdfLink: 'https://drive.google.com/file/d/1GdBQluqDkYN3a9Y3ONECmmbf8WeFjnUI/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/uMmXFv6auprW0ibxTt6VVD/Documento-DO-HUMADEA?t=po9j0GyVhKEBibHT-0'
      },
      // Cuarta fila - 2 elementos
      {
        id: 'aprobacion-do',
        name: 'APROBACIÓN D.O',
        pdfLink: 'https://drive.google.com/file/d/1oV3akVytaF98_Sq3hgq3hhXOU6niWsEq/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/6nZdF1pHRd7J5hHMm8CUTb/Aprobaci%C3%B3n-Documento-DO?node-id=0-1&p=f&t=bA1JHKJ0BxLeKRIF-0'
      },
      {
        id: 'tracking-operativo',
        name: 'TRAKING OPERATIVO',
        pdfLink: 'https://drive.google.com/file/d/19yP_G5wfFqOul4W0r7sKWpXvwqKB7_36/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/tOFkC2Jr5u1fPkzm0PgqI3/Traking-Operativo?node-id=0-1&p=f&t=oPSW6CNuEsvoj1RL-0'
      },
      
      
    ]
  },
  {
    id: 'trafico-seguridad',
    title: 'TRÁFICO Y SEGURIDAD',
    icon: '🛡️',
    bgClass: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
    processes: [
      // Una sola fila - 3 elementos
      {
        id: 'seguridad-analisis',
        name: 'SEGURIDAD - ANÁLISIS DE VEHÍCULOS, CONDUCTORES, PROPIETARIOS Y POSEEDORES',
        pdfLink: 'https://drive.google.com/file/d/1IfYS0ZyDnsLs4k1lfjU1b4KnHVVjivpx/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/hQeE8dzKmGoItzKi2Vutaw/An%C3%A1lisis-y-Seguridad?node-id=0-1&p=f&t=Hpy9SuGFySKbMYxk-0'
      },
      {
        id: 'seguridad-trafico',
        name: 'SEGURIDAD - TRÁFICO',
        pdfLink: 'https://drive.google.com/file/d/1owCaQnpG2DEkWtwbzaaNCLfhXGrIJJxQ/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/ZStCeumbdvrJmf0SfstQ83/Seguridad-y-Trafico?node-id=0-1&t=ntrVYURgfKn1Xayl-0'
      },
      {
        id: 'tracking-seguridad',
        name: 'TRAKING SEGURIDAD Y TRÁFICO',
        pdfLink: 'https://drive.google.com/file/d/1_zqS7-hHL_Cd_DjDXbjEszHGp_BCmBeQ/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/wlQ0QLIByXhLmYmhjOyzIw/Tracking-Seguridad---Trafico?node-id=0-1&p=f&t=jiaXEAdMx1Px0mzy-0'
      }
    ]
  },
  {
    id: 'gestion-riesgo',
    title: 'GESTIÓN DEL RIESGO',
    icon: '⚠️',
    bgClass: 'bg-gradient-to-br from-red-50 to-red-100',
    processes: [
      // Una sola fila - 2 elementos
      {
        id: 'riesgos-seguros',
        name: 'RIESGOS Y SEGUROS',
        pdfLink: 'https://drive.google.com/file/d/1Lyd5bVxzz6HqbcPaV7gdSHL5PMO07h7C/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/yeUQMGsMYRK4HzkaYusITP/Seguros-Humadea?node-id=0-1&p=f&t=Fx8vFMfx4ySmmSKN-0'
      },
      {
        id: 'siniestros',
        name: 'SINIESTROS',
        pdfLink: 'https://drive.google.com/file/d/1BveLteIHxoJhiUNVp8gK847yJkQFPcB_/view?usp=drive_link',
        figmaLink:'https://www.figma.com/board/7fYrPn1eY54FZdUISWH8oA/Siniestros-HUMADEA?t=AUH7kEKBSItw6lRB-0'
      }
    ]
  },
  {
    id: 'gestion-financiera',
    title: 'GESTIÓN FINANCIERA',
    icon: '💵',
    bgClass: 'bg-gradient-to-br from-green-50 to-green-200',
    processes: [
      {
        id: 'anticipo',
        name: 'CREACIÓN DE ANTICIPO',
        pdfLink: 'https://drive.google.com/file/d/14uaO8hwq-G2zL9CDwpTbBeHe80i8LgmH/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/G83RG6vhEzqrufPLrs4Mz4/Creacion-de-Anticipos-Humadea?t=vxOhhHpCZp1JY7om-0'
      },
      {
        id: 'giros-anticipos',
        name: 'GIROS ANTICIPOS',
        pdfLink: 'https://drive.google.com/file/d/14uaO8hwq-G2zL9CDwpTbBeHe80i8LgmH/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/G83RG6vhEzqrufPLrs4Mz4/Creacion-de-Anticipos-Humadea?t=vxOhhHpCZp1JY7om-0'
      },
      {
        id: 'cumplidos',
        name: 'CUMPLIDOS Y LIQUIDACIONES',
        pdfLink: 'https://drive.google.com/file/d/1A8DWOEvn2clC9HyqnIcwvn73xHmA5lzE/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/SnEm5r2rhkbvaAEViTOvWY/Cumplidos-Liquidaciones-Humadea?node-id=0-1&p=f&t=bHJughIyLoAkZC3Y-0'
      },
      {
        id: 'novedades-liquidacion',
        name: 'NOVEDADES DE CUMPLIDOS Y LIQUIDACIONES',
        pdfLink: 'https://drive.google.com/file/d/1dpQE5zrsin8ahjzEFDJQoLT7Gd1n9Ee8/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/SY4Nm8QW4zSpVIC8CaSj1p/Novedades-de-Liquidaci%C3%B3n-y-Cumplidos-HUMADEA?node-id=0-1&p=f&t=RvjDniWYrWYMl10e-0'
      },
      //{
      //  id: 'facturacion',
      //  name: 'FACTURACIÓN',
      //},
      {
        id: 'cartera-transportador',
        name: 'CARTERA TRANSPORTADOR',
        pdfLink: 'https://drive.google.com/file/d/1PoOPoLzjUBTwCUFGvKqFuaik2jgf0iAk/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/Fqm6ln3bdm714Q3ZKAkrzE/Cartera-Transportador-Humadea?node-id=5004-261&t=PKNaIYy4jP2v3O9c-0'
      },
      {
        id: 'guia-costos',
        name: 'GUÍA DE COSTOS OPERACIONALES',
        pdfLink: 'https://drive.google.com/file/d/1wr4mELXV71xCOZN62dUrU8hYskdlAhw3/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/u5Lc4QMvrGl1c2KOopQ8oe/Gu%C3%ADa-de-Costos-Operacionales?node-id=0-1&p=f&t=DdjoSo1c5xYlQcUI-0'
      }
    ]
  },
  {
    id: 'procesos-adicionales',
    title: 'GESTIÓN PROCESOS ADICIONALES',
    icon: '⚙️',
    bgClass: 'bg-gradient-to-br from-purple-50 to-purple-100',
    processes: [
      {
        id: 'rodamientos',
        name: 'RODAMIENTOS',
        pdfLink:'https://drive.google.com/file/d/1fA_wSubTNdfP1xX1YMNLTr4myby8CDqs/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/1shxbvHjbE9QhynH0w0Fu7/Rodamientos-Humadea?node-id=0-1&p=f&t=f6I3tXXOgSMOx3eK-0'
      },
      {
        id: 'turnpike',
        name: 'TURNPIKE',
        pdfLink: 'https://drive.google.com/file/d/1pnVHdvK5NBPFY7y8E8UWWYltaYy2lNrb/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/tpVNyPGWDvJ6icqbv1PvF4/Turnpike-Humadea?node-id=0-1&p=f&t=nYhiyMbmxGPM32yA-0'
      },
      {
        id: 'estructura-app',
        name: 'ESTRUCTURA APP',
        pdfLink: 'https://drive.google.com/file/d/1mPe5amfvhF1OOo9Z0qR4DHaRb8QD03_f/view?usp=drive_link',
        figmaLink: 'https://www.figma.com/board/qLHim6TIvac6glqikYUWkC/Estructuraci%C3%B3n-APP-HUMADEA?node-id=0-1&p=f&t=RGTmKkea9OOvD07X-0'
      }
    ]
  },
  {
    id: 'procesos-apoyo',
    title: 'PROCESOS DE APOYO',
    icon: '🛠️',
    bgClass: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
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
        name: 'NÓMINA',
      },
      {
        id: 'gestion-calidad',
        name: 'GESTIÓN CALIDAD Y HSQE',
      },
      {
        id: 'sistema',
        name: 'SISTEMAS',
      },
      {
        id: 'tesoreria',
        name: 'TESORERÍA',
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

export const ventajasStone = {
  id: 'ventajas-stone-diagram',
  title: 'VENTAJAS STONE',
  icon: '⭐',
  bgClass: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
  process: {
    id: 'ventajas-stone',
    name: 'VENTAJAS STONE',
    pdfLink: 'https://stone-system-insights.lovable.app/',
    figmaLink: 'https://stone-system-insights.lovable.app/'
  }
};
