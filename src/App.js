// src/App.js
import React, { useState } from 'react';
import './App.css';
import dataFromBackend from './data.json';
import DragWord from './components/DragWord';
import DropZone from './components/DropZone';
import Paragraph from './components/Paragraph';
import Result from './components/Result';

function App() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState('');

  const handleDrop = (e, blankId) => {
    e.preventDefault();
    const draggedWord = e.dataTransfer.getData('text');
    setAnswers({
      ...answers,
      [blankId]: draggedWord,
    });
  };

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData('text', word);
  };

  const handleSubmit = () => {
    const { blanks } = dataFromBackend.question;
    let isCorrect = true;
    blanks.forEach((blank) => {
      if (answers[blank.id] !== blank.correctAnswer) {
        isCorrect = false;
      }
    });
    setResult(isCorrect ? 'Chính xác!' : 'Sai rồi!');
  };

  return (
    <div className="App">
      <h2>Kéo thả từ vào chỗ trống trong câu:</h2>
      <Paragraph
        paragraph={dataFromBackend.question.paragraph}
        blanks={dataFromBackend.question.blanks}
        answers={answers}
        onDrop={handleDrop}
      />
      
      <div className="draggable-container">
        {dataFromBackend.question.dragWords.map((wordObj) => (
          <DragWord
            key={wordObj.id}
            word={wordObj.word}
            color={wordObj.color}
            onDragStart={handleDragStart}
          />
        ))}
      </div>

      <button onClick={handleSubmit}>Submit</button>
      <Result result={result} />
    </div>
  );
}

export default App;
