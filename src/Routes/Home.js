import React, { Suspense, lazy } from 'react';

const HomeLayout = lazy(() => import('../Containers/HomeContainer'));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <HomeLayout></HomeLayout>
      </main>
    </Suspense>
  );
};

export default Home;
