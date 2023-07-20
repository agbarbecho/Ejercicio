import React, { useState } from 'react';

export default function MiComponente() {
  const colors = ['yellow', 'green', 'red'];
  let storedColorIndex = localStorage.getItem('colorIndex');
  let initialColorIndex;

  if (storedColorIndex) {
    initialColorIndex = parseInt(storedColorIndex);
  } else {
    initialColorIndex = 0;
    localStorage.setItem('colorIndex', initialColorIndex.toString());
  }

  const [colorIndex, setColorIndex] = useState(initialColorIndex);
  const color = colors[colorIndex];

  const changeColor = () => {
    const nextIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextIndex);
    localStorage.setItem('colorIndex', nextIndex.toString());
  };

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <div style={{ backgroundColor: color, width: '500px', height: '500px' }}></div>
    </div>
  );
}