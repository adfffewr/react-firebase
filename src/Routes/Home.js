import React, { Suspense, lazy } from 'react';
import Header from '../Components/common/header';
const HomeLayout = lazy(() => import('../Containers/HomeContainer'));

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
