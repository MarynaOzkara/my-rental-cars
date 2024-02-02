import { useEffect } from "react";
import FiltersBar from "../components/FiltersBar/FiltersBar";

import { useDispatch, useSelector } from "react-redux";
import { getAllAdverts } from "../redux/rentalCars-api";
import { selectAdverts } from "../redux/selectors";
import AdvertsList from "../components/AdvertsList/AdvertsList";

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);
  return (
    <>
      <FiltersBar />
      {adverts && <AdvertsList adverts={adverts} />}
    </>
  );
};

export default Catalog;
