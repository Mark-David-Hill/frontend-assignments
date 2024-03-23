import { useState, useEffect } from "react";

function Users() {
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
    fetch(homeworldUrl)
      .then((res) => res.json())
      .then((data) => {
        setHomeworld(data.result.properties.name);
      });
  }, [homeworldUrl]);

  return (
    <div className="users-container">
      <h2>Users</h2>
      {users &&
        users.map((character, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setCurrentUser(character.name);
                setUserUrl(character.url);
                setHomeworldUrl(null);
                setHomeworld(null);
                setIsFetchingHomeworld(false);
              }}
            >
              <h3>{character.name}</h3>
            </button>
          );
        })}
      <div className="user-container">
        <h2>{currentUser}</h2>
        {homeworld ? (
          <h3>Homeworld: {homeworld}</h3>
        ) : isFetchingHomeworld ? (
          <h3>Loading...</h3>
        ) : (
          currentUser && (
            <button onClick={() => setIsFetchingHomeworld(true)}>
              Show Home Planet
            </button>
          )
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
