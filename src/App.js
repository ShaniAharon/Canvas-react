import './App.css';
import { useEffect, useRef } from 'react';
import { utilService } from './utils.js'

function App() {

  const canvasRef = useRef(null)
  const modalRef = useRef(null)
  var gStars = [
    {
      name: "Michael",
      rate: 100,
      x: 20,
      y: 50
    },
    {
      name: "Static",
      rate: 130,
      x: 100,
      y: 20
    },
    {
      name: "Jon",
      rate: 140,
      x: 180,
      y: 10
    }
  ]
  const draw = () => {
    const ctx = canvasRef.current.getContext('2d')
    utilService.drawCharts(ctx, canvasRef.current)
    // Set styling
    // const color = '#111'//Math.floor(Math.random()*16777215).toString(16);
    // ctx.strokeStyle = '#' + color
    // ctx.font = '18px Arial';

    // // Draw rectangles and text
    // ctx.beginPath();
    // ctx.fillStyle = '#' + color
    // ctx.fillText('hi', 50, 50);
    // ctx.rect(10, 10, 100, 100);
    // ctx.stroke();
  }

  const canvasClick = (ev) => {
    ev = ev.nativeEvent
    console.log(ev, 'ev');

    console.log('Click on me canvas');
    // const clickedStar = null
    // TODO: find out if clicked a star bar
    const clickedStar = gStars.find(star => {


      //check if we clicked on a chart 
      return (
        ev.offsetX > star.x && ev.offsetX < star.x + 40 &&
        ev.offsetY > star.y && ev.offsetY < star.y + star.rate
      )
    })

    if (clickedStar) {
      console.log('chart', clickedStar)
      openModal(clickedStar.name, clickedStar.rate, ev.clientX, ev.clientY)
    } else closeModal()
  }

  const openModal = (starName, starRate, x, y) => {
    console.log(modalRef, 'modal');
    modalRef.current.innerText = `${starName} is ${starRate}% awesome`
    modalRef.current.style.left = x + 'px'
    modalRef.current.style.top = y + 'px'
    modalRef.current.hidden = false
  }
  const closeModal = () => {
    modalRef.current.hidden = true
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
          onClick={canvasClick}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            background: 'white',
            height: "400",
            width: "400"
          }}
        ></canvas>
        <div className="modal" ref={modalRef} hidden></div>
      </header>
    </div>
  );
}

export default App;
