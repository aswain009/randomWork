import logo from './logo.svg';
import './App.css';
import Products from "./Products/Products";
import About from "./About/About";
import VertNav from "./VertNav/VertNav";
import HorzNav from "./HorzNav/HorzNav";

function App() {
  return (
    <div className="App">

      <VertNav />
      <HorzNav />

      <header className="App-header">
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

        <Products />
        <About />

      </header>
    </div>
  );
}

export default App;
