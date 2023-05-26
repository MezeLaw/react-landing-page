import 'bootstrap/dist/js/bootstrap';
import './navbar.css'
import logo from '../../assets/logo-white.png';

const handleLinkClick = () => {
  const section = document.getElementById('sign-up-form');
  section.scrollIntoView({ behavior: 'smooth' });
};

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container container-fluid custom-collapse">
        <a className="navbar-brand" href="#">
            <img className="logo-styles" src={logo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link custom-btn" href="#sign-up-form" onClick={handleLinkClick}>Registro</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}