import { gql, useQuery } from "@apollo/client";

const useProducts = (category) => {
  const GET_PRODUCTS = gql`
    query {
      category(input: { title: "${category}" }) {
        name
        products {
          name
          inStock
          gallery
          prices {
            amount
          }
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_PRODUCTS);

  return { loading, data, error };
};

export default useProducts;
