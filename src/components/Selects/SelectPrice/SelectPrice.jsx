import Select from 'react-select';
import { PriceSelectWrap, PriceLabel } from './SelectPrice.styled';

import '../style.css';

const SelectPrice = ({ value, onChange }) => {
  const priceStep = [];
  for (let i = 30; i <= 500; i += 10) {
    priceStep.push({ value: i, label: `${i}` });
  }

  return (
    <PriceSelectWrap>
      <PriceLabel htmlFor="selectPrice">Price / 1 hour</PriceLabel>
      <Select
        id="selectPrice"
        options={priceStep}
        value={value}
        onChange={onChange}
        placeholder="To $"
        classNamePrefix="custom-select"
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </PriceSelectWrap>
  );
};

export default SelectPrice;
