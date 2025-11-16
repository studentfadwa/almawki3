
import React from 'react';
import { Prophet } from '../types';

interface ProphetCardProps {
  prophet: Prophet;
  onClick: () => void;
}

const ProphetCard: React.FC<ProphetCardProps> = ({ prophet, onClick }) => {
  const Icon = prophet.icon;
  return (
    <div
      onClick={onClick}
      className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center border border-amber-200"
    >
      <div className="mb-4 text-amber-700">
        <Icon className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold text-amber-900">{prophet.name}</h3>
    </div>
  );
};

export default ProphetCard;
