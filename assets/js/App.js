import React from "react";
import "./App.css"; // Fichier CSS pour le style

const App = () => {
  return (
    <div className="veille-technologique">
      <h1>Veille Technologique</h1>
      <p>
        Bienvenue sur ma page de veille technologique. Je partage ici les dernières tendances et avancées dans les domaines suivants :
      </p>

      {/* Section IA */}
      <section className="veille-section">
        <h2>Intelligence Artificielle (IA)</h2>
        <p>
          L'IA est en pleine expansion. Voici quelques sujets que je suis :
        </p>
        <ul>
          <li>Les modèles de langage comme GPT-4.</li>
          <li>L'IA générative (images, musique, etc.).</li>
          <li>Les applications de l'IA dans la santé et la finance.</li>
        </ul>
      </section>

      {/* Section Crypto */}
      <section className="veille-section">
        <h2>Cryptomonnaies et Blockchain</h2>
        <p>
          La blockchain et les cryptomonnaies évoluent rapidement. Voici ce que je surveille :
        </p>
        <ul>
          <li>Les nouvelles régulations autour des cryptomonnaies.</li>
          <li>Les avancées technologiques comme Ethereum 2.0.</li>
          <li>Les applications de la blockchain dans l'industrie.</li>
        </ul>
      </section>

      {/* Section Développement Web */}
      <section className="veille-section">
        <h2>Développement Web</h2>
        <p>
          Le développement web ne cesse d'évoluer. Voici les tendances actuelles :
        </p>
        <ul>
          <li>Les frameworks JavaScript (React, Vue, Svelte).</li>
          <li>Les outils de développement (Vite, Webpack, etc.).</li>
          <li>Les bonnes pratiques en matière de sécurité web.</li>
        </ul>
      </section>

      {/* Section Ressources */}
      <section className="veille-section">
        <h2>Ressources</h2>
        <p>
          Voici quelques ressources que j'utilise pour ma veille :
        </p>
        <ul>
          <li>
            <a href="https://daily.dev" target="_blank" rel="noopener noreferrer">
              daily.dev
            </a>
          </li>
          <li>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;