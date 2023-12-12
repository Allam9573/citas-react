import { Formulario } from "./components/Formulario"
import { ListaPacientes } from "./components/ListaPacientes"
import { Navbar } from "./components/Navbar"
function App() {
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
          </div>
        </div>
      </div>
    </div>
  )
}
export { App }