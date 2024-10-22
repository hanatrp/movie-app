import AnimeListPage from "@/components/AnimemList";
import Header from "@/components/AnimemList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/fetch-api";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let RecommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry" );
  RecommendedAnime = reproduce(RecommendedAnime, 8)
  return (
    <main className="px-4 md:px-7">
      <section>
        <Header title="Most Popular" linkHref="/popular" linkTitle="see all" />
        <AnimeListPage api={topAnime} />
      </section>
      <section>
        <Header title="Recommendations for you" />
        <AnimeListPage api={RecommendedAnime} />
      </section>
    </main>
  );
};
export default Home;
