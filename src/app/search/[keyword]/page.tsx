import { getAnimeResponse } from "@/libs/fetch-api";
import AnimeListPage from "@/components/AnimemList";
import Header from "@/components/AnimemList/Header";

const SearchPage = async ({ params }: { params: { keyword: string } }) => {
  let { keyword } = params;

  try {
    keyword = decodeURIComponent(keyword);
  } catch (error) {
    console.error("error decoding keyword: ", error);
  }

  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <main className="px-4 md:px-7">
      <section>
        <Header title={`More to explore: ${decodeKeyword}`} />
        <AnimeListPage api={searchAnime} />
      </section>
    </main>
  );
};
export default SearchPage;
