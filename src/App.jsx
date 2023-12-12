import { Header } from "./components/Header"
import { ListaPacientes } from "./components/ListaPacientes"
import { Navbar } from "./components/Navbar"
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
        <ListaPacientes />
      </div>
    </div>
  )
}
export { App }