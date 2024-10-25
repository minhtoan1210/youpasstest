// src/components/DropZone.js
import React from 'react';

const DropZone = ({ id, answer, onDrop, dropZoneClass }) => {
  return (
    <span
      className={`dropzone ${dropZoneClass}`} // Thêm class vào span
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, id)}
      style={{
        borderBottom: '2px dashed #ccc',
        padding: '0 5px',
        minWidth: '50px',
        display: 'inline-block',
      }}
    >
      {answer || '_input'}
    </span>
  );
};

export default DropZone;
