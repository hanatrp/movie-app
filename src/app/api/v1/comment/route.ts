import prisma from "@/libs/prisma";

export async function POST(req: Request, res: Response) {
  const { anime_mal_id, user_email, comment, username, anime_title } =
    await req.json();

  const data: {
    anime_mal_id: string;
    user_email: string;
    comment: string;
    username: string;
    anime_title : string
  } = { anime_mal_id, user_email, comment, username, anime_title };

  const createComment = await prisma.comment.create({ data });

  if (!createComment) {
    return new Response(JSON.stringify({ status: 400, isCreated: false }), {
      status: 400,
    });
  } else {
    return new Response(JSON.stringify({ status: 201, isCreated: true }), {
      status: 201,
    });
  }
}
