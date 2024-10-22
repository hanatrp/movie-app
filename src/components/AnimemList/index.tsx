import Image from "next/image";
import Link from "next/link";

interface Anime {
  mal_id: number;
  images: { webp: { image_url: string } };
  title: string;
}

interface AnimeListPageProps {
  api: { data: Anime[] };
}

const AnimeListPage: React.FC<AnimeListPageProps> = ({ api }) => {
  return (
    <div className="grid xl:grid-cols-4 xl:gap-9 md:grid-cols-3 gap-7 grid-cols-2">
      {api.data?.map((anime) => {
        return (
          <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} passHref>
            <div className="cursor-pointer text-light hover:text-primary transition-all">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={350}
                height={350}
                className="rounded-xl w-full max-h-64 object-cover"
              />
              <h3 className="font-bold py-4 md:text-xl text-sm">
                {anime.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeListPage;
