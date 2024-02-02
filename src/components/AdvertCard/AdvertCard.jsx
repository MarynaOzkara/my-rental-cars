import { useEffect } from "react";
import { getAdvertById } from "../../redux/rentalCars-api";

const AdvertCard = ({ id, make }) => {
  useEffect(() => {
    getAdvertById(id);
  });
  return (
    <div>
      <h1>{make}</h1>
    </div>
  );
};

export default AdvertCard;
