import React from 'react';
import { Images, Calendar } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  subtitle: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  const Icon = title.includes('image') ? Images : Calendar;
  
  return (
    <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Icon size={32} className="text-blue-900" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default EmptyState;