import { ButtonSearch } from './Buttons.styled';

const SearchButton = ({ formSubmit }) => {
  return <ButtonSearch onClick={formSubmit}>Search</ButtonSearch>;
};

export default SearchButton;
