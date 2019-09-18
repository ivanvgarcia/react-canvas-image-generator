import React from 'react';
import { Link } from 'react-router-dom';
import { Banner } from 'components/landing/LandingStyles';
import { Helmet } from 'react-helmet';

const Landing = () => {
  return (
    <Banner>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Avatar Home</title>
        <meta
          name="description"
          content="Landing page for the avatar generator project."
        />
      </Helmet>
      <h1>Avatar Generator</h1>
      <Link to="/avatar-generator">Create Your Avatar</Link>
    </Banner>
  );
};

export default Landing;
