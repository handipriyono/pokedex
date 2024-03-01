import { useEffect, useState } from "react";
import useDebounceValue from "../../../commons/hooks/useDebounce";
import { storage } from "../../../commons/helpers/mkkv";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounceValue(search, 600);

  useEffect(() => {
    storage.set("search", debouncedSearch);
  }, [debouncedSearch]);

  const onSearch = (e: string) => {
    setSearch(e);
  };

  return { search, onSearch, debouncedSearch };
};

export default useSearch;
