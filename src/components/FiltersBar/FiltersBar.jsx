import {
  FiltersForm,
  MileageWrap,
  Label,
  InputsWrap,
  LeftInput,
  RightInput,
} from './FiltersBar.styled';
import SelectPrice from '../Selects/SelectPrice/SelectPrice';
import { useDispatch } from 'react-redux';

import { getAllAdverts } from '../../redux/rentalCars-api';
import SelectModel from 'components/Selects/SelectModel/SelectModel';
import SearchButton from 'components/Buttons/SearchButton';

import { Controller, useForm } from 'react-hook-form';

import { setResetState } from '../../redux/adverts/advertsSlice';

const FiltersBar = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, control } = useForm();
  const submitData = data => {
    let filters = { brand: '', price: '' };
    if (data.brands) {
      const currentBrand = data.brands.value;

      filters = { brand: currentBrand };
    }
    if (data.price) {
      const currentPrice = data.price.label;
      filters = { price: currentPrice };
    }
    if (data.brands && data.price) {
      const currentBrand = data.brands.value;
      const currentPrice = data.price.label;
      filters = { brand: currentBrand, price: currentPrice };
    }
    // console.log(filters);

    dispatch(
      getAllAdverts({ brand: filters.brand, rentalPrice: filters.price })
    );
    dispatch(setResetState());
  };

  return (
    <>
      <FiltersForm onSubmit={handleSubmit(submitData)}>
        <Controller
          control={control}
          name="brands"
          render={({ field: { value, onChange } }) => (
            <>
              <SelectModel value={value} onChange={onChange} />
            </>
          )}
        />
        <Controller
          control={control}
          name="price"
          render={({ field: { value, onChange } }) => (
            <>
              <SelectPrice value={value} onChange={onChange} />
            </>
          )}
        />
        <MileageWrap>
          <Label>Сar mileage / km</Label>
          <InputsWrap>
            <LeftInput
              placeholder="From"
              {...register('from', { min: 1000 })}
            />
            <RightInput placeholder="To" {...register('to', { max: 10000 })} />
          </InputsWrap>
        </MileageWrap>
        <SearchButton />
      </FiltersForm>
    </>
  );
};

export default FiltersBar;
