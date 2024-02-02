import Select from "react-select";
import { SelectWrap, Label } from "./SelectModel.styled";
import { useEffect, useState } from "react";
import { getBrands } from "../../redux/rentalCars-api";
import { useDispatch } from "react-redux";
import { setBrand } from "../../redux/adverts/advertsSlice";

const SelectModel = () => {
  const dispatch = useDispatch();
  const [brandsList, setBrandsList] = useState("");

  const handleChange = (newValue) => {
    dispatch(setBrand(newValue.value));
  };
  useEffect(() => {
    const fetchBrends = async () => {
      try {
        const brands = await getBrands();
        const brandsList = brands.map((brand) => ({
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
        />
      )}
      {/* <Select
          key={index}
          id="brandSelect"
          placeholder="Enter the text"
          options={label}
          onChange={handleChange}
          className="custom-select-container"
          classNamePrefix="custom-select"
          // styles={{
          //   control: (baseStyles, { isFocused }) => ({
          //     ...baseStyles,
          //     width: "224px",
          //     height: "48px",
          //     backgroundColor: "#F7F7FB",
          //     borderColor: isFocused ? "grey" : "red",
          //     border: "none",
          //     borderRadius: "14px",
          //     fontSize: "16px",
          //     fontFamily: "Manrope",
          //   }),
          //   option: (baseStyles, { isFocused }) => {
          //     return {
          //       ...baseStyles,
          //       color: isFocused ? "#121417" : "rgba(18, 20, 23, 0.2)",
          //       backgroundColor: "fff",
          //       borderRadius: "14px",
          //       fontSize: "16px",
          //       fontFamily: "Manrope",

          //       "&::-webkit-scrollbar": {
          //         width: "8px",
          //         backgroundColor: "rgba(18, 20, 23, 0.05)",
          //         borderRadius: "10px",
          //       },
          //     };
          //   },
          //   placeholder: (baseStyles) => ({
          //     ...baseStyles,
          //     color: "#121417",
          //   }),
          //   dropdownIndicator: (baseStyles, state) => ({
          //     ...baseStyles,
          //     color: "#121417",
          //   }),
          // }}
          components={{
            IndicatorSeparator: () => null,
          }}
        /> */}
    </SelectWrap>
  );
};

export default SelectModel;
