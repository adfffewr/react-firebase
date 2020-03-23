import React, { Suspense, lazy } from 'react';
import Header from '../components/common/header';
const PostContainer = lazy(() => import('../containers/PostContainer'));

const PostWrite = () => {
  return (
    <Suspense fallback={<Header />}>
      <Header />
      <main>
        <PostContainer />
      </main>
    </Suspense>
  );
};

export default PostWrite;
