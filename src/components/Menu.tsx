import React, { useState, useRef } from "react";
import {
  CategoryButton,
  CategoryContainer,
  MenuDescription,
  MenuHeader,
  MenuIngredients,
  MenuItem,
  MenuItemContainer,
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
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const filteredItems = menuData.items.filter(
    (item) =>
      !selectedCategory ||
      item.category === selectedCategory ||
      selectedCategory === "TODOS"
  );

  const ref = useRef(null);

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
      {filteredItems.map((item) => (
        <MenuItemContainer key={item.name}>
          <MenuItem>
            <MenuItemImage src={item.imageSrc} alt={item.name} />
            <MenuDescription>
              <MenuItemName>{item.name}</MenuItemName>
              <MenuIngredients>{item.ingredients}</MenuIngredients>
              <MenuItemPrice>R${item.price}</MenuItemPrice>
            </MenuDescription>
          </MenuItem>
        </MenuItemContainer>
      ))}
    </StyledContainer>
  );
};

export default Menu;