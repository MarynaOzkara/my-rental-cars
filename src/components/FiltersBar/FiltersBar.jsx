import React from "react";
import { FiltersWrap, Form, InputMileage } from "./FiltersBar.styled";
import SearchButton from "../Buttons/SearchButton";
import SelectModel from "../SelectModel/SelectModel";
import SelectPrice from "../SelectPrice/SelectPrice";
import { useDispatch, useSelector } from "react-redux";
import { selectBrand } from "../../redux/selectors";
import { getAdvertsByFilters } from "../../redux/rentalCars-api";

const FiltersBar = () => {
  const currentBrand = useSelector(selectBrand);
  console.log(currentBrand);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(getAdvertsByFilters({ brand: currentBrand }));
  };
  return (
    <FiltersWrap>
      <Form onSubmit={handleSubmit}>
        <SelectModel />
        <SelectPrice />
        <InputMileage />
        <SearchButton />
      </Form>
    </FiltersWrap>
  );
};

export default FiltersBar;
