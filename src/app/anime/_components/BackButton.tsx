"use client"

import {  ArrowCircleRight } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";



const ButtonBack = ()=> {

  const router = useRouter()
  const handleBack = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    router.back()
  }
  return (
    <div className="mb-6 text-light flex justify-between items-center">
      <button onClick={handleBack}>
        <ArrowCircleRight size={32} />
      </button>
    </div>
  );
};

export default ButtonBack;
