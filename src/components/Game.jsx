import React, { useState } from 'react';
import Board from './Board';
import './Game.css';
import {calculateWinner} from '../helper'

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = (index) => {
    const boardCopy = [...board]
    // Определить был ли клик по ячейке или игра закончена
    if (winner || boardCopy[index]) return null
    // Определить чей ход х ? 0
    boardCopy[index] = xIsNext ? 'X' : '0'
    // Обновить стейт
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  const startNewGame = () => {
    return (
      <button className = "start_btn" onClick = {() => setBoard(Array(9).fill(null)) }>Очистить поле</button>
    )
  }

  return (
    <div className="wrapper">
      { startNewGame()}
        <Board squares={board} click = {handleClick}/> 
        <p className="game_info">
          { winner ? 'Победитель' + winner : 'Сейчас ходит ' +  (xIsNext ? 'X' : '0')}
        </p>
    </div>
  )
}
