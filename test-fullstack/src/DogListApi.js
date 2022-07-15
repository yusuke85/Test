import React, { useEffect, useState, useMemo } from "react";

function DogListApi () {

  const [dogBreed, setDogBreed] = useState([]);
  const url = `https://dog.ceo/api/breeds/list/all`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const dogKinds = Object.keys (data.message);
        setDogBreed(dogKinds);
        console.log(url)
        
      });
  }, [url]);

  const NUMBER_LIST_TO_RENDER = 1;
  const listToRender = useMemo(() => {
    return dogBreed.slice(0, NUMBER_LIST_TO_RENDER);
  }, [dogBreed]);

  return (
    
      <h3>
        {listToRender.map((breed) => (
          <h3>{breed}</h3>
        ))}
      </h3>
      
  );

}

export default DogListApi