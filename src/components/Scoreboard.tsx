import React from 'react';
import { Trophy } from 'lucide-react';

interface ScoreboardProps {
  scores: {
    X: number;
    O: number;
  };
}

export function Scoreboard({ scores }: ScoreboardProps) {
  return (
    <div className="flex justify-center gap-8 mb-6 animate-slideDown">
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">X</span>
        </div>
        <div className="text-white">
          <p className="text-sm opacity-90">Player X</p>
          <p className="text-2xl font-bold">{scores.X}</p>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
        <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">O</span>
        </div>
        <div className="text-white">
          <p className="text-sm opacity-90">Player O</p>
          <p className="text-2xl font-bold">{scores.O}</p>
        </div>
      </div>
    </div>
  );
}