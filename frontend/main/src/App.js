import { Memo } from "./component/memo";

function App() {
  return (
    <div className="App">
      {descriptions.map(
        (description,index) => <Memo id={index} description={description}/>
      )}
    </div>
  );
}

const descriptions = [
  "빨래하기",
  "청소하기",
  "설거지하기",
  "코테 준비하기",
  "돈모으기"
]

export default App;
