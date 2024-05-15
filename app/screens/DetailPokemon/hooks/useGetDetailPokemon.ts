import { getDetailPokemon } from "../api";
import { useQuery } from "@tanstack/react-query";

const queryKey = "get-detail-pokemon";

type TParamsDetailPokemon = {
  id: string;
};

const useGetDetailPokemon = ({ id }: TParamsDetailPokemon) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey, id],
    queryFn: () => getDetailPokemon({ id }),
  });

  const getSpritesValues = () => {
    try {
      return Object?.values(data?.sprites)
        ?.filter((x) => x)
        ?.filter((x) => typeof x === "string");
    } catch (error) {
      return [];
    }
  };

  const getAbilities = () => {
    try {
      return data?.abilities?.map((x: any) => x?.ability?.name);
    } catch (error) {
      return [];
    }
  };

  return {
    data,
    isLoading,
    isError,
    getSpritesValues,
    getAbilities,
    name: data?.name,
  };
};

export default useGetDetailPokemon;
