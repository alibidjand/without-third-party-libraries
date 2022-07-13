import { useEffect, useMemo, useState } from "react";
import { client } from "../../api/client";
import { initialPersonInfo } from "../../dummy-data/initial-data";
import { useGlobalContext } from "../../hook/global-context";
import profileStyles from "./index.module.css";

interface IAccount {}

const ProfileDetails: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > &
    IAccount
> = ({ children, ...props }) => {
  const {
    searchedPerson,
    personInfo,
    setPersonInfo,
    showProfile,
    setSearchedPerson,
    setShowProfile,
    personRepos,
    setPersonRepos,
  } = useGlobalContext();
  const [profile, setProfile] = useState(<></>);
  const [ERROR, setERROR] = useState("");
  const fetchPersonInfo = useMemo(
    () => async () => {
      const response = await client
        .get(`https://api.github.com/users/${searchedPerson}`)
        .then((res) => {
          setPersonInfo(res);
        })
        .catch((err) => {
          if (err.message === "Not Found") {
            console.log(err.message);
            setERROR("There is no user with this name");
            setPersonInfo(initialPersonInfo);
          }
        });
      return response;
    },
    [searchedPerson]
  );
  const fetchPersonRepos = useMemo(
    () => async (personUserName?: string) => {
      const response = await client
        .get(`https://api.github.com/users/${personUserName}/repos`)
        .then((res) => {
          setPersonRepos(res);
        })
        .catch((err) => {
          console.log(err.message);
          setPersonInfo(initialPersonInfo);
        });
      return response;
    },
    [searchedPerson]
  );
  useEffect(() => {
    if (showProfile !== true) {
      setProfile(<></>);
      setShowProfile(true);
    }
  }, [showProfile]);

  useEffect(() => {
    if (searchedPerson !== "") {
      if (showProfile === true) {
        console.log("came");
        fetchPersonInfo();
        fetchPersonRepos(searchedPerson);
      }
    }
  }, [searchedPerson]);

  useEffect(() => {
    if (personInfo && personInfo.login !== "") {
      setShowProfile(true);
      const profileUi = (
        <div className={profileStyles.profilebody}>
          <div className={profileStyles["card-container"]}>
            <span className={profileStyles.pro}>PRO</span>
            <img
              className={profileStyles.round}
              src={personInfo.avatar_url!}
              alt="user"
            />
            <h3>{personInfo.name}</h3>
            <h6>{personInfo.location ? personInfo.location : "No Location"}</h6>
            <h6>{personInfo.email ? personInfo.email : "No Public Email"}</h6>
            <p>{personInfo.bio ? personInfo.bio : "No Bio"}</p>
            <div className={profileStyles.buttons}></div>
            <div className={profileStyles.skills}>
              <h6>Repos</h6>
              <ul>
                {personRepos.length > 0
                  ? personRepos.map((repo) => (
                      <li>
                        <a href={repo.html_url}>{repo.name} </a>
                      </li>
                    ))
                  : "There is no repos"}
              </ul>
            </div>
          </div>
        </div>
      );
      setProfile(profileUi);
    }
    if (personInfo.login === "" && ERROR !== "") {
      setShowProfile(true);
      const profileUi = (
        <div className={profileStyles.profilebody}>
          <div className={profileStyles["card-container"]}>
            <div className={profileStyles.error}>
              <h3>{ERROR}</h3>
              <div className={profileStyles.buttons}></div>
            </div>
          </div>
        </div>
      );
      setProfile(profileUi);
    }
  }, [ERROR, personInfo, personRepos]);

  return <>{profile}</>;
};

export default ProfileDetails;
