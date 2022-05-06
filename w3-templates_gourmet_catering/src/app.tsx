import React from "react";
import Content from "./components/Content/content";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Slider from "./components/Slider";
const App: React.FC = () => {
  return (
    <>
      <div className="main">
        <Heading
          list={["About", "Menu", "Contact"]}
          title="Gourmet au Catering"
        />
        <Slider title="Le Catering" />
        <Content />
        <Footer desc="Styled by baileyy using React Typescript" />
      </div>
    </>
  );
};
export default App;
