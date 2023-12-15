import { useEffect } from "react"

function ListaPacientes({ pacientes, setPaciente }) {

    const { nombre, correo, telefono, sintomas, id } = pacientes

    useEffect(() => {
        console.log(pacientes.length)
    }, [])

    return (
        <div>
            <div className="card mt-3 shadow">
                <h6 className="my-2 mt-4 mx-3">Nombre: {nombre}</h6>
                <h6 className="my-2 mx-3">Correo Electronico: {correo}</h6>
                <h6 className="my-2 mx-3">Telefono: {telefono}</h6>
                <h6 className="my-2 mx-3">Sintomas: {sintomas} </h6>
                <h6 className="my-2 mx-3">ID: {id} </h6>
                <div className="d-flex">
                    <a href="" className="btn btn-primary w-25 m-3">Editar</a>
                    <a href="" className="btn btn-danger w-25 m-3">Eliminar</a>
                </div>
            </div>
            { }
        </div>
    )
}
export { ListaPacientes }