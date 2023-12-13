import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { ListaPacientes } from "./components/ListaPacientes"
import { Navbar } from "./components/Navbar"

function App() {

  const [pacientes, setPacientes] = useState([])

  return (
    <div className="vh-100 overflow-y-scroll">
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <Formulario pacientes={pacientes} setPacientes={setPacientes} />
          </div>
          <div className="col-8">
            {
              pacientes.length === 0 ? <h2>No hay pacientes registrados</h2> : <h2>Lista de Pacientes</h2>
            }
            {
              pacientes.map((paciente, index) => {
                return (
                  <ListaPacientes key={index} pacientes={paciente} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export { App }