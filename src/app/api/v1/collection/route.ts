import prisma from "@/libs/prisma";

export async function POST(req: Request, res: Response) {
  const { anime_mal_id, user_email, anime_image, anime_title } =
    await req.json();

  const data: {
    anime_mal_id: string;
    user_email: string;
    anime_image: string;
    anime_title: string;
  } = { anime_mal_id, user_email, anime_image, anime_title };

  const createCollection = await prisma.collection.create({ data });

  if (!createCollection) {
    return new Response(JSON.stringify({ status: 400, isCreated: false }), {
      status: 400,
    });
  } else {
    return new Response(JSON.stringify({ status: 201, isCreated: true }), {
      status: 201,
    });
  }
}
