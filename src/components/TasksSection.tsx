import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const TasksSection = () => {
  // Link configurable para las tareas pendientes
  const tasksLink = 'https://docs.google.com/spreadsheets/d/1Qibk8C98PjjEyBm9h0eERDwBAUc4DxSF/edit?usp=drive_link&ouid=115478075634609640734&rtpof=true&sd=true'; // Cambiar por el link real

  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-amber-800 mb-1">
            📋 Tareas Pendientes
          </h2>
          <p className="text-amber-700 text-sm">
            Accede a las tareas y actividades pendientes del proyecto
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-white hover:bg-amber-50 border-amber-300 text-amber-800 hover:text-amber-900"
          onClick={() => window.open(tasksLink, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Ver Tareas
        </Button>
      </div>
    </div>
  );
};

export default TasksSection;