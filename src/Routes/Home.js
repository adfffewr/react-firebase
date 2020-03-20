import React, { Suspense, lazy } from 'react';
import Header from '../components/common/Header';
const HomeLayout = lazy(() => import('../containers/HomeContainer'));

const Home = () => {
  return (
    <Suspense fallback={<Header />}>
      <Header />
      <main>
        <HomeLayout></HomeLayout>
      </main>
    </Suspense>
  );
};

export default Home;
