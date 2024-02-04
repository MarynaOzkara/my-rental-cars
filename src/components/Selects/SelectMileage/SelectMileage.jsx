import {
  MileageWrap,
  Label,
  LeftInput,
  RightInput,
  InputsWrap,
} from './SelectMileage.styled';

const SelectMileage = () => {
  return (
    <MileageWrap>
      <Label>Сar mileage / km</Label>
      <InputsWrap>
        <LeftInput placeholder="From" />
        <RightInput placeholder="To" />
      </InputsWrap>
    </MileageWrap>
  );
};

export default SelectMileage;
