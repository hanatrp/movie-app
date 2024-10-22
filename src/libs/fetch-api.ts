export const getAnimeResponse = async (resource: string, query?: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

export const getNestedAnimeResponse = async (resorce: string ,objectProperty: string) => {
  const response = await getAnimeResponse(resorce);
  return response.data.flatMap(
    (item: { [x: string]: any }) => item[objectProperty]
  );
};

export const reproduce = (data: string, gap: number) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const res = {
    data: data.slice(first, last),
  };

  return res;
};
