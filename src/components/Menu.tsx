import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  CardContainer,
  CategoryButton,
  CategoryContainer,
  MenuCard,
  MenuDescription,
  MenuHeader,
  MenuIngredients,
  MenuItemImage,
  MenuItemName,
  MenuItemPrice,
  StyledContainer,
} from "../styles/Menu";
import { menuData } from "../common/utils/Array";

type MenuProps = {
  id?: string;
};

const Menu: React.FC<MenuProps> = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState("PIZZA");
  const filteredItems = menuData.items.filter(
    (item) => !selectedCategory || item.category === selectedCategory
  );
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(".menu-card", {
      opacity: 1,
      y: 100,
      stagger: 0.1,
      duration: 1,
    });
  }, [filteredItems]);

  return (
    <StyledContainer id={id} ref={ref}>
      <MenuHeader>Menu</MenuHeader>
      <CategoryContainer>
        {menuData.categories.map((category) => (
          <CategoryButton
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={category === selectedCategory ? "selected" : ""}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryContainer>

      <CardContainer>
        {filteredItems.map((item) => (
          <MenuCard key={item.name} className="menu-card">
            <MenuItemImage src={item.imageSrc} alt={item.name} />
            <MenuDescription>
              <MenuItemName>{item.name}</MenuItemName>
              <MenuIngredients>{item.ingredients}</MenuIngredients>
              <MenuItemPrice>R${item.price}</MenuItemPrice>
            </MenuDescription>
          </MenuCard>
        ))}
      </CardContainer>
    </StyledContainer>
  );
};

export default Menu;
