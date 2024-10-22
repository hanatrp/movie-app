"use client";

import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }: { title: string }) => {

  const router = useRouter()
  const handleBack = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    router.back()
  }
  return (
    <div className="mb-6 text-light flex justify-between items-center">
      <button onClick={handleBack}>
        <ArrowCircleLeft size={32} />
      </button>
      <h1 className="md:text-2xl text-xl font-bold">{title}</h1>
    </div>
  );
};

export default Header;
