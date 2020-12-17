import logo from './tuplab-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav">
      <img src={logo} class="logo" alt="TupLab" />
      </nav>
      <header className="App-header">
        <h3>Coming Soon!</h3>
        <p>
        Experimenting with small and crazy ideas that makes sense. 
        </p>
        <h2>hi@tuplab.tech</h2>
        <a
          className="App-link"
          href="https://www.linkedin.com/company/tuplab/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Subscribe
        </a>
      </header>
    </div>
  );
}

export default App;
