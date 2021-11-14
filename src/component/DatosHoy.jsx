import react from "react"
import PanelDatos from "./PanelDatos"

// Padre Panel
function DatosHoy() {
    return <div className='datosHoy'>
        <PanelDatos />
        <PanelDatos />
        <PanelDatos />
        <PanelDatos />
    </div>
}

export default DatosHoy