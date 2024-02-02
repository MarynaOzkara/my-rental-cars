import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/selectors";
import AdvertsList from "../components/AdvertsList/AdvertsList";

const Favorites = () => {
  const favAdverts = useSelector(selectFavorites);
  return <>{favAdverts && <AdvertsList adverts={favAdverts} />}</>;
};

export default Favorites;
