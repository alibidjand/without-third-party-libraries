import Button from "../components/button/button";
import { initialPersonInfo } from "../dummy-data/initial-data";
import { useGlobalContext } from "../hook/global-context";

function Header() {
  const {
    pageName,
    setPageName,
    setShowProfile,
    setSearchedPerson,
    setPersonInfo,
  } = useGlobalContext();
  return (
    <header className="App-header">
      <Button
        onClick={() => {
          setPageName("search-bar");
        }}
        typeStyle={pageName === "search-bar" ? "1" : "2"}
      >
        Search Bar
      </Button>
      <Button
        onClick={() => {
          setShowProfile(false);
          setSearchedPerson("");
          setPersonInfo(initialPersonInfo);

          setPageName("search-history");
        }}
        typeStyle={pageName === "search-history" ? "1" : "2"}
      >
        Search History
      </Button>
    </header>
  );
}

export default Header;
