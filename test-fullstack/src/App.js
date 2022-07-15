import DogImagesApi from "../src/DogImagesApi"
import DogListApi from "../src/DogListApi"
import Button from "./Button";


function App() {
  
  return (
    <div className="General">
      <DogListApi />
      <div className="segunda_columna" id="image">
        <Button />
    </div>
      </div>
  );
}

export default App;
