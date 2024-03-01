import Axios from "../../../commons/helpers/axios";

type TParamsGetList = {
  limit: number;
  offset: number;
};

export const getPokemonList = async (params: TParamsGetList) => {
  try {
    const response = await Axios.get("/api/v2/pokemon", {
      params,
    });
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
