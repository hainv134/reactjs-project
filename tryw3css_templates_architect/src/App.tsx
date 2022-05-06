import React from "react";
import HouseTemplate from "./components/Content";
import Heading from "./components/Heading";
import Slider from "./components/Slider";

const App: React.FC = () => {
  return (
    <div>
      <Heading title="BR Architects" nav={["Projects", "About", "Contacts"]} />
      <Slider desc="BR Architects" img="" />
      <HouseTemplate
        houses={[
          {
            img: "https://www.w3schools.com/w3images/house5.jpg",
            name: "Summer House",
          },
          {
            img: "https://www.w3schools.com/w3images/house5.jpg",
            name: "Summer House",
          },
          {
            img: "https://www.w3schools.com/w3images/house5.jpg",
            name: "Summer House",
          },
          {
            img: "https://www.w3schools.com/w3images/house5.jpg",
            name: "Summer House",
          },
          {
            img: "https://www.w3schools.com/w3images/house5.jpg",
            name: "Summer House",
          },
          {
            img: "https://www.w3schools.com/w3images/house5.jpg",
            name: "Summer House",
          },
          {
            img: "https://www.w3schools.com/w3images/house5.jpg",
            name: "Summer House",
          },
        ]}
      />
    </div>
  );
};

export default App;
