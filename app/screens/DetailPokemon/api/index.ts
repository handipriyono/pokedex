import Axios from "@commons/helpers/axios";

type TDetailAPI = {
  id: string;
};

export const getDetailPokemon = async ({ id }: TDetailAPI) => {
  try {
    const response = await Axios.get(`/api/v2/pokemon/${id}`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
