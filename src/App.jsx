import "./App.css";
import data from "./data/data.json";
import Card from "./component/comment/Card";

function App() {
  return (
    <>
      <Card comments={data.comments} />
    </>
  );
}

export default App;
