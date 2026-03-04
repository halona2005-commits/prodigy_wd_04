import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <header className="header">
        <h1>Halona Portfolio</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Theme
        </button>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Web Development Intern passionate about building modern,
          responsive and user-friendly websites.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML - 90%</li>
          <li>CSS - 85%</li>
          <li>JavaScript - 80%</li>
          <li>React - 75%</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">
            <h3>1. Responsive Landing Page</h3>
            <p>Interactive navigation bar with smooth scroll.</p>
          </div>

          <div className="card">
            <h3>4. Portfolio Website</h3>
            <p>Personal portfolio with clean responsive design.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>2026 Halona Ann Siju | Web Development Intern</p>
      </footer>
    </div>
  );
}

export default App;
