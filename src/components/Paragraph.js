// src/components/Paragraph.js
import React from 'react';
import DropZone from './DropZone';

const Paragraph = ({ paragraph, blanks, answers, onDrop }) => {
  const createParagraph = () => {
    const parts = paragraph.split('[_input]');
    return parts.map((part, index) => {
      if (index < blanks.length) {
        const blankId = blanks[index].id;
        const isCorrect = answers[blankId] === blanks[index].correctAnswer;
        const dropZoneClass = isCorrect ? 'correct' : answers[blankId] ? 'incorrect' : '';

        return (
          <span key={index}>
            {part}
            <DropZone
              id={blankId}
              answer={answers[blankId]}
              onDrop={onDrop}
              dropZoneClass={dropZoneClass} // Truyền class cho DropZone
            />
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return <p>{createParagraph()}</p>;
};

export default Paragraph;
