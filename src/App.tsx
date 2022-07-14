import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layouts/header";
import { MyGlobalContext } from "./hook/global-context";
import { PersonInfo } from "./types/person";
import { initialPersonInfo } from "./dummy-data/initial-data";
import {
  getLocalStorage,
  setLocalStorage,
} from "./utils/get-set-search-history-localhost";
import Body from "./components/layouts/body";

function App() {
  const [pageName, setPageName] = useState("search-bar");
  const [searchedPerson, setSearchedPerson] = useState("");
  const [personInfo, setPersonInfo] = useState<PersonInfo>(initialPersonInfo);
  const [showProfile, setShowProfile] = useState(true);
  const [personRepos, setPersonRepos] = useState([]);
  const [saveSearch, setSaveSearch] = useState();
  const [loadSearchs] = useState({ ...localStorage });
  // const [userSearches, setUserSearches] = useState(() =>
  //   getLocalStorage("searches", {})
  // );

  // useEffect(() => {
  //   setLocalStorage("searches", userSearches);
  // }, [loadSearchs]);

  return (
    <div className="App">
      <MyGlobalContext.Provider
        value={{
          pageName,
          setPageName,
          searchedPerson,
          setSearchedPerson,
          personInfo,
          setPersonInfo,
          showProfile,
          setShowProfile,
          personRepos,
          setPersonRepos,
          setSaveSearch,
          loadSearchs,
        }}
      >
        <Header />
        <Body />
      </MyGlobalContext.Provider>
    </div>
  );
}

export default App;
