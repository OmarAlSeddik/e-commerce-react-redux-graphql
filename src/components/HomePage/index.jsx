import { useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";

const HomePage = () => {
  const category = useSelector((state) => state.category);

  const { loading, data, error } = useProducts(category.string);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error...</h1>;

  return <h1>{data.category.name}</h1>;
};

export default HomePage;
