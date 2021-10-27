import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Commerce from './components/Commerce/Commerce.js';
import CoffeeShop from './components/CoffeeShop/CoffeeShop.js';
import Barber from './components/Barber/Barber.js';
import Bakery from './components/Bakery/Bakery.js';
import Office from './components/Office/Office.js';
import Publicity from './components/Publicity/Publicity.js';
import Restaurant from './components/Restaurant/Restaurant.js';
import Artist from './components/Artist/Artist.js';
import TopTrumps from './components/TopTrumps/TopTrumps.js';
import Opening from './components/Opening/Opening';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button variant="primary">Button #1</Button>*/}
      <Opening />
    </div>
  );
}

export default App;
