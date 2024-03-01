import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api";
import { useCallback, useMemo } from "react";
import { storage } from "../../../commons/helpers/mkkv";
const queryKey = "get-list-pokemon";

type TGetPokemonParams = {
  search: string;
  debouncedSearch: string;
};

const useGetPokemonList = ({ search, debouncedSearch }: TGetPokemonParams) => {
  const {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    data,
  } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({ pageParam }) => {
      return getPokemonList(pageParam);
    },
    initialPageParam: { limit: 10, offset: 0 },
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      if (allPages?.[0]?.next) {
        return {
          ...lastPageParam,
          offset: lastPageParam.offset + 10,
        };
      } else {
        return undefined;
      }
    },
  });

  const getId = (url: string) => {
    const parts = url.split("/");
    const pokemonNumber = parts?.[parts?.length - 2];
    return pokemonNumber;
  };

  const flatResult = () => {
    const dataCore = data?.pages?.flatMap((x) => x?.results);
    const modifiedResults = data?.pages
      ?.flatMap((x) => x?.results)
      .map((pokemon) => {
        return { ...pokemon, id: getId(pokemon.url) };
      });
    return modifiedResults;
  };

  const dataResult = useMemo(() => {
    return debouncedSearch
      ? flatResult()?.filter((x) =>
          x.name.includes(String(debouncedSearch).toLowerCase())
        )
      : flatResult();
  }, [data?.pages, debouncedSearch]);

  return {
    data: dataResult || [],
    fetchNextPage,
  };
};

export default useGetPokemonList;
