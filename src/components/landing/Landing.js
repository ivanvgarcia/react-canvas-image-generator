import React from 'react';
import { Link } from 'react-router-dom';
import { Banner } from 'components/landing/LandingStyles';

const Landing = () => {
  return (
    <Banner>
      <h1>Avatar Generator</h1>
      <Link to="/avatar-generator">Create Your Avatar</Link>
    </Banner>
  );
};

export default Landing;
