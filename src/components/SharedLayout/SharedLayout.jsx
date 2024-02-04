import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Container } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
