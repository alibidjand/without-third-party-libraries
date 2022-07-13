import { useGlobalContext } from "../../hook/global-context";
import { setLocalStorage } from "../../utils/get-set-search-history-localhost";
import searchStyles from "./search-item.module.css";

interface ISearch {
  typeStyle?: "1" | "2";
}

const SearchForm: React.FC<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > &
    ISearch
> = ({ typeStyle, children, ...props }) => {
  const { setSearchedPerson, setShowProfile, setSaveSearch } =
    useGlobalContext();
  const submitHnadler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    let formData = new FormData(target);
    let value = "";
    formData.forEach((val, key) => {
      value = val.toString().trim();
    });
    setShowProfile(true);
    setSearchedPerson(value);
    let x = Math.floor(Math.random() * 10000000000 + 1);
    setLocalStorage(x.toString(), { searched: value, Date: new Date() });
  };
  return (
    <form
      onSubmit={submitHnadler}
      {...props}
      className={searchStyles.searchform}
    >
      <input
        type="text"
        name="text"
        className={searchStyles.searchinput}
        placeholder="Search here!"
      />
      <input
        type="submit"
        name="submit"
        className={searchStyles.submit}
        value="Search"
      />
    </form>
  );
};

export default SearchForm;
