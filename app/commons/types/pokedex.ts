export type TAbility = {
  abilities: Array<string>;
};

export type TSPrite = {
  sprites: Array<string>;
};

export type TItemPokemon = {
  id: number | string;
  name: string;
  imageUrl?: string;
};

export type TItemList = {
  item: TItemPokemon;
  navigation: any;
  isFavorite?: boolean;
};

export type TListPokemon = {
  navigation: () => void;
  data: Array<TItemPokemon>;
  fetchNextPage?: any;
  isFavorite?: boolean;
  isFetchingNextPage?: boolean;
};
