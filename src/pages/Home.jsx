import {
  MainWrap,
  MainImg,
  MainTitle,
  MainInfo,
  ImgWrap,
  MainDescription,
  MainLink,
} from 'components/SharedLayout/SharedLayout.styled';
import React from 'react';

import mainimg from '../assets/main-car.png';

const Home = () => {
  return (
    <>
      <MainWrap>
        <MainInfo>
          <MainTitle>Find your best car for amazing trip with us</MainTitle>
          <MainDescription>
            Bigest Ukranian service for rental cars
          </MainDescription>
          <MainLink to="/catalog">Search car</MainLink>
        </MainInfo>
        <ImgWrap>
          <MainImg alt="car" src={mainimg} />
        </ImgWrap>
      </MainWrap>
    </>
  );
};

export default Home;
