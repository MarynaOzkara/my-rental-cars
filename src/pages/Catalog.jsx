import { useEffect, useState } from 'react';
import FiltersBar from '../components/FiltersBar/FiltersBar';

import { useDispatch, useSelector } from 'react-redux';
import { getAllAdverts } from '../redux/rentalCars-api';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectTotal,
} from '../redux/selectors';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import LoadMore from 'components/Buttons/LoadMoreBtn';
import Loader from 'components/Loader/Loader';
import {
  MessageWrap,
  MessageText,
} from 'components/SharedLayout/SharedLayout.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const total = useSelector(selectTotal);
  const [page, setPage] = useState(1);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    dispatch(getAllAdverts({ page: page }));
  }, [dispatch, page]);
  console.log(adverts);
  return (
    <>
      <FiltersBar />
      {isLoading && <Loader />}
      {isError && (
        <MessageWrap>
          <MessageText> Car not found</MessageText>
        </MessageWrap>
      )}
      {adverts && <AdvertsList adverts={adverts} />}
      {total >= 8 && total !== null && !isError && !isLoading && (
        <LoadMore onLoadMore={onLoadMore} />
      )}
    </>
  );
};

export default Catalog;
