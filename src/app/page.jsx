"use client";

import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Aviation Civile de Côte d'Ivoire
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl text-center sm:text-left">
          Découvrez le secteur aérien ivoirien, ses infrastructures modernes et son rôle stratégique dans le développement économique de l'Afrique de l'Ouest.
        </p>

        <div className="flex gap-4 mt-8">
          <button onClick={()=>{
            toast.success('Bienvenue sur le portail de l\'Aviation Civile de Côte d\'Ivoire')
          }} className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            Découvrir nos services
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
            Contactez-nous
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-orange-600">Nos Aéroports</h3>
            <p className="text-gray-600">L'aéroport international Félix Houphouët-Boigny d'Abidjan est le plus grand hub aérien d'Afrique de l'Ouest avec des connexions vers plus de 40 destinations internationales.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-orange-600">Compagnies Aériennes</h3>
            <p className="text-gray-600">Air Côte d'Ivoire, notre compagnie nationale, dessert de nombreuses destinations africaines et internationales avec une flotte moderne et des standards de sécurité élevés.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-orange-600">Réglementation et Sécurité</h3>
            <p className="text-gray-600">L'ANAC (Agence Nationale de l'Aviation Civile) assure la régulation, la supervision et le contrôle de toutes les activités aéronautiques civiles en Côte d'Ivoire.</p>
          </div>
        </div>

        <div className="w-full max-w-4xl mt-16 p-8 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg border border-orange-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Chiffres Clés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-bold text-orange-600">40+</p>
              <p className="text-gray-600">Destinations internationales</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600">3M+</p>
              <p className="text-gray-600">Passagers par an</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600">15+</p>
              <p className="text-gray-600">Compagnies aériennes opérant en Côte d'Ivoire</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600">1er</p>
              <p className="text-gray-600">Hub aérien d'Afrique de l'Ouest</p>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
