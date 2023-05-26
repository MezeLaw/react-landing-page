import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar} from './components/navbar/navbar'
import { Hero } from './components/hero/hero'
import { Info } from './components/info/info'
import { Footer } from './components/footer/footer';
import { Form } from './components/form/form'
function App() {
  return (
    <div> 
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <header>
        <Navbar/>
        <Hero/>
        <Info/> 
        <Form/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
