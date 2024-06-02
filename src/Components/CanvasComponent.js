import React, { useEffect, useRef } from 'react';
import './CanvasComponent.css'; // Make sure this is imported

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      // Example canvas effect (fill with black)
      context.fillStyle = '#000000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      // Add your canvas effect logic here
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="canvas-background"
      data-generated="false"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default CanvasComponent;
