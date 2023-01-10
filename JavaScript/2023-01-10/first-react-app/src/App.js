import logo from './logo.svg';
import './App.css';

// Komponentas
function App() {
  // JSX sintakse
  return (
    // Reacte className = class
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sveiki, tai mano pirmoji react aplikacija.
        </p>
      </header>
    </div>
  );
}

export default App;
