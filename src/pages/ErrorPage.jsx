import React from "react";
import FuzzyText from "../components/child/FuzzyText";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

export function ErrorPage() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8 gap-4">
      <FuzzyText 
        baseIntensity={0.1} 
        hoverIntensity={0.5} 
        enableHover={true}
        fontSize="clamp(3rem, 12vw, 10rem)"
        color="black"
      >
        404
      </FuzzyText>
      
      <FuzzyText 
        baseIntensity={0.1} 
        hoverIntensity={0.5} 
        enableHover={true}
        fontSize="clamp(1.5rem, 6vw, 4rem)"
        color="blacl"
      >
        NOT FOUND
      </FuzzyText>
     <button
      className="px-6 py-2 mt-10 bg-black text-white hover:bg-gray-600 transition-colors hover:cursor-pointer rounded-4xl flex items-center gap-2"
      onClick={() => navigate(-1)}
    >
      <FiArrowLeft size={20} />
      Go Back
    </button>
    </div>
  );
}
