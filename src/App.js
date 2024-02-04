import { Navigate, Route, Routes } from 'react-router';
import { Suspense, lazy } from 'react';
import Loader from 'components/Loader/Loader';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const Favorites = lazy(() => import('pages/Favorites'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
