import 'bootstrap/dist/js/bootstrap';
import './footer.css'
import logo from '../../assets/logo-white.png';
 
export function Footer(){
    return(
        <footer className="bg-light text-center text-lg-start footer">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <a href="https://www.virbela.com/" className="text-dark" target='_blank'>
                <img className="footer-logo" src={logo} alt="Logo"/>
            </a>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5>Enlaces</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://www.virbela.com/" target='_blank' className='footer-anchor'>Virbela</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5>Contacto</h5>
              <ul className="list-unstyled">
                <li>
                  <span>Email: example@virbela.com</span>
                </li>
                <li>
                  <span>Telefono: +1234567890</span>
                </li>
                <li>
                  <span>Direccion: Calle Falsa 123, Islas Salomon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3">
          &copy; {new Date().getFullYear()} Virbela. All rights reserved.
        </div>
      </footer> 
    );
}