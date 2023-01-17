import React from 'react';
import { useParams } from 'react-router-dom';

const AboutSinglePage = () => {
  const { id } = useParams();
  return (
    <h1>
      About
      {' '}
      {id}
      {' '}
      info
    </h1>
  );
};

export default AboutSinglePage;
