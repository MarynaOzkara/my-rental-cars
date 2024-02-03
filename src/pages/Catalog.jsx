import { useEffect, useState } from 'react';
import FiltersBar from '../components/FiltersBar/FiltersBar';

import { useDispatch, useSelector } from 'react-redux';
import { getAllAdverts } from '../redux/rentalCars-api';
import { selectAdverts } from '../redux/selectors';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import LoadMore from 'components/Buttons/LoadMoreBtn';

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const [page, setPage] = useState(1);
  console.log(page);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    dispatch(getAllAdverts({ page: page }));
  }, [dispatch, page]);

  return (
    <>
      <FiltersBar />
      {adverts && <AdvertsList adverts={adverts} />}
      <LoadMore onLoadMore={onLoadMore} />
    </>
  );
};

export default Catalog;
