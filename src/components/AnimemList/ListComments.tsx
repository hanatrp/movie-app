import prisma from "@/libs/prisma";

const ListComments = async ({ anime_mal_id }: { anime_mal_id: string }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
  return (
    <div>
      <h3 className="text-primary font-bold font-serif sm:text-3xl text-xl p-2 sm:p-4">
        Review Anime
      </h3>
      <div className="grid  grid-cols-3 gap-2 pb-4 rounded">
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="text-dark font-mono bg-light p-1 rounded">
              <h6 className="text-sm sm:text-2xl pb-2 font-bold">
                {comment.username}
              </h6>
              <p className="sm:text-xl text-xs">{comment.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListComments;
