import ProfileDetails from "../components/account";
import SearchForm from "../components/search-form";
// import { useGlobalContext } from "../hook/global-context";

interface IType {}

const SearchBar: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > &
    IType
> = ({ children, ...props }) => {
  return (
    <>
      <SearchForm />
      <ProfileDetails />
    </>
  );
};
export default SearchBar;
