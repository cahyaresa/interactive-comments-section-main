import data from "../../data/data.json";

function Card() {
  console.log(data);

  return (
    <>
      <div className="bg-white">{data.comments}</div>
    </>
  );
}

export default Card;
