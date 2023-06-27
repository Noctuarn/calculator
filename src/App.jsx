import { useState } from 'react'
import './App.scss'

function App() {
  
  return (
    <div className='body'>
      <div className="calculator">
        <div className="calculator__output">
          <div className="calculator__prev-operand">1234+</div>
          <div className="calculator__curr-operand">765</div>
        </div>
        <button className="calculator__button calculator__button_big">AC</button>
        <button className="calculator__button">DEL</button>
        <button className="calculator__button">/</button>
        <button className="calculator__button">1</button>
        <button className="calculator__button">2</button>
        <button className="calculator__button">3</button>
        <button className="calculator__button">*</button>
        <button className="calculator__button">4</button>
        <button className="calculator__button">5</button>
        <button className="calculator__button">6</button>
        <button className="calculator__button">+</button>
        <button className="calculator__button">7</button>
        <button className="calculator__button">8</button>
        <button className="calculator__button">9</button>
        <button className="calculator__button">-</button>
        <button className="calculator__button">.</button>
        <button className="calculator__button">0</button>
        <button className="calculator__button calculator__button_big">=</button>
      </div>
    </div>
  )
}

export default App
