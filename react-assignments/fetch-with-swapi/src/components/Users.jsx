import { useState, useEffect } from "react";

import User from "./User";
import FetchedResults from "./FetchedResults";

export default function Users() {
  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [userUrl, setUserUrl] = useState();
  const [homeworldUrl, setHomeworldUrl] = useState();
  const [homeworld, setHomeworld] = useState();
  const [isFetchingHomeworld, setIsFetchingHomeworld] = useState();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((err) => {
        console.error("Get Users Error: ", err);
      });
  }, []);

  useEffect(() => {
    if (isFetchingHomeworld && userUrl) {
      fetch(userUrl)
        .then((res) => res.json())
        .then((data) => {
          setHomeworldUrl(data.result.properties.homeworld);
        });
    }
  }, [isFetchingHomeworld, userUrl]);

  useEffect(() => {
    if (homeworldUrl) {
      fetch(homeworldUrl)
        .then((res) => res.json())
        .then((data) => {
          setHomeworld(data.result.properties.name);
        });
    }
  }, [homeworldUrl]);

  return (
    <div className="users-container">
      <h2>Users</h2>
      {users && (
        <FetchedResults
          users={users}
          setCurrentUser={setCurrentUser}
          setUserUrl={setUserUrl}
          setHomeworldUrl={setHomeworldUrl}
          setHomeworld={setHomeworld}
          setIsFetchingHomeworld={setIsFetchingHomeworld}
        />
      )}
      {currentUser && (
        <User
          currentUser={currentUser}
          homeworldUrl={homeworldUrl}
          homeworld={homeworld}
          isFetchingHomeworld={isFetchingHomeworld}
          setIsFetchingHomeworld={setIsFetchingHomeworld}
        />
      )}
    </div>
  );
}
