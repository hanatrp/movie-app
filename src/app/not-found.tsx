"use client";
import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen text-light max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} />
        <h3>NOT FOUND</h3>
        <button
          onClick={() => router.back()}
          className="hover:text-primary font-bold transition-all underline underline-offset-2"
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default Page;
