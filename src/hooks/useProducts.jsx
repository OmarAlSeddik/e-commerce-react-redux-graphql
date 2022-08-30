import { gql, useQuery } from "@apollo/client";

const useProducts = (category) => {
  const GET_PRODUCTS = gql`
    query {
      category(input: { title: "${category}" }) {
        name
        products {
          id
          brand
          name
          inStock
          gallery
          prices {
            amount
          }
          attributes {
            name
            type
          }
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_PRODUCTS);

  const productsLoading = loading;
  const productsData = data;
  const productsError = error;

  return { productsLoading, productsData, productsError };
};

export default useProducts;