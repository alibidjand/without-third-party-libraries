import { useMemo } from "react";
import { useGlobalContext } from "../hook/global-context";
import SearchBar from "./search-bar";
import SearchHistory from "./search-history";

function Body() {
  const { pageName, setPageName, setShowProfile } = useGlobalContext();

  const thePage = useMemo(
    () => (pageName: string) => {
      if (pageName === "search-bar") {
        return <SearchBar />;
      }
      if (pageName === "search-history") {
        return <SearchHistory />;
      }
    },
    [pageName]
  );

  return <>{thePage(pageName)}</>;
}

export default Body;
