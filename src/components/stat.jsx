import React from 'react';

const Stat = () => {
  return (
    
    <div className="dashboard-container ">
      <h1>Quelques résultats des Orientations effectuées</h1>
      <div class="grid grid-rows-2 grid-flow-col gap-2">
        <div class="row-start-1 row-span-2 border-blue ...">
          <span class="text-bold px-10" aria-label="orientation">+85</span>
          <p> Orientations effectuées</p>
        </div>
        <div class="row-end-3 row-span-2 ...">
          <span role="img" aria-label="satisfaction">+66</span>
          <p> Satisfactions</p>
        </div>
        <div class="row-start-1 row-end-4 ...">03</div>
        <div class="row-start-1 row-end-4 ...">03</div>
      </div>
      <div className="metrics">
          
        <div className="metric">
          
        </div>
        <div className="metric">
          <span role="img" aria-label="testimonials">📝</span>
          <p>+30 Témoignages</p>
        </div>
        <div className="metric">
          <span role="img" aria-label="comfort">👍</span>
          <p>84% users find team comfort</p>
        </div>
      </div>
      <div className="cta-section">
        <h2>Lancez-Vous</h2>
        <p>Nous vous permettons de lancer votre chèque pour tous types d'achat & Chèque entreprise etc...</p>
        <button>Démarrer maintenant!</button>
      </div>
      <div className="images-section">
        <img src="image1.jpg" alt="Person using laptop" />
        <img src="image2.jpg" alt="Two people having a conversation" />
        <img src="image3.jpg" alt="Group of people with one using a laptop" />
      </div>
    </div>
  );
};

export default Stat;