"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface ButtonPropos {
  anime_mal_id: string;
  user_email?: string | null;
  username: string | null;
  anime_title: string;
}

const CommentInput: React.FC<ButtonPropos> = ({
  anime_mal_id,
  username,
  user_email,
  anime_title,
}) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!user_email) {
      toast.error("Sign in you account");
      return;
    }

    const data = { anime_title, anime_mal_id, user_email, comment, username };

    try {
      const response = await fetch("/api/v1/comment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        toast.error("failed to add comment");
        return;
      }
      const commentResponse = await response.json();
      if (commentResponse.status == 201) {
        setIsCreated(commentResponse.isCreated);
        setComment("");
        router.refresh();
        toast.success("Comment successfully added", {
          duration: 3000,
          style: { backgroundColor: "purple", color: "white" },
        });
      } else {
        toast.error("failed to add comment");
      }
    } catch (error) {
      toast.error("An error occurred while adding the comment");
      console.error("Error:", error);
    }
  };

  return (
    <>
      {isCreated && <p>terkirim</p>}
      <div className="flex flex-col gap-3 w-1/2 sm:w-full">
        <textarea
          placeholder="review here"
          value={comment}
          onChange={handleInput}
          className="text-dark font-semibold rounded sm:h-32 p-2"
        />
        <button
          onClick={handlePosting}
          className=" bg-primary font-extrabold rounded sm:h-12 p-2 w-fit sm:text-xl"
        >
          comment
        </button>
      </div>
    </>
  );
};

export default CommentInput;
