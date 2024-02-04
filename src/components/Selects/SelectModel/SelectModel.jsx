import Select from 'react-select';
import { SelectWrap, Label } from './SelectModel.styled';
import { useEffect, useState } from 'react';
import { getBrands } from '../../../redux/rentalCars-api';
import { useDispatch } from 'react-redux';
import { setBrand } from '../../../redux/filters/filtersSlice';
import '../style.css';

const SelectModel = () => {
  const dispatch = useDispatch();
  const [brandsList, setBrandsList] = useState('');

  const handleChange = newBrand => {
    dispatch(setBrand(newBrand.value));
  };
  useEffect(() => {
    const fetchBrends = async () => {
      try {
        const brands = await getBrands();
        const brandsList = brands.map(brand => ({
          value: brand.value,
          label: brand.label,
        }));
        setBrandsList(brandsList);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchBrends();
  }, []);

  return (
    <SelectWrap>
      <Label htmlFor="brandSelect">Car brand</Label>
      {brandsList && (
        <Select
          id="brandSelect"
          options={brandsList}
          onChange={handleChange}
          placeholder="Enter the text"
          classNamePrefix="custom-select"
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      )}
    </SelectWrap>
  );
};

export default SelectModel;
