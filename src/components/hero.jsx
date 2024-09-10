import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#F8F9FA] py-12 flex items-center justify-center h-[90vh] w-full">
      <div className="w-full px-4 rounded-lg bg-white shadow-lg py-16 max-w-[90%] mx-auto">
        {/* Titre */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          <span className="text-black">Découvrez vos talents avec</span> <span className="text-blue-600">l'IA</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-gray-600 text-lg sm:text-xl text-center mb-8">
          Transformez votre avenir avec notre plateforme d'orientation basée sur l'intelligence artificielle.
        </p>

        {/* Bouton Commencer maintenant */}
        <div className="flex justify-center mb-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg">
            Commencer maintenant
          </button>
        </div>

        {/* Logos des partenaires */}
        <div className="flex justify-center items-center gap-8">
          <img src="src/assets/Isheero_521x142-px-480x131.png" alt="Partenaire 1" className="h-12" />
          <img src="src\assets\Logo-ATUT.png" alt="Partenaire 2" className="h-12" />
          <img src="src\assets\LOGO-RINTIO.png" alt="Partenaire 3" className="h-12" />
          <img src="src\assets\official_logo.png" alt="Partenaire 4" className="h-12" />
          <img src="src\assets\0022912001567859516.png" alt="Partenaire 5" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
