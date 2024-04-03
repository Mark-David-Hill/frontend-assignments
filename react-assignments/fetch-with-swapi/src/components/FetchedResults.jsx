export default function FetchedResults(props) {
  const { isLoading, users, setCurrentUser } = props;

  return (
    <div className="user-buttons-wrapper">
      {users.map((character, index) => {
        return (
          <button
            key={index}
            disabled={isLoading}
            onClick={() => {
              setCurrentUser(character);
            }}
          >
            <h3>{character.name}</h3>
          </button>
        );
      })}
    </div>
  );
}
