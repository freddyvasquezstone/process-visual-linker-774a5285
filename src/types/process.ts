
export interface Process {
  id: string;
  name: string;
  pdfLink?: string;
  figmaLink?: string;
  documentoRefinadoLink?: string;
  documentoObservacionesLink?: string;
  responsableStatus?: 'validacion-humadea' | 'validacion-stone' | 'refinado-stone';
}

export interface Phase {
  id: string;
  title: string;
  icon: string;
  bgClass: string;
  processes: Process[];
}

export interface DragData {
  processId: string;
  phaseId: string;
  index: number;
}
