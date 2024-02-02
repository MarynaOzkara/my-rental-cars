import AdvertsItem from "../AdvertsItem/AdvertsItem";
import { AdvertsListWrap } from "./AdvertsList.styled";

const AdvertsList = ({ adverts }) => {
  return (
    <AdvertsListWrap>
      {adverts.map(
        (
          {
            make,
            img,
            id,
            years,
            mileage,
            rentalPrice,
            type,
            model,
            address,
            rentalCompany,
            functionalities,
          },
          index
        ) => (
          <AdvertsItem
            key={index}
            make={make}
            img={img}
            id={id}
            years={years}
            mileage={mileage}
            rentalPrice={rentalPrice}
            type={type}
            model={model}
            address={address}
            rentalCompany={rentalCompany}
          />
        )
      )}
    </AdvertsListWrap>
  );
};

export default AdvertsList;
