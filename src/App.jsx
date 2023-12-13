import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { ListaPacientes } from "./components/ListaPacientes"
import { Navbar } from "./components/Navbar"
import { Alert } from "./components/Alert"

function App() {
  // const [pacientes, setPacientes] = useState([])
  const [counter, setCounter] = useState(0)
  let content = ''

  if (counter <= 0) {
    content = <Alert css="alert alert-danger mt-3" message="No tienes productos agregados en el carrito" />
  }
  else {
    content = <Alert css="alert alert-success mt-3" message="Si hay productos en el carrito" />
  }
  return (
    <div className="vh-100 overflow-y-scroll">
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <Formulario  />
          </div>
          <div className="col-8">
            <h2>Listado de Pacientes</h2>
            <ListaPacientes />
            <button className="btn btn-success mt-3" onClick={() => {
              setCounter(counter + 1)
            }}>Agregar</button>
            <button className="btn btn-danger mx-3 mt-3" onClick={() => {
              if (counter >= 1) {
                setCounter(counter - 1)
              }
              else {
                setCounter(0)
              }
            }} >Quitar</button>
            {content}
            <h5>Productos: {counter}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
export { App }