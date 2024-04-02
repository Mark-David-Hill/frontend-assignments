export default function FetchedResults(props) {
  const {
    users,
    setCurrentUser,
    setUserUrl,
    setHomeworld,
    setIsFetchingHomeworld,
  } = props;

  return (
    <div className="user-buttons-wrapper">
      {users.map((character, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentUser(character.name);
              setUserUrl(character.url);
              setHomeworld(null);
              setIsFetchingHomeworld(false);
            }}
          >
            <h3>{character.name}</h3>
          </button>
        );
      })}
    </div>
  );
}
