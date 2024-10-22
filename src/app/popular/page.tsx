"use client";

import AnimeListPage from "@/components/AnimemList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/fetch-api";

interface Anime {
  mal_id: number;
  images: { webp: { image_url: string } };
  title: string;
}

interface TopAnimeResponse {
  data: Anime[];
  pagination: {
    last_visible_page: number;
  };
}

const PagePopuler: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [topAnime, setTopAnime] = useState<TopAnimeResponse>({
    data: [],
    pagination: { last_visible_page: 1 },
  });

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse("top/anime", `${page}`);
    setTopAnime(popularAnime);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <main className="px-4 md:px-7">
      <HeaderMenu title={`#${[page]} in TV Shows Today`} />
      <AnimeListPage api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination.last_visible_page}
        onPageChange={setPage}
      />
    </main>
  );
};

export default PagePopuler;
