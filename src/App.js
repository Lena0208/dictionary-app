import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          Coded by {""}
          <a
            href="https://www.linkedin.com/in/lena-berger-316849197/"
            className="Link"
            target="_blank"
            rel="noreferrer"
          >
            Lena
          </a>
        </footer>
      </div>
    </div>
  );
}
