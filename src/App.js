import './App.css';
import { useEffect, useRef } from 'react';

function App() {

  const canvasRef = useRef(null)

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d')
    // Set styling
    const color = '#111'//Math.floor(Math.random()*16777215).toString(16);
    ctx.strokeStyle = '#' + color
    ctx.font = '18px Arial';

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillStyle = '#' + color
    ctx.fillText('hi', 50, 50);
    ctx.rect(10, 10, 100, 100);
    ctx.stroke();
  }


  useEffect(() => { draw() }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome to canvas world</h1>
        </div>
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            background: 'white',
            width: 640,
            height: 480,
          }}
        ></canvas>
      </header>
    </div>
  );
}

export default App;
