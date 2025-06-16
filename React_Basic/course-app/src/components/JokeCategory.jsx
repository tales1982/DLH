import { useState } from "react";
import {
  Section,
  Title,
  StyledParagraph,
  StyledList,
  StyledButton,
} from "../styles/JokeCategoryStyles";

function JokeCategory() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [joke, setJoke] = useState("");

  async function getCategories() {
    try {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getJokeFromCategory(category) {
    setSelectedCategory(category);
    setJoke("Loading...");
    try {
      const res = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      const data = await res.json();
      setJoke(data.value);
    } catch (error) {
      setJoke("Erreur de connexion...");
      console.error(error);
    }
  }

  return (
    <Section>
      <Title>Categories API</Title>
      <StyledParagraph>
        Nombre de categories : {categories.length}
      </StyledParagraph>

      <StyledList>
        {categories.map((categorie) => (
          <li key={categorie} onClick={() => getJokeFromCategory(categorie)}>
            {categorie}
            {selectedCategory === categorie && (
              <StyledParagraph style={{ marginTop: "10px" }}>{joke}</StyledParagraph>
            )}
          </li>
        ))}
      </StyledList>

      <StyledButton onClick={getCategories}>Get categories</StyledButton>
    </Section>
  );
}

export default JokeCategory;
