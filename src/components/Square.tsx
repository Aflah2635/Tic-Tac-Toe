import React from 'react';
import { X, Circle } from 'lucide-react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  disabled: boolean;
}

export function Square({ value, onClick, disabled }: SquareProps) {
  return (
    <button
      className={`aspect-square w-full bg-white/90 rounded-xl shadow-md 
                 flex items-center justify-center transition-all duration-200
                 ${!disabled && !value ? 'hover:bg-white hover:shadow-lg hover:scale-[1.02]' : ''}
                 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                 ${value ? 'bg-white' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {value === 'X' && <X className="w-2/3 h-2/3 text-indigo-600 animate-appear" />}
      {value === 'O' && <Circle className="w-2/3 h-2/3 text-rose-600 animate-appear" />}
    </button>
  );
}