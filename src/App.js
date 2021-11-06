import logo from './Logo.svg';
import './App.css';
import {FaDiscord} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} alt="Tau Logo"/>
          <p>Sweeping beats with a scythe.</p>
          <a className="btn-download" href="https://github.com/taulazer/tau/releases/">
              <span>Download</span></a>
      </header>
        <footer className="App-footer">
        {/*    <p className="text-bold">This website is still being worked on!</p>*/}
        {/*    <p>However, for now you can visit the <a href="https://github.com/taulazer/tau#readme">ruleset page</a> for more details on this ruleset!</p>*/}
            <div className="social-links">
                {/*  Discord  */}
                <a href="https://discord.gg/7Y8GXAa"><FaDiscord/></a>
                {/*  GitHub Repo  */}
                <a href="https://github.com/taulazer/tau"><FaGithub/></a>
                {/*  Twitter */}
                <a href="https://twitter.com/___Laica"><FaTwitter/></a>
                {/*  Donate (To be added)  */}
            </div>
        </footer>
    </div>
  );
}

export default App;
