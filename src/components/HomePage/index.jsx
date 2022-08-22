import { useSelector } from "react-redux";
import styled from "styled-components";
import useProducts from "../hooks/useProducts";

const StyledPage = styled.div`
  margin: 5rem;

  .category-name {
    text-transform: capitalize;
  }
`;

const HomePage = () => {
  const category = useSelector((state) => state.category);

  const { loading, data, error } = useProducts(category.text);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error...</h1>;

  return (
    <StyledPage>
      <h1 className="category-name">{data.category.name} </h1>
      <div className="products-container"></div>
    </StyledPage>
  );
};

export default HomePage;
