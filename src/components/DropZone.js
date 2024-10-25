// src/components/DropZone.js
import React, { useEffect } from 'react';

const DropZone = ({ id, answer, onDrop, dropZoneClass, isCheckColor }) => {

  return (
    <span
      className={isCheckColor ? `dropzone ${dropZoneClass}` : ""} // Thêm class vào span
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, id)}
      style={{
        borderBottom: '2px dashed #ccc',
        padding: '0 5px',
        minWidth: '50px',
        display: 'inline-block',
      }}
    >
      
      { answer || '_input'}
      
    </span>
  );
};

export default DropZone;
