export default function FetchedResults(props) {
  return (
    <div className="user-buttons-wrapper">
      {props.users.map((character, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              props.setCurrentUser(character.name);
              props.setUserUrl(character.url);
              props.setHomeworldUrl(null);
              props.setHomeworld(null);
              props.setIsFetchingHomeworld(false);
            }}
          >
            <h3>{character.name}</h3>
          </button>
        );
      })}
    </div>
  );
}
