import { useGlobalContext } from "../hook/global-context";
import profileStyles from "../components/account/index.module.css";
import { useState } from "react";

interface IType {}

const SearchHistory: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > &
    IType
> = ({ children, ...props }) => {
  const [loadSearchs] = useState({ ...localStorage });
  const { pageName, personInfo, personRepos } = useGlobalContext();
  return (
    <div className={profileStyles.profilebody}>
      <div className={profileStyles["card-container"]}>
        <div className={profileStyles.skills}>
          <ul>
            {/* {personRepos.length > 0
              ? personRepos.map((repo) => (
                  <li>
                    <a href={repo.html_url}>{repo.name} </a>
                  </li>
                ))
              : "There is no repos"} */}
            {/* {loadSearchs.getItems().map((item) => item)} */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SearchHistory;
