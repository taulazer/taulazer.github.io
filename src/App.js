import logo from './Logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} alt="Tau Logo"/>
          <p>Sweeping beats with a scythe.</p>
          <a className="btn-download" href="https://github.com/taulazer/tau/releases/download/2021.1103.0/osu.Game.Rulesets.Tau.dll">
              <span>Download</span></a>
      </header>
        <footer className="App-footer">
            <p className="text-bold">This website is still being worked on!</p>
            <p>However, for now you can visit the <a href="https://rulesets.info/rulesets/tau">ruleset page</a> for more details on this ruleset!</p>
        </footer>
    </div>
  );
}

export default App;
