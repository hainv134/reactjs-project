import React from "react";
import Infor from "./infor";
import Menu from "./menu";
import style from "./content.module.scss";
import Contact from "./contact";

const Content: React.FC = () => {
  return (
    <div className={style.content}>
      <Infor
        img="./img/tablesetting2.jpg"
        content="The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        desc="Tradition since 1889"
        title="About Catering"
      />
      <Menu
        img="./img/tablesetting2.jpg"
        menus={[
          {
            name: "Bread Basket",
            desc: "Assortment of fresh baked fruit breads and muffins 5.50",
          },
          {
            name: "Honey Almond Granola with Fruits",
            desc: "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00",
          },
          {
            name: "Belgian Waffle",
            desc: "Vanilla flavored batter with malted flour 7.50",
          },
          {
            name: "Scrambled eggs",
            desc: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
          },
        ]}
      />
      <Contact
        address="Catering Service, 42nd Living St, 43043 New York, NY"
        desc="We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us."
        quote="You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:"
      />
    </div>
  );
};
export default Content;
