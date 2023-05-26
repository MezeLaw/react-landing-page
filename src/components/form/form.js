import 'bootstrap/dist/js/bootstrap';
import './form.css'

export function Form(){
    return (
        <div className="d-flex justify-content-center align-items-center event-form">
        <div id="sign-up-info">
          <h1 className="beb-neu"><strong>Registrarse</strong></h1>
          <h2 className="beb-neu">Complete el formulario para registrarse al evento.</h2>
          <br />
          <h5 className="golden beb-neu">Detalles del evento</h5>
          <p>Jueves 13 de Mayo, 12:00 pm PT (3:00 pm ET)</p>
          <ul role="list">
            <li>60 min de debate</li>
            <li>30 min para conocer con a los oradores y networking session</li>
          </ul>
          <form id="sign-up-form">
            <div className="form-group">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Nombre</label>
                <input type="text" className="form-control rounded-0" id="firstName" placeholder="Ingresa tu nombre" required />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Apellido</label>
                <input type="text" className="form-control rounded-0" id="lastName" placeholder="Ingresa tu apellido" required />
              </div>
              <div className="mb-3">
                <label htmlFor="company" className="form-label">Compañía</label>
                <input type="text" className="form-control rounded-0" id="company" placeholder="Ingresa el nombre de tu compañía" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control rounded-0" id="email" placeholder="Ingresa tu correo electrónico" required />
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary rounded-0 w-100">Registrarse</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}