const Alert = (props) => {
    return (
        <div className={props.css}>
            {props.message}
        </div>
    )
}
export { Alert }