import react from "react"
import PanelDatos from "./PanelDatos"

// Padre Panel
function DatosHoy() {
    return <div className='datosHoy'>
        <h3>Today`s Hightlights</h3>
        <div className="cont-panel-datos">
            <PanelDatos />
            <PanelDatos />
            <PanelDatos />
            <PanelDatos />
        </div>
    </div>
}
export default DatosHoy