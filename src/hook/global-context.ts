import { createContext, useContext } from "react";
import { PersonInfo, PersonRepos } from "../types/person";
export type GlobalContent = {
  pageName: string;
  setPageName: (c: string) => void;
  searchedPerson: string;
  setSearchedPerson: (c: string) => void;
  personInfo: PersonInfo;
  setPersonInfo: (c: PersonInfo) => void;
  showProfile: boolean;
  setShowProfile: (c: boolean) => void;
  personRepos: PersonRepos[];
  setPersonRepos: (c: PersonRepos[]) => void;
  // saveSearch: {};
  setSaveSearch: (c: {}) => void;
  loadSearchs: {};
};
export const MyGlobalContext = createContext<GlobalContent>({
  pageName: "",
  setPageName: () => {},
  searchedPerson: "",
  setSearchedPerson: () => {},
  personInfo: {} as PersonInfo,
  setPersonInfo: () => {},
  showProfile: true,
  setShowProfile: () => {},
  personRepos: [] as PersonRepos[],
  setPersonRepos: () => {},
  // saveSearch: {},
  setSaveSearch: (e) => {},
  loadSearchs: {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
