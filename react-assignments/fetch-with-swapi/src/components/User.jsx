import { useEffect, useState } from "react";

export default function User(props) {
  const { isLoading, setIsLoading, currentUser } = props;

  const [homeworld, setHomeworld] = useState(null);

  useEffect(() => {
    setHomeworld(null);
  }, [currentUser]);

  function fetchHomeworld() {
    setIsLoading(true);
    fetch(currentUser.url)
      .then((res) => res.json())
      .then((data) => {
        fetch(data.result.properties.homeworld)
          .then((res) => res.json())
          .then((data) => {
            setHomeworld(data.result.properties.name);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.error("Get User Error: ", err);
      });
  }

  return (
    <div>
      <h2>{currentUser.name}</h2>
      {homeworld ? (
        <h2>Homeworld: {homeworld}</h2>
      ) : isLoading ? (
        <h2>loading...</h2>
      ) : (
        currentUser.name && (
          <button disabled={isLoading} onClick={() => fetchHomeworld()}>
            Show Home Planet
          </button>
        )
      )}
    </div>
  );
}
