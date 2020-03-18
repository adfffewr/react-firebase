import React, { Suspense, lazy } from 'react';

const HomeLayout = lazy(() => import('../Layout/HomeLayout'));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeLayout></HomeLayout>
      <div>Home</div>
    </Suspense>
  );
};

export default Home;
