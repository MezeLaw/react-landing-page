import 'bootstrap/dist/js/bootstrap';
import './info.css'

export function Info(){
    return (
        <section className='info'>
            <div className="d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="golden">Info del Evento</h1>
                    <h5>13 de Mayo, 12PM</h5>
                    <p>Cuando</p>
                    <h5>Virbela Campus</h5>
                    <p>Donde</p>
                    <h5>Gratis!</h5>
                    <p>Precios</p>
                </div>
            </div>
 
            <div className="container d-flex justify-content-center align-items-center detailed-info">
                <div className="text-center">
                    <h2 className="golden">Tema principal</h2>
                    <p>En muchos sentidos, el Metaverso ya está aquí. Los mundos virtuales como Roblox, Minecraft y Fortnite
                        tienen miles de millones de usuarios y economías que rivalizan con pequeños países.
                        ¿Qué papel desempeñarán los mundos virtuales y el Metaverso en el futuro del trabajo?
                        Únete a los líderes de pensamiento más prominentes del mundo en XR para una animada discusión
                        mientras comparten su visión y desentrañan esta pregunta.
                    </p>
                </div>
            </div> 

        </section>
        
    );
}