import Header from "@/components/Dashboard/header";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import Link from "next/link";

const PageReview = async () => {
  const user = await authUserSession();
  if (!user?.email) {
    return (
      <section className="text-light px-4 md:px-7 py-4">
        <Header title="My Review" />
        <p>No riview found. </p>
      </section>
    );
  }
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  if (!comments || comments.length === 0) {
    return (
      <section className="text-light px-4 md:px-7 py-6">
        <Header title="My Review" />
        <p>Your review is empty.</p>
      </section>
    );
  }
  return (
    <div className="text-light px-4 md:px-7 py-4 ">
      <Header title={"My Review"} />
      <div className="flex flex-col-reverse gap-3">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-light text-dark p-2 font-mono font-semibold"
            >
              <h6 className="pb-2">title movie: {comment.anime_title} </h6>
              <p>review: {comment.comment} </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PageReview;
