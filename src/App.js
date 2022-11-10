import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
let adjust = undefined
function App() {
  const [watch, setWatch] = useState(0)
  const [started, setStarted] = useState(false)
  function start() {
    adjust = setInterval(() => {
      setWatch((x) => x + 1)
    }, 1000)
    setStarted(true)
  }
  function stop() {
    clearInterval(adjust)
    setStarted(false)

  }
  function reset() {
    setWatch(0)
    clearInterval(adjust)
    setStarted(false)
  }
  return (
    <div className="App">
      <h1>Stop-Watch</h1>
      <h1>{watch}</h1>
      <Button variant="primary" disabled={started} onClick={() => start()} >Start</Button>{' '}
      <Button variant="warning" onClick={() => stop()}>Stop</Button>{' '}
      <Button variant="danger" onClick={() => reset()}>Reset</Button>{' '}
    </div>
  );
}

export default App;
