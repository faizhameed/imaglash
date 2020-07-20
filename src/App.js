import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    //fetch the data
    fetch(
      "https://api.unsplash.com/photos/?client_id=C6bzEnmvODyk9wJ3ig0V4E7p9pwGVkZNejOftxLLdVI"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCollection(() => {
          return data;
        });
      });
  }, []);
  return (
    <div className="App">
      <div className="image-container">
        {collection.length !== 0
          ? collection.map((item) => (
              <div className="image-element" key={item.id}>
                <img src={item.urls.thumb} alt={item.alt_description} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
