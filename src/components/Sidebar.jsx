import './Sidebar.css';
import defaultFoto from '../assets/default.jpg';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div id="barraLateral">
      <div id="perfilSidebar">
        <img id="fotoPerfilSidebar" src={defaultFoto} alt="Foto perfil" />
        <div className="nombre" id="nombreSidebar">Usuario</div>
        <div className="email" id="emailSidebar">usuario@ejemplo.com</div>
      </div>

      <div id="caminito">
        
        <Link to="/" className="step">
          <div className="circle">🧠</div>
          <div className="burbujas">
            <div className="burbuja">📄</div>
            <div className="burbuja">📊</div>
            <div className="burbuja">🗂️</div>
          </div>
          <span>Módulos</span>
        </Link>

        <div className="step">
          <div className="circle">📘</div>
          <div className="burbujas">
            <div className="burbuja">⚙️</div>
            <div className="burbuja">🔔</div>
            <div className="burbuja">👤</div>
          </div>
          <span>Actividades</span>
        </div>

        <div className="step">
          <div className="circle">🔬</div>
          <div className="burbujas">
            <div className="burbuja">📝</div>
            <div className="burbuja">📅</div>
            <div className="burbuja">⏳</div>
          </div>
          <span>Examen</span>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
