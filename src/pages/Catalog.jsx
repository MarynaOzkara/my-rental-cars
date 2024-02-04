import { useEffect, useState } from 'react';
import FiltersBar from '../components/FiltersBar/FiltersBar';

import { useDispatch, useSelector } from 'react-redux';
import { getAllAdverts } from '../redux/rentalCars-api';
import {
  selectAdverts,
  selectFilteredAdverts,
  selectIsLoading,
  selectTotal,
} from '../redux/selectors';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import LoadMore from 'components/Buttons/LoadMoreBtn';
import Loader from 'components/Loader/Loader';

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const filteredAdverts = useSelector(selectFilteredAdverts);
  const isLoading = useSelector(selectIsLoading);
  const total = useSelector(selectTotal);
  const [page, setPage] = useState(1);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    dispatch(getAllAdverts({ page: page }));
  }, [dispatch, page]);

  return (
    <>
      <FiltersBar />
      {isLoading && <Loader />}
      {filteredAdverts ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <AdvertsList adverts={adverts} />
      )}
      {total >= 8 && total !== null && <LoadMore onLoadMore={onLoadMore} />}
    </>
  );
};

export default Catalog;
