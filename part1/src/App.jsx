import Hello from "./Menasje"
import Descripcion from "./Descripcion"

const App = () => {
    return (
        <div>
            <h1>Welcome to my ass shit App</h1>
            <Hello name = "Anibal" age="18"></Hello>
            <Descripcion color = "red" msg="Este es mi componente"></Descripcion>
            <Descripcion color = "green" msg="creado personalmente"></Descripcion>
            <Descripcion color = "blue" msg="con cada mensaje diferente"></Descripcion>
        </div>
    )
}

export default App
