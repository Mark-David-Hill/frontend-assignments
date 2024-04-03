import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FetchedResults from "./FetchedResults";
import User from "./User";

export default function Users() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((err) => {
        console.error("Get Users Error: ", err);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <div className="users-container">
      <h1>Star Wars</h1>
      {users ? (
        <FetchedResults
          isLoading={isLoading}
          users={users}
          setCurrentUser={setCurrentUser}
        />
      ) : (
        <FontAwesomeIcon icon="fa-circle-notch" spin size="xl" />
      )}
      <div className="user-container">
        {currentUser && (
          <div>
            <User
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              currentUser={currentUser}
            />
          </div>
        )}
      </div>
    </div>
  );
}
