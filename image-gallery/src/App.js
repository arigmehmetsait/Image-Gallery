import React, { useState } from "react";
import { Card, CardGroup, CardImg } from "reactstrap";

const Images = [
  "https://www.karabayyazilim.com/uploads/blogs/reactjs-nedir-2019-06-24-091546/reactjs-nedir-2019-06-24-091546-0.jpg",
  "https://www.alastyr.com/blog/wp-content/uploads/2021/09/react-nedir.png",
  "https://miro.medium.com/v2/resize:fit:700/1*A4mbu0irVWuSRICaKj8FFw.png",
];

const App = () => {
  const [selectedImg, setSelecetedImg] = useState([Images[0]]);
  return (
    <div>
      <div className="container">
        <CardImg src={selectedImg} alt="selectedImg"></CardImg>
      </div>
      <CardGroup>
        {Images.map((img, index) => (
          <Card>
            <CardImg
              src={img}
              alt="Card image"
              top
              width="100%"
              onClick={() => setSelecetedImg(img)}
            ></CardImg>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default App;
