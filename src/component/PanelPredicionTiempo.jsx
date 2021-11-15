import react from "react";
import TiempoDiaN from "./TiempoDiaN";

// Padre Panel
function PanelPredicionTiempo() {
  return (
    <div className="PanelPredicionTiempo">
        <div className="grados">
            <button>°C</button>
            <button>°F</button>
        </div>
        
        <div className="cont-dia">
            <TiempoDiaN />
            <TiempoDiaN />
            <TiempoDiaN />
            <TiempoDiaN />
            <TiempoDiaN />
        </div>
    </div>
  );
}

export default PanelPredicionTiempo;
