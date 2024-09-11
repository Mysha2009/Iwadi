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

  const onSubmit = async () => {
    event.preventDefault();
    try {
      let res = await fetch("http://vps-b9daf47b.vps.ovh.ca:5000/parcours", {
        method: "POST",
        body: JSON.stringify({
          niveau_etude: "Licence",
          specialite: "Statistique",
          matieres: "",
          passions: "",
          metier: "Data Scientist",
        }),
      });
      const resJson = await res.json();
      if (res.status === 200) {
        console.log(resJson);
        
        alert(JSON.stringify(values, null, 2));
      } else {
        alert("Erreur");
      }
    } catch (error) {
      alert(error);
    }
    
    /*try {
        const url: string = `http://localhost:8000/api/posts/${postID}`;
        await sendRequest(url, 'DELETE');
        closeModal(event);
        navigate(`/`);
        } catch (err: any) {}*/
 }

  // Rendu des étapes
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Étape 1: Niveau d'étude</h2>
            <select
              name="etablissement"
              value={formData.etablissement}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Sélectionner votre Niveau d'étude</option>
              <option value="etablissement1">BAC</option>
              <option value="etablissement2">Licence</option>
              <option value="etablissement3">Master</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Étape 2: Spécialité</h2>
            <select
              name="filiere"
              value={formData.filiere}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Sélectionner une Spécialité</option>
              <option value="filiere1">Agronome</option>
              <option value="filiere2">Statistique</option>
              <option value="filiere3">Electricien</option>
            </select>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Étape 3: Métier</h2>
            <select
              name="autre"
              value={formData.autre}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Sélectionner un Métier</option>
              <option value="option3">Data Scientiste</option>
              <option value="option1">Statistique</option>
              <option value="option2">Informatique</option>
              <option value="option3">Agriculture</option>
              <option value="option3">Data Analyst</option>
              <option value="option3">Developpeur Web</option>
              
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
