import { gql, useQuery } from "@apollo/client";

const useProduct = (id) => {
  const GET_PRODUCT = gql`
    query {
      product(id: "${id}" ) {
        id
        name
        gallery
      }
    }
  `;
  console.log(GET_PRODUCT);

  const { loading, data, error } = useQuery(GET_PRODUCT);

  const productLoading = loading;
  const productData = data?.product;
  const productError = error;

  return { productLoading, productData, productError };
};

export default useProduct;
