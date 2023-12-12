function Login(props) {
    const cliente = {
        nombre: "Allam",
        pais: 'hn'
    }
    return (
        <>
            <h1>Inicio de Sesion</h1>
            <h3>Usuario logueado: {props.user}</h3>
            <h3>{2 + 3}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, iure.</p>q
        </>
    )
}

export { Login }