import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo à gauche */}
        <div className="text-2xl font-bold text-blue-600">
          Logo
        </div>

        {/* Menus au centre */}
        <div className="hidden md:flex space-x-8">
          <a href="#formation" className="text-gray-600 hover:text-blue-600">
            Formation
          </a>
          <a href="#universite" className="text-gray-600 hover:text-blue-600">
            Université
          </a>
          <a href="#comment-ca-marche" className="text-gray-600 hover:text-blue-600">
            Comment ça marche
          </a>
          <a href="#a-propos" className="text-gray-600 hover:text-blue-600">
            À propos
          </a>
        </div>

        {/* Bouton à droite */}
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Commencer Gratuitement
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
