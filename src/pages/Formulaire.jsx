import React, { useState } from 'react';
import Layout from "../layouts/index";
import { Link } from 'react-router-dom';


const FormPage = () => {
  const [step, setStep] = useState(1); // État pour gérer l'étape actuelle
  const [formData, setFormData] = useState({
    etablissement: '',
    filiere: '',
    autre: '',
  });

  // Fonction pour gérer les changements des selects
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fonction pour avancer à l'étape suivante
  const nextStep = () => {
    setStep(step + 1);
  };

  // Fonction pour revenir à l'étape précédente
  const prevStep = () => {
    setStep(step - 1);
  };

  // Rendu des étapes
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Étape 1: Choisir l'Établissement</h2>
            <select
              name="etablissement"
              value={formData.etablissement}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Sélectionner un établissement</option>
              <option value="etablissement1">Établissement 1</option>
              <option value="etablissement2">Établissement 2</option>
              <option value="etablissement3">Établissement 3</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Étape 2: Choisir la Filière</h2>
            <select
              name="filiere"
              value={formData.filiere}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Sélectionner une filière</option>
              <option value="filiere1">Filière 1</option>
              <option value="filiere2">Filière 2</option>
              <option value="filiere3">Filière 3</option>
            </select>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Étape 3: Autre Information</h2>
            <select
              name="autre"
              value={formData.autre}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Sélectionner une option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        {renderStep()}

        <div className="flex justify-between mt-8">
          {/* Bouton Précédent */}
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Précédent
            </button>
          )}

          {/* Bouton Suivant */}
          {step < 3 && (
            <button
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ml-auto"
            >
              Suivant
            </button>
          )}

          {/* Bouton Soumettre */}
          {step === 3 && (
            <Link
              to="/SearchResults"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ml-auto"
            >
              Soumettre
            </Link>
          )}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default FormPage;
