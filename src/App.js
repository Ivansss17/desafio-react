

import 'bootstrap/dist/css/bootstrap.min.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './App.css';
import './menu.css';
import Menu from './component/Menu/Menu';


function App() {
  return (
    <Menu/>
    /* <div className="App">
      <header className="App-header">
      
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
    </div> */
  );
}

export default App;
