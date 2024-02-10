import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import {
  MessageWrap,
  MessageText,
} from 'components/SharedLayout/SharedLayout.styled';

const Favorites = () => {
  const favAdverts = useSelector(selectFavorites);
  console.log(favAdverts);
  return (
    <>
      {favAdverts.length === 0 ? (
        <MessageWrap>
          <MessageText>Your favorites list is empty</MessageText>
        </MessageWrap>
      ) : (
        <AdvertsList adverts={favAdverts} />
      )}
    </>
  );
};

export default Favorites;
