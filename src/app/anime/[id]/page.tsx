import { getAnimeResponse } from "@/libs/fetch-api";
import VideoPlayer from "@/components/Utilities/Vidio/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimemList/ButtonCollection";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import ButtonBack from "../_components/BackButton";
import CommentInput from "@/components/AnimemList/CommentInput";
import ListComments from "@/components/AnimemList/ListComments";

interface Anime {
  title: string;
  year: number;
  score: number;
  rating: string;
  genres: Genre[];
  images: { webp: { image_url: string } };
  synopsis: string;
  trailer: { youtube_id: string };
}

interface Genre {
  mal_id: number;
  name: string;
}

const AnimePage = async ({ params: { id } }: { params: { id: string } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const { title, year, rating, genres, images, synopsis, trailer, episodes } =
    anime.data;

  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email || "",
      anime_mal_id: id,
    },
  });

  return (
    <div className="px-4 md:px-7 pb-4 text-light">
      <h6 className="py-4 text-xl sm:text-3xl font-bold flex justify-between">
        {title}
        <ButtonBack />
      </h6>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 py-5 text-xs md:text-xl">
        <span>{year}</span>
        <span>{episodes} episodes</span>
        <span>{rating}</span>
        <span>
          genres :{" "}
          {genres.map(({ mal_id, name }: Genre, index: number) => (
            <span key={mal_id} className="font-extrabold">
              {name}
              {index < genres.length - 1 ? ", " : ""}
            </span>
          ))}
        </span>
      </div>

      <div className="flex sm:flex-nowrap flex-wrap gap-5 text-light">
        <Image
          src={images.webp.image_url}
          alt={title}
          width={250}
          height={250}
          className="w-full rounded object-cover pb-4 md:py-2"
        />
        <p className="text-justify text-sm md:text-xl">{synopsis}</p>
      </div>
      {!collection && user && (
        <CollectionButton
          user_email={user?.email}
          anime_mal_id={id}
          anime_image={images.webp.image_url}
          anime_title={title}
        />
      )}

      <div className="py-4">
        <ListComments anime_mal_id={id} />
        <CommentInput
          user_email={user?.email}
          anime_mal_id={id}
          username={user?.name || null}
          anime_title={title}
        />
      </div>
      <VideoPlayer youtubeId={trailer.youtube_id} />
    </div>
  );
};

export default AnimePage;
