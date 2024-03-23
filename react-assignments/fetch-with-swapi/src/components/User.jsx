export default function User(props) {
  return (
    <div>
      <h2>{props.currentUser}</h2>
      {props.homeworld ? (
        <h2>Homeworld: {props.homeworld}</h2>
      ) : props.isFetchingHomeworld ? (
        <h2>loading...</h2>
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
