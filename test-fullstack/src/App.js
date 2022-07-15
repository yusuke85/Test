import DogImagesApi from "../src/DogImagesApi"
import DogListApi from "../src/DogListApi"
// import Button from "./Button";


function App() {
  
  return (
    <>
    <div className="General">
      <DogListApi />
    </div>
      <div className="segunda_columna" id="image">
       <DogImagesApi />
      </div>
    </>
  );
}

export default App;
