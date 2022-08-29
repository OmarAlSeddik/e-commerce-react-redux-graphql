import { gql, useQuery } from "@apollo/client";

const useProduct = (id) => {
  const GET_PRODUCT = gql`
    query {
      product(id: "${id}") {
        id
        brand
        name
        gallery
        description
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        attributes {
          name
          type
          items {
            displayValue
            value
          }
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_PRODUCT);
  const productLoading = loading;
  const productData = data?.product;
  const productError = error;
  return { productLoading, productData, productError };
};

export default useProduct;
