import React, { Suspense } from 'react';
import Header from '../Components/common/header';

const About = () => {
  return (
    <Suspense fallback={<Header />}>
      <Header />
      <main>dsfdsfsdf</main>
    </Suspense>
  );
};

export default About;
