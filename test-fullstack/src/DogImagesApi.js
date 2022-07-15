import React, { useState, useEffect, useMemo } from "react";

function DogImagesApi() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/appenzeller/images`)
      .then((res) => res.json())
      .then((data) => {
        Object.keys(data.message);
        setImage(data.message);
        console.log("Dog photos:", data);
      });
  }, []);
  const NUMBER_IMAGES_TO_RENDER = 3;
  const imagesToRender = useMemo(() => {
    return image.slice(0, NUMBER_IMAGES_TO_RENDER);
  }, [image]);

  return (
    <div>
      {imagesToRender.map((imagesToRender) => (
        <>
         
          <img
            src={imagesToRender}
            alt="dog"
            width="200"
            height="200"
            class="img-click"
          />
        </>
      ))}
    </div>
  );
}

export default DogImagesApi;
