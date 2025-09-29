import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'


function App() {
  const [count, setCount] = useState(10)
  const [step, setStep] = useState(1)

  function hozzaad() {
    const maxErtek = 100;

    if(count + step < 0) {
      alert("Nem lehet kevesebb mint 0");
      return;
    }
    if(count + step > maxErtek) {
      alert("Nem lehet több mint 100");
      return;
    }
    setCount( (c) => c + step);
  }

  useEffect(() => {
    if(step != 1) {
      setTimeout( () => {
        setStep(1);
      }, 2000);
    }
  }, [step]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <input type={"number"} value={step} onChange={(e) => setStep(parseInt(e.target.value))} />
      <div className="card">
        <p>Ennyiszer kattintottál rá: {count}</p>
        <Button alma={() => hozzaad()}>
          Plusz 1
        </Button>

        <Button alma={() => hozzaad()}>
         Minusz 1
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
