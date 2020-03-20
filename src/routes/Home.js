import React, { Suspense, lazy } from 'react';
import Header from '../components/common/Header';
const HomeContainer = lazy(() => import('../containers/HomeContainer'));

const Home = () => {
  return (
    <Suspense fallback={<Header />}>
      <Header />
      <main>
        <HomeContainer></HomeContainer>
      </main>
    </Suspense>
  );
};

export default Home;
