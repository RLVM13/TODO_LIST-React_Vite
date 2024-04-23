import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./data"; //Datos iniciales
import MiMain from './MiMain';

function App() {
  const [count, setCount] = useState(0) //viene por defecto

  const [list, setList] = useState(data); // [{},{},{}] lista de items

/*   const [values, setValues] = useState({ //nuevo estado de "Values"
    Tarea: "",
  }) */

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <section>
          <form>
            <label htmlFor="name">Tarea</label><br />
            <input type="text" name="tarea" /><br />
            <input type="date" name="fecha" /><br />
            <button type="submit">Crear Tarea</button>
          </form>
        </section>
      </div>
      <MiMain></MiMain>
    </>
  )
}

export default App
