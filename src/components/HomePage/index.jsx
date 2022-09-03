import { useSelector } from "react-redux";
import styled from "styled-components";
import useProducts from "../../hooks/useProducts";
import { cartActions } from "../../store/cartSlice";
import Products from "./Products";

const StyledPage = styled.div`
  padding: 5rem 5%;

  .category-name {
    text-transform: capitalize;
    padding: 2rem 0;
  }
`;

const HomePage = () => {
  const currency = useSelector((state) => state.currency);
  const category = useSelector((state) => state.category);

  const { productsLoading, productsData, productsError } = useProducts(
    category.text
  );

  if (productsLoading) return <h1>Loading...</h1>;
  if (productsError) return <h1>Error...</h1>;

  return (
    <StyledPage>
      <h1 className="category-name">{productsData.category.name}</h1>
      <Products
        productsData={productsData}
        cartActions={cartActions}
        currency={currency}
      />
    </StyledPage>
  );
};

export default HomePage;
