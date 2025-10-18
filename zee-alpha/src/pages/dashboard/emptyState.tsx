import React from 'react';

interface EmptyStateProps {
  title: string;
  subtitle: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center py-16 bg-white rounded-lg shadow-sm">
      <div className="max-w-md mx-auto">
        <div className="text-6xl mb-4">📷</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default EmptyState;