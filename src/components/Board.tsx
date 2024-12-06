import React, { useEffect } from 'react';
import { Square } from './Square';
import { GameOverScreen } from './GameOverScreen';
import { Scoreboard } from './Scoreboard';
import { useGameState } from '../hooks/useGameState';
import { RefreshCw } from 'lucide-react';

export function Board() {
  const {
    squares,
    currentPlayer,
    winner,
    isDraw,
    scores,
    handleSquareClick,
    resetGame,
    updateScore
  } = useGameState();

  useEffect(() => {
    if (winner) {
      updateScore(winner);
    }
  }, [winner, updateScore]);

  return (
    <div className="w-full max-w-md mx-auto p-6 relative">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Tic Tac Toe</h1>
        <Scoreboard scores={scores} />
        <div className="flex justify-center items-center gap-4 mb-4">
          {!winner && !isDraw && (
            <div className="text-xl font-medium text-white/90 animate-appear">
              Player {currentPlayer}'s Turn
            </div>
          )}
          <button
            onClick={resetGame}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg 
                     transition-all duration-200 backdrop-blur-sm shadow-md hover:shadow-lg"
          >
            <RefreshCw className="w-4 h-4" />
            New Game
          </button>
        </div>
      </div>

      <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-xl">
        <div className="grid grid-cols-3 gap-3 h-full">
          {squares.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => handleSquareClick(index)}
              disabled={!!winner || isDraw || !!value}
            />
          ))}
        </div>
      </div>

      {(winner || isDraw) && (
        <GameOverScreen
          winner={winner}
          isDraw={isDraw}
          onNewGame={resetGame}
        />
      )}
    </div>
  );
}