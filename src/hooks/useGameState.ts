import { useState, useCallback } from 'react';
import { checkWinner } from '../utils/gameLogic';

interface GameScores {
  X: number;
  O: number;
}

export function useGameState() {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [scores, setScores] = useState<GameScores>({ X: 0, O: 0 });

  const winner = checkWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  const handleSquareClick = useCallback((index: number) => {
    if (squares[index] || winner || isDraw) return;

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }, [squares, currentPlayer, winner, isDraw]);

  const resetGame = useCallback(() => {
    setSquares(Array(9).fill(null));
    setCurrentPlayer('X');
  }, []);

  const updateScore = useCallback((winner: string) => {
    setScores(prev => ({
      ...prev,
      [winner]: prev[winner as keyof GameScores] + 1
    }));
  }, []);

  return {
    squares,
    currentPlayer,
    winner,
    isDraw,
    scores,
    handleSquareClick,
    resetGame,
    updateScore,
  };
}