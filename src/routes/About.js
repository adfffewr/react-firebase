import React, { Suspense } from 'react';
import Header from '../components/common/Header';

const About = () => {
  return (
    <Suspense fallback={<Header />}>
      <Header />
      <main>dsfdsfsdf</main>
    </Suspense>
  );
};

export default About;
