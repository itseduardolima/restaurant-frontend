import { useState } from "react";
import Pepperoni from "../assets/images/pizzas/pepperoni.jpg";
import Cheeseburger from "../assets/images/hamburgues/cheeseburger.jpg"
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

const menuData = {
  categories: ["TODOS", "PIZZA", "BURGUER"],
  items: [
    {
      imageSrc: Pepperoni,
      name: "Pizza de Pepperoni",
      category: "PIZZA",
      price: 30,
      ingredients: [
        "Heirloom cherry tomatoes",
        "high-quality extra-virgin olive oil",
      ],
    },
    {
      imageSrc: Cheeseburger,
      name: "Cheeseburger",
      category: "BURGUER",
      price: 20,
      ingredients: [
        "Heirloom cherry tomatoes",
        "high-quality extra-virgin olive oil",
      ],
    },
  ],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const filteredItems = menuData.items.filter(
    (item) =>
      !selectedCategory ||
      item.category === selectedCategory ||
      selectedCategory === "TODOS"
  );

  return (
    <StyledContainer>
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
