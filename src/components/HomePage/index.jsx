import { useSelector } from "react-redux";
import styled from "styled-components";
import useProducts from "../hooks/useProducts";

const StyledPage = styled.div`
  margin: 5rem;

  .category-name {
    text-transform: capitalize;
    padding: 5rem 0;
  }

  .products-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  .product-container {
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 1rem;
    transition: box-shadow 0.2s;
  }

  .product-container:hover {
    box-shadow: 0 0.25rem 2.1875rem rgba(168, 172, 176, 0.19);
  }

  .product-container.out-of-stock {
    pointer-events: none;
    opacity: 0.5;
  }

  .stock-text {
    display: none;
    position: absolute;
    font-size: 1.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 160%;
  }

  .out-of-stock .stock-text {
    display: inline;
  }

  .product-image {
    width: 20rem;
    height: 20rem;
    align-self: center;
  }

  .product-name {
    font-weight: 300;
    line-height: 160%;
    font-size: 1.125rem;
    margin-top: 1.3125rem;
  }

  .product-price {
    line-height: 160%;
    font-size: 1.125rem;
  }
`;

const HomePage = () => {
  const currency = useSelector((state) => state.currency);

  const category = useSelector((state) => state.category);
  const { loading, data, error } = useProducts(category.text);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  const products = data.category.products;

  const renderedProducts = products.map((product, i) => {
    return (
      <div
        className={`product-container ${product.inStock ? "" : "out-of-stock"}`}
        key={i}
      >
        <div className="stock-text">OUT OF STOCK</div>
        <img className="product-image" src={product.gallery[0]} alt="Product" />
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          {currency.symbol}
          {product.prices[currency.value].amount.toFixed(2)}
        </div>
      </div>
    );
  });

  console.log(products[0].inStock);

  return (
    <StyledPage>
      <h1 className="category-name">{data.category.name} </h1>
      <div className="products-container">{renderedProducts}</div>
    </StyledPage>
  );
};

export default HomePage;
