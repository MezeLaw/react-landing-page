import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar} from './components/navbar/navbar'
import { Hero } from './components/hero/hero'
import { Info } from './components/info/info'
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div>
      <header>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.png" />
        <Navbar/>
        <Hero/>
        <Info/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
