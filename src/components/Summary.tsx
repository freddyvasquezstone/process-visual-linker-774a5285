
import React from 'react';
import { processData } from '../data/processData';
import { Process } from '../types/process';

const Summary = () => {
  const calculateSummary = () => {
    let completos = 0;
    let parciales = 0;
    let pendientes = 0;

    // IDs de los procesos que deben excluirse del conteo principal
    const excludedProcessIds = [
      'enturnamiento',
      'seguridad-trafico',
      'tracking-seguridad',
      'novedades-cupo',
      'novedades-op',
      'novedades-liquidacion',
      'riesgos-seguros',
      'siniestros'
    ];

    processData.forEach(phase => {
      // Excluir las áreas de apoyo del cálculo del resumen
      if (phase.id === 'procesos-apoyo') {
        return;
      }
      
      phase.processes.forEach((process: Process) => {
        // Excluir los procesos específicos que van en la pestaña adicional
        if (excludedProcessIds.includes(process.id)) {
          return;
        }

        const hasAllLinks = process.pdfLink && process.figmaLink;
        const hasNoLinks = !process.pdfLink && !process.figmaLink;
        
        if (hasAllLinks) {
          completos++;
        } else if (hasNoLinks) {
          pendientes++;
        } else {
          parciales++;
        }
      });
    });

    return {
      completos,
      parciales,
      pendientes,
      total: completos + parciales + pendientes
    };
  };

  const calculateExcludedSummary = () => {
    let completosExcluidos = 0;
    let parcialesExcluidos = 0;
    let pendientesExcluidos = 0;

    // IDs de los procesos que están en la pestaña adicional
    const excludedProcessIds = [
      'enturnamiento',
      'seguridad-trafico',
      'tracking-seguridad',
      'novedades-cupo',
      'novedades-op',
      'novedades-liquidacion',
      'riesgos-seguros',
      'siniestros'
    ];

    processData.forEach(phase => {
      phase.processes.forEach((process: Process) => {
        // Solo contar los procesos que están en la pestaña adicional
        if (excludedProcessIds.includes(process.id)) {
          const hasAllLinks = process.pdfLink && process.figmaLink;
          const hasNoLinks = !process.pdfLink && !process.figmaLink;
          
          if (hasAllLinks) {
            completosExcluidos++;
          } else if (hasNoLinks) {
            pendientesExcluidos++;
          } else {
            parcialesExcluidos++;
          }
        }
      });
    });

    return {
      completos: completosExcluidos,
      parciales: parcialesExcluidos,
      pendientes: pendientesExcluidos,
      total: excludedProcessIds.length
    };
  };

  const calculateSupportSummary = () => {
    let completosApoyo = 0;
    let parcialesApoyo = 0;
    let pendientesApoyo = 0;

    const supportPhase = processData.find(phase => phase.id === 'procesos-apoyo');
    
    if (supportPhase) {
      supportPhase.processes.forEach((process: Process) => {
        const hasAllLinks = process.pdfLink && process.figmaLink;
        const hasNoLinks = !process.pdfLink && !process.figmaLink;
        
        if (hasAllLinks) {
          completosApoyo++;
        } else if (hasNoLinks) {
          pendientesApoyo++;
        } else {
          parcialesApoyo++;
        }
      });
    }

    return {
      completos: completosApoyo,
      parciales: parcialesApoyo,
      pendientes: pendientesApoyo,
      total: supportPhase ? supportPhase.processes.length : 0
    };
  };

  const summary = calculateSummary();
  const excludedSummary = calculateExcludedSummary();
  const supportSummary = calculateSupportSummary();

  // Calcular el resumen total combinado
  const totalSummary = {
    completos: summary.completos + excludedSummary.completos,
    parciales: summary.parciales + excludedSummary.parciales,
    pendientes: summary.pendientes + excludedSummary.pendientes,
    total: summary.total + excludedSummary.total
  };

  

export default Summary;
