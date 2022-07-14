import { useMemo } from "react";
import { useGlobalContext } from "../../hook/global-context";
import SearchBar from "../../pages/search-bar";
import SearchHistory from "../../pages/search-history";

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
