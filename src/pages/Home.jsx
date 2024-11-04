import '../App.css';
import logo from '../logo.svg';


export default function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>../App.js</code> and save to reload.
            Testando
          </p>
          <a
            className="App-link"
            href="/about"
            target="_blank"
            rel="noopener noreferrer">
          </a>
          <a className="App-link" href="/blogs" target="_blank" rel="noopener noreferrer">
            Blogs
          </a>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    ); 

}