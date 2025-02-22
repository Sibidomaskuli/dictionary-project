
import logo from "./SheCodes-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <img src={logo} alt="logo" className="img-fluid"/>
      </header>

      <main>
        <Dictionary />
      </main>

      <footer className="App-footer">
        <small>
        Coded by Anna Marasso
        <br/>
        <a href="https://github.com/annamar90/dictionary-project" id="githublink"> See it on GitHub 🔎</a>
        </small>
      </footer>
      </div>
    </div>
  );
}
