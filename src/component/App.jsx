import react from "react";
import BarraLateraInicio from "./BarraLateraInicio";
import BarraLateraBusqueda from "./BarraLateraBusqueda";
import Panel from "./Panel";

function App() {
    return <div className="inicio">
        <BarraLateraInicio />
        <Panel /> 
    </div>
}

export default App;