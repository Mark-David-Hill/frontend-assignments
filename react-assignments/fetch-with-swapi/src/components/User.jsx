export default function User(props) {
  const {
    currentUser,
    userUrl,
    homeworld,
    setHomeworld,
    isFetchingHomeworld,
    setIsFetchingHomeworld,
  } = props;

  function fetchHomeworld() {
    setIsFetchingHomeworld(true);
    fetch(userUrl)
      .then((res) => res.json())
      .then((data) => {
        fetch(data.result.properties.homeworld)
          .then((res) => res.json())
          .then((data) => {
            setHomeworld(data.result.properties.name);
          });
      })
      .catch((err) => {
        console.error("Get User Error: ", err);
      });
  }

  return (
    <div>
      <h2>{currentUser}</h2>
      {homeworld ? (
        <h2>Homeworld: {homeworld}</h2>
      ) : isFetchingHomeworld ? (
        <h2>loading...</h2>
      ) : (
        currentUser && (
          <button onClick={() => fetchHomeworld()}>Show Home Planet</button>
        )
      )}
    </div>
  );
}
