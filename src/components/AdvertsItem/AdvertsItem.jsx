import { useState } from 'react';
import LearnMoreBtn from '../Buttons/LearnMoreBtn';
import FavoritesBtn from '../FavotitesBtn/FavoritesBtn';
import ModalDrop from '../Modal/Modal';
import {
  AdvertItemWrap,
  AdvertImgThumb,
  AdvertImg,
  AddInfoWrap,
  MainInfoBlok,
  BrandText,
  PriceText,
  BrandAccentText,
  SecondInfoBlok,
  SecondInfoBlokItem,
  InfoText,
  FavWrap,
} from './AdvertsItem.styled';
import AdvertCard from '../AdvertCard/AdvertCard';

const AdvertsItem = ({
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
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <AdvertItemWrap>
        <AdvertImgThumb>
          <AdvertImg alt={make} src={img} />
        </AdvertImgThumb>
        <FavWrap>
          <FavoritesBtn
            advert={{
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
            }}
          />
        </FavWrap>
        <AddInfoWrap>
          <MainInfoBlok>
            <BrandText>
              {make} <BrandAccentText>{model}</BrandAccentText>, {years}
            </BrandText>
            <PriceText>{rentalPrice}</PriceText>
          </MainInfoBlok>
          <SecondInfoBlok>
            <SecondInfoBlokItem>
              <InfoText>{address.split(' ')[3]}</InfoText>
            </SecondInfoBlokItem>
            <SecondInfoBlokItem>
              <InfoText>{address.split(' ')[4]}</InfoText>
            </SecondInfoBlokItem>
            <SecondInfoBlokItem>
              <InfoText>{rentalCompany}</InfoText>
            </SecondInfoBlokItem>
          </SecondInfoBlok>
          <SecondInfoBlok>
            <SecondInfoBlokItem>
              <InfoText>{type}</InfoText>
            </SecondInfoBlokItem>
            <SecondInfoBlokItem>
              <InfoText>{model}</InfoText>
            </SecondInfoBlokItem>
            <SecondInfoBlokItem>
              <InfoText>{mileage}</InfoText>
            </SecondInfoBlokItem>
            <SecondInfoBlokItem>
              <InfoText>{functionalities}</InfoText>
            </SecondInfoBlokItem>
          </SecondInfoBlok>
        </AddInfoWrap>
        <LearnMoreBtn setIsModalOpen={setIsModalOpen} />
      </AdvertItemWrap>
      <ModalDrop
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <AdvertCard id={id} make={make} />
      </ModalDrop>
    </>
  );
};

export default AdvertsItem;
