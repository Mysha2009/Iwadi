import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../layouts/index";


const SearchResults = () => {
  // Exemple de données pour les résultats
  const results = [
    {
      id: 1,
      title: 'Résultat 1',
      parcours: [
        { nom: 'Parcours A', commentaire: 'Ce parcours est idéal pour débutants.' },
        { nom: 'Parcours B', commentaire: 'Avantages spécifiques à ce parcours.' },
        { nom: 'Parcours C', commentaire: 'Recommandé pour ceux qui aiment l’innovation.' },
      ],
    },
    {
      id: 2,
      title: 'Résultat 2',
      parcours: [
        { nom: 'Parcours D', commentaire: 'Un parcours pour les amateurs de technologie.' },
        { nom: 'Parcours E', commentaire: 'Focalisé sur la gestion et l’organisation.' },
        { nom: 'Parcours F', commentaire: 'Parcours multidisciplinaire.' },
      ],
    },
    {
      id: 3,
      title: 'Résultat 3',
      parcours: [
        { nom: 'Parcours G', commentaire: 'Excellent pour les créatifs.' },
        { nom: 'Parcours H', commentaire: 'Bon équilibre entre théorie et pratique.' },
        { nom: 'Parcours I', commentaire: 'Idéal pour ceux qui veulent se spécialiser.' },
      ],
    },
    {
      id: 4,
      title: 'Résultat 4',
      parcours: [
        { nom: 'Parcours J', commentaire: 'Parcours orienté vers l’innovation.' },
        { nom: 'Parcours K', commentaire: 'Focus sur le développement personnel.' },
        { nom: 'Parcours L', commentaire: 'Approche multidisciplinaire.' },
      ],
    },
    {
      id: 5,
      title: 'Résultat 5',
      parcours: [
        { nom: 'Parcours M', commentaire: 'Pour ceux qui aiment les défis.' },
        { nom: 'Parcours N', commentaire: 'Parcours adapté aux entreprises.' },
        { nom: 'Parcours O', commentaire: 'Bon pour la gestion de projet.' },
      ],
    },
  ];

  return (
    <Layout>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Résultats de Recherche</h1>

      {/* Grille pour les 3 premiers résultats */}
      <div className="flex flex-wrap justify-center gap-8">
        {results.slice(0, 3).map((result) => (
          <div
            key={result.id}
            className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">{result.title}</h2>

            {/* Timeline */}
            <div className="relative">
              <div className="border-l-2 border-gray-300">
                {result.parcours.map((parcours, index) => (
                  <div key={index} className="mb-8 pl-4 relative">
                    {/* Cercle sur la ligne */}
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-1"></div>
                    {/* Contenu du parcours */}
                    <h3 className="text-lg font-semibold">{parcours.nom}</h3>
                    <p className="text-gray-700">{parcours.commentaire}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600">
              Voir plus
            </button>
          </div>
        ))}
      </div>

      {/* Grille pour les 2 derniers résultats, centrés */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {results.slice(3).map((result) => (
          <div
            key={result.id}
            className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">{result.title}</h2>

            {/* Timeline */}
            <div className="relative">
              <div className="border-l-2 border-gray-300">
                {result.parcours.map((parcours, index) => (
                  <div key={index} className="mb-8 pl-4 relative">
                    {/* Cercle sur la ligne */}
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-1"></div>
                    {/* Contenu du parcours */}
                    <h3 className="text-lg font-semibold">{parcours.nom}</h3>
                    <p className="text-gray-700">{parcours.commentaire}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600">
              Voir plus
            </button>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default SearchResults;
