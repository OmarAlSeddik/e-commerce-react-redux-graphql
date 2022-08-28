import { useParams } from "react-router-dom";
import styled from "styled-components";
import useProduct from "../../hooks/useProduct";
import NotFoundPage from "../NotFoundPage";

const StyledPage = styled.div`
  padding: 5rem 5%;
`;

const ProductPage = () => {
  const { id } = useParams();
  const { productLoading, productData, productError } = useProduct(id);
  if (productLoading) return <div>Loading...</div>;
  if (productError) return <div>Error...</div>;
  if (!productData) return <NotFoundPage />;

  return (
    <StyledPage>
      <h1>{id}</h1>
    </StyledPage>
  );
};

export default ProductPage;
