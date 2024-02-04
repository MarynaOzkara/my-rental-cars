import { useEffect, useState } from 'react';
import { getAdvertById } from '../../redux/rentalCars-api';
import {
  CardWrap,
  ImgThumb,
  ImgCard,
  MainInfoBlok,
  BrandText,
  BrandAccentText,
  SecondInfoBlok,
  SecondInfoBlokItem,
  InfoText,
  Description,
  RentalBtn,
  AdditionalList,
  AdditionalItem,
  SpanAccent,
  WrapBlock,
} from './AdvertCard.styled';

const AdvertCard = ({ id }) => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const data = await getAdvertById(id);
        const card = data[0];
        setCardData(card);
        console.log(card);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCard();
  }, [id]);
  const {
    img,
    make,
    model,
    years,
    description,
    address,
    type,
    mileage,
    functionalities,
    accessories,
    rentalPrice,
    fuelConsumption,
    engineSize,
  } = cardData;
  return (
    <CardWrap>
      <ImgThumb>
        <ImgCard alt={make} src={img} />
      </ImgThumb>
      <MainInfoBlok>
        <BrandText>
          {make} <BrandAccentText>{model}</BrandAccentText>, {years}
        </BrandText>
      </MainInfoBlok>
      <SecondInfoBlok>
        <SecondInfoBlokItem>
          <InfoText>{address.split(' ')[3]}</InfoText>
        </SecondInfoBlokItem>
        <SecondInfoBlokItem>
          <InfoText>{address.split(' ')[4]}</InfoText>
        </SecondInfoBlokItem>
        <SecondInfoBlokItem>
          <InfoText>Id: {id}</InfoText>
        </SecondInfoBlokItem>
        <SecondInfoBlokItem>
          <InfoText>Year: {years}</InfoText>
        </SecondInfoBlokItem>
        <SecondInfoBlokItem>
          <InfoText>Type: {type}</InfoText>
        </SecondInfoBlokItem>
      </SecondInfoBlok>
      <SecondInfoBlok>
        <SecondInfoBlokItem>
          <InfoText>Fuel Consumption: {fuelConsumption}</InfoText>
        </SecondInfoBlokItem>
        <SecondInfoBlokItem>
          <InfoText>Engine Size: {engineSize}</InfoText>
        </SecondInfoBlokItem>
      </SecondInfoBlok>
      <Description>{description}</Description>
      <WrapBlock>
        <Description>Accessories and functionalities:</Description>
        <SecondInfoBlok>
          {accessories.map(accessor => (
            <SecondInfoBlokItem>
              <InfoText>{accessor}</InfoText>
            </SecondInfoBlokItem>
          ))}
        </SecondInfoBlok>
        <SecondInfoBlok>
          {functionalities.map(functionality => (
            <SecondInfoBlokItem>
              <InfoText>{functionality}</InfoText>
            </SecondInfoBlokItem>
          ))}
        </SecondInfoBlok>
      </WrapBlock>
      <WrapBlock>
        <Description>Rental Conditions: </Description>
        <AdditionalList>
          <AdditionalItem>
            Minimum age : <SpanAccent>25</SpanAccent>
          </AdditionalItem>
          <AdditionalItem>Valid driver’s license</AdditionalItem>
          <AdditionalItem>Security deposite required </AdditionalItem>
          <AdditionalItem>
            Mileage: <SpanAccent>{mileage}</SpanAccent>
          </AdditionalItem>
          <AdditionalItem>
            Price: <SpanAccent>{rentalPrice}</SpanAccent>
          </AdditionalItem>
        </AdditionalList>
      </WrapBlock>
      <RentalBtn href="tel: +380660000000">Rental car</RentalBtn>
    </CardWrap>
  );
};

export default AdvertCard;
