"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface ButtonProps {
  anime_mal_id: string;
  user_email?: string | null;
  anime_image?: string | null;
  anime_title?: string | null;
}

const CollectionButton: React.FC<ButtonProps> = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleButtonCollection = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (!user_email) {
      toast.error("User email is missing");
      return;
    }

    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.status == 201) {
      setIsCreated(collection.isCreated);
      toast.success("Success Add to Collection", {
        duration: 3000,
        style: { backgroundColor: "purple", color: "white" },
      });
    }
  };

  return (
    <div className="my-10">
      {!isCreated && (
        <button
          onClick={handleButtonCollection}
          className="p-2 font-extrabold sm:text-xl rounded-lg border-2 bg-light text-primary border-primary w-auto"
        >
          Add to My Collection
        </button>
      )}
    </div>
  );
};

export default CollectionButton;
