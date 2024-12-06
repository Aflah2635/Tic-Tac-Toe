import React from 'react';
import { Board } from './components/Board';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center p-4">
      <Board />
    </div>
  );
}