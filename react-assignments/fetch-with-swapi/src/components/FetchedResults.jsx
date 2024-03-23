export default function FetchedResults(props) {
  return props.users.map((character, index) => {
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
  });
}
