import { useSelector } from "react-redux";

function Api() {
  const api = useSelector((state) => state.api);

  return (
    <div>
      <h2>Api</h2>
      <div className="flex flex-wrap">
        {api &&
          api.characters[0]?.map((el, i) => {
            return (
              <div key={i}>
                <img src={el.image} alt={el.name} />
                <p>{el.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Api;
