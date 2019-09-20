import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Banner } from 'components/landing/LandingStyles';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { twitterSignIn } from '../../actions/auth';
import styled from 'styled-components';
import axios from 'axios';

const TwitterButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 5px 20px;
  box-shadow: 0 2px 4px #000;
  background: #1fa1f3;
  color: white;
  border: none;
  cursor: pointer;
  img {
    width: 40px;
  }
`;

const Landing = ({ location: { search } }) => {
  const [url, setUrl] = useState(null);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const signIn = async () => {
    const res = await axios.get('http://localhost:5000/sessions/connect');

    setUrl(res.data.redirectUrl);
  };

  useEffect(() => {
    search.length > 0 && dispatch(twitterSignIn(search));
  }, [dispatch, search]);

  if (url) {
    return (window.location.href = url);
  }

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

      {!isAuthenticated && (
        <>
          <p
            style={{ textAlign: 'center', color: 'white', fontSize: '1.2rem' }}
          >
            - or -
          </p>
          <TwitterButton onClick={signIn}>
            <img src="images/twitter.png" alt="twitter" />
            Twitter Login
          </TwitterButton>
        </>
      )}
    </Banner>
  );
};

export default Landing;
