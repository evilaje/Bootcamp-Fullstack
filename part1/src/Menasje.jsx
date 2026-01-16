const Hello = (props) => {
    console.log(typeof parseInt(props.age)) // props es un objectnormal
    return (
        <div>
            <p>
                Hola mundo desde otra funcion! {props.name}
            </p>
            <p>
                tu edad de mierda es: {props.age}
            </p>
        </div>
    )
}

export default Hello
