import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
    return (
        <nav id="nav" className="navbar navbar-light bg-light fixed-bottom border-top border-success">
      <div className="container-fluid justify-content-around">
        {/* Botón Inicio */}
        <Link to="/" className="navbar-button text-success">
          <button className="btn btn-link">
            <img 
              src="/nav-icons/Inicio.png"
              alt="Inicio" 
              className="img-fluid" 
            />
          </button>
        </Link>
        {/* Botón Información */}
        <Link to="/help" className="navbar-button text-success">
          <button className="btn btn-link">
            <img 
              src="/nav-icons/Ayuda.png" 
              alt="Información" 
              className="img-fluid" 
            />
          </button>
        </Link>
        {/* Botón Mensajes */}
        <Link to="/comment" className="navbar-button text-success">
          <button className="btn btn-link">
            <img 
              src="/nav-icons/Comentario.png" 
              alt="Comentario" 
              className="img-fluid" 
            />
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar