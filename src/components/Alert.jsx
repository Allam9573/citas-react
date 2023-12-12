const Error = (props) => {
    return (
        <div>
            <div className="alert alert-danger">{props.message}</div>
        </div>
    )
}
const Success = (props) => {
    return (
        <div>
            <div className="alert alert-success">{props.message}</div>
        </div>
    )
}
export { Error, Success }