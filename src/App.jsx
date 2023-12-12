import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { ListaPacientes } from "./components/ListaPacientes"
import { Navbar } from "./components/Navbar"
function App() {
  const [counter, setCounter] = useState(0)
  const handleCounter = () => setCounter(counter + 1)
  return (
    <div className="vh-100 overflow-y-scroll">
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <Formulario />
          </div>
          <div className="col-8">
            <h2>Listado de Pacientes</h2>
            <ListaPacientes />
            <button className="btn btn-danger" onClick={handleCounter}>Valor: {counter}</button>
            <h5>Productos: {counter}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
export { App }