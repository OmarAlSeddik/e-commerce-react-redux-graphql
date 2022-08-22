import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../store/dataSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const GET_CURRENCIES = gql`
    query {
      currencies {
        label
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_CURRENCIES);

  if (data) console.log(data.currencies[0].label);

  return <h1>{data.currencies[0].label}</h1>;
};

export default HomePage;
