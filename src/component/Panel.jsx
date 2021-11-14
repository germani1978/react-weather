import react from "react";
import PanelPredicionTiempo from "./PanelPredicionTiempo";
import DatosHoy from "./DatosHoy";

// Padre App
function Panel() {
    return <div className='panel'>
        < PanelPredicionTiempo/>
        < DatosHoy />
    </div>
}

export default Panel;