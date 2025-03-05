/*import React, { useState } from "react";
import "./App.css"; // Fichier CSS personnalisé

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="portfolio" data-page="portfolio">*/
    
      {/* En-tête */}

      /*
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
*/
      {/* Liste de filtres */}

      /*
      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active">All</button>
          </li>
          <li className="filter-item">
            <button>Web design</button>
          </li>
          <li className="filter-item">
            <button>Applications</button>
          </li>
          <li className="filter-item">
            <button>Web development</button>
          </li>
        </ul>*/

        {/* Sélecteur de catégorie */}

        /*<div className="filter-select-box">
          <button className="filter-select">
            <div className="select-value">Select category</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button>All</button>
            </li>
            <li className="select-item">
              <button>Web design</button>
            </li>
            <li className="select-item">
              <button>Applications</button>
            </li>
            <li className="select-item">
              <button>Web development</button>
            </li>
          </ul>
        </div>
      </section>*/

      {/* Projet et bouton Mission 1 */}

      /*
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div
              className="project-item active"
              data-category="web development"
              onClick={togglePopup}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img
                    src="./assets/images/cnfpt.png"
                    alt="CNFPT-stage"
                    loading="lazy"
                    width="500"
                    height="300"
                  />
                </figure>
                <h3 className="project-title">CNFPT-stage</h3>
                <p className="project-category">Traitement de Base de données</p>
              </a>
            </div>
          </div>
        </div>
      </div>*/

      {/* Popup */}

        /*
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={togglePopup}>
              &times;
            </span>
            <h2 className="text-center">CNFPT-stage</h2>
            <p className="text-center">Traitement de Base de données</p>
            <div className="text-container">
              <p>
                <strong>Objet :</strong> Vérification de l'âge des employés dans
                notre base de données
              </p>
              <p>
                Bonjour, je suis EUSTACHE Mathis, stagiaire au CNFPT.*/

                {/* Ajoutezplus de contenu ici */}

                /*
              </p>
            </div>
            <div className="screenshot-container">
              <h3>Capture d'écran de la base de données</h3>
              <p>Voici une capture d'écran montrant les erreurs détectées :</p>
              <img
                src="./assets/images/verif age.png"
                alt="Capture moins de 18 ans"
                className="img-fluid"
              />
              <img
                src="./assets/images/verif age+68.png"
                alt="Capture plus de 68 ans"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
*/