// src/components/DragWord.js
import React from 'react';

const DragWord = ({ word, color, onDragStart }) => {
  return (
    <div
      className={`draggable ${color === 'red' ? 'red' : ''}`}
      draggable
      onDragStart={(e) => onDragStart(e, word)}
      style={{
        border: '1px solid black',
        padding: '5px',
        margin: '5px',
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      {word}
    </div>
  );
};

export default DragWord;
