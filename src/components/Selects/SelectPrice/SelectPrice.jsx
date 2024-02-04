import Select from 'react-select';
import { PriceSelectWrap, PriceLabel } from './SelectPrice.styled';
import { useDispatch } from 'react-redux';
import { setPrice } from '../../../redux/filters/filtersSlice';
import '../style.css';

const SelectPrice = () => {
  const dispatch = useDispatch();
  const priceStep = [];
  for (let i = 30; i <= 500; i += 10) {
    priceStep.push({ value: i, label: `${i}` });
  }
  const handleChange = newPrice => {
    dispatch(setPrice(newPrice.label));
  };
  return (
    <PriceSelectWrap>
      <PriceLabel htmlFor="selectPrice">Price / 1 hour</PriceLabel>
      <Select
        id="selectPrice"
        options={priceStep}
        placeholder="To $"
        onChange={handleChange}
        classNamePrefix="custom-select"
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </PriceSelectWrap>
  );
};

export default SelectPrice;
