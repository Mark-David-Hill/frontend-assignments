import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import User from "./User";
import FetchedResults from "./FetchedResults";

export default function Users() {
  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [userUrl, setUserUrl] = useState();
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

  return (
    <div className="users-container">
      <h1>Star Wars</h1>
      {users ? (
        <FetchedResults
          users={users}
          userUrl={userUrl}
          setUserUrl={setUserUrl}
          setCurrentUser={setCurrentUser}
          setHomeworld={setHomeworld}
          setIsFetchingHomeworld={setIsFetchingHomeworld}
        />
      ) : (
        <FontAwesomeIcon icon="fa-circle-notch" spin size="xl" />
      )}
      <div className="user-container">
        {currentUser && (
          <User
            userUrl={userUrl}
            currentUser={currentUser}
            homeworld={homeworld}
            setHomeworld={setHomeworld}
            isFetchingHomeworld={isFetchingHomeworld}
            setIsFetchingHomeworld={setIsFetchingHomeworld}
          />
        )}
      </div>
    </div>
  );
}
