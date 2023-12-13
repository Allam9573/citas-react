import { useState, useEffect } from "react"
import { Alert } from "./Alert"

function Formulario() {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(true)
    const [pacientes, setPacientes] = useState([])

    const nombreChange = e => setNombre(e.target.value)
    const correoChange = e => setCorreo(e.target.value)
    const telefonoChange = e => setTelefono(e.target.value)
    const sintomasChange = e => setSintomas(e.target.value)

    const formulario = (e) => {
        e.preventDefault()
        if ([nombre, correo, telefono, sintomas].includes('')) {
            setError(true)
            return
        } else {
            setError(false)
        }

        const paciente = {
            nombre,
            correo,
            telefono,
            sintomas
        }
        setPacientes([...pacientes, paciente])
        console.log(pacientes)
        setNombre('')
        setCorreo('')
        setTelefono('')
        setSintomas('')

    }
    return (
        <div>
            <p className="fs-5">Agrega pacientes y <span className="text-primary">administralos</span></p>
            <div className="card shadow">
                <div className="card-header text-center">
                    <h4 className="my-2">Registro de Pacientes</h4>
                </div>
                <div className="card-body">
                    {error ? <Alert css="alert alert-danger" message="Existen campos vacios" /> : <Alert css="alert alert-success" message="Envio de formulario exitoso" />}
                    <form onSubmit={formulario}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre paciente</label>
                            <input type="text" placeholder="Nombre paciente" name="" id="nombre" className="form-control mb-3" value={nombre}
                                onChange={nombreChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo">Correo Electronico</label>
                            <input type="text" placeholder="CorreoElectronico" name="" id="correo" className="form-control mb-3" value={correo}
                                onChange={correoChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" placeholder="Numero telefonico" name="" id="telefono" className="form-control mb-3"
                                value={telefono} onChange={telefonoChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sintomas">Sintomas</label>
                            <textarea placeholder="Descripcion sintomas..." rows="5" name="" id="sintomas" className="form-control mb-3"
                                value={sintomas} onChange={sintomasChange} />
                        </div>
                        <input type="submit" value="Guardar" className="btn btn-info text-white w-100" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Formulario }