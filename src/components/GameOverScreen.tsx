import React from 'react';
import { Trophy, RefreshCw } from 'lucide-react';

interface GameOverScreenProps {
  winner: string | null;
  isDraw: boolean;
  onNewGame: () => void;
}

export function GameOverScreen({ winner, isDraw, onNewGame }: GameOverScreenProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-appear">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
        {winner ? (
          <>
            <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Player {winner} Wins!
            </h2>
          </>
        ) : (
          <>
            <div className="w-16 h-16 mx-auto mb-4 text-gray-400 flex items-center justify-center">
              🤝
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              It's a Draw!
            </h2>
          </>
        )}
        <p className="text-gray-600 mb-6">
          {winner ? "Congratulations on your victory!" : "Well played, both of you!"}
        </p>
        <button
          onClick={onNewGame}
          className="flex items-center justify-center w-full gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 
                   text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700
                   transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <RefreshCw className="w-5 h-5" />
          Play Again
        </button>
      </div>
    </div>
  );
}