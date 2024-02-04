import React from 'react';
import { FiltersWrap } from './FiltersBar.styled';
import SelectPrice from '../Selects/SelectPrice/SelectPrice';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrand, selectPrice } from '../../redux/selectors';
import { getAdvertsByFilters } from '../../redux/rentalCars-api';
import SelectModel from 'components/Selects/SelectModel/SelectModel';
import SearchButton from 'components/Buttons/SearchButton';
import { setResetState } from '../../redux/adverts/advertsSlice';
import SelectMileage from 'components/Selects/SelectMileage/SelectMileage';

const FiltersBar = () => {
  const currentBrand = useSelector(selectBrand);
  const currentPrice = useSelector(selectPrice);

  const dispatch = useDispatch();
  const formSubmit = () => {
    dispatch(setResetState());
    dispatch(getAdvertsByFilters({ brand: currentBrand, price: currentPrice }));
  };

  return (
    <FiltersWrap>
      <SelectModel />
      <SelectPrice />
      <SelectMileage />
      <SearchButton formSubmit={formSubmit} />
    </FiltersWrap>
  );
};

export default FiltersBar;
