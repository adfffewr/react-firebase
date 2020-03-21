import React, { Suspense, lazy } from 'react';
import Header from '../components/common/header';
const PostWriteContainer = lazy(() =>
  import('../containers/PostWriteContainer')
);

const PostWrite = () => {
  return (
    <Suspense fallback={<Header />}>
      <Header />
      <main>
        <PostWriteContainer />
      </main>
    </Suspense>
  );
};

export default PostWrite;
