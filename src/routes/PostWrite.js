import React, { Suspense, lazy } from 'react';
import Header from '../components/common/header';

const PostWrite = () => {
  return (
    <Suspense fallback={<Header />}>
      <Header />
      <main>sdfsdfsd</main>
    </Suspense>
  );
};

export default PostWrite;
