import react from "react";
import BarraLateraInicio from "./BarraLateraInicio";
import PanelPredicionTiempo from "./PanelPredicionTiempo";
import DatosHoy from "./DatosHoy";

function App() {
    return <div className="inicio">
        <BarraLateraInicio />
        <PanelPredicionTiempo/>
        <DatosHoy />
    </div>
}

export default App;