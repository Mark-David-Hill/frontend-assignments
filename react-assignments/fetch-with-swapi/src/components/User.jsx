export default function User(props) {
  return (
    <div className="user-container">
      <h2>{props.currentUser}</h2>
      {props.homeworld ? (
        <h3>Homeworld: {props.homeworld}</h3>
      ) : props.isFetchingHomeworld ? (
        <h3>Loading...</h3>
      ) : (
        props.currentUser && (
          <button onClick={() => props.setIsFetchingHomeworld(true)}>
            Show Home Planet
          </button>
        )
      )}
    </div>
  );
}
