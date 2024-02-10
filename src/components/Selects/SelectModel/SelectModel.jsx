import Select from 'react-select';
import { SelectWrap, Label } from './SelectModel.styled';
import { useEffect, useState } from 'react';
import { getBrands } from '../../../redux/rentalCars-api';

import '../style.css';

const SelectModel = ({ value, onChange }) => {
  const [brandsList, setBrandsList] = useState('');

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
          value={value}
          onChange={onChange}
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
