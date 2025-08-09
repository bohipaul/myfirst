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
          Bienvenue sur Mon Site
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl text-center sm:text-left">
          Découvrez notre plateforme innovante qui vous accompagne dans tous vos projets.
        </p>

        <div className="flex gap-4 mt-8">
          <button onClick={()=>{
            toast.success('Bienvenue sur Mon Site')
          }} className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
            En savoir plus
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Fonctionnalité 1</h3>
            <p className="text-gray-600">Description détaillée de la première fonctionnalité principale.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Fonctionnalité 2</h3>
            <p className="text-gray-600">Description détaillée de la deuxième fonctionnalité principale.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Fonctionnalité 3</h3>
            <p className="text-gray-600">Description détaillée de la troisième fonctionnalité principale.</p>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
