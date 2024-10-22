"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef } from "react";

const InputSearch: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (
    event: FormEvent<HTMLButtonElement | HTMLInputElement>
  ) => {
    event.preventDefault();
    const keyword = searchRef.current?.value;

    if (!keyword || keyword.trim() == "") return;

    if (keyword) {
      router.push(`/search/${keyword}`);
    }
    if (searchRef.current) {
      searchRef.current.value = "";
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.type === "clik") {
        handleSearch(
          event as unknown as FormEvent<HTMLButtonElement | HTMLInputElement>
        );
      }
    };
    const searchInput = searchRef.current;
    if (searchInput) {
      searchInput.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (searchInput) {
        searchInput.removeEventListener("keydown", handleKeyDown);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <input
        ref={searchRef}
        placeholder=" search.."
        className="bg-light text-dark placeholder-dark focus:border-primaryDark focus:right-2 focus:ring-primaryDark shadow-md focus:outline-none transition duration-300 ease-in-out border border-primary rounded-full  hover:border-primaryDark pl-5 pr-10 p-2 sm:w-auto w-36 text-xs sm:text-xl"
      />
      <button onClick={handleSearch} className="absolute top-1 sm:top-2 end-2">
        <MagnifyingGlass size={25} />
      </button>
    </div>
  );
};

export default InputSearch;
