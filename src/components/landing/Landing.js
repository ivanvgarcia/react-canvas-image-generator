import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Banner } from 'components/landing/LandingStyles';
import { Title } from 'components/canvas/CanvasStyles';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { twitterSignIn } from '../../actions/auth';
import styled from 'styled-components';
import avatarApi from '../../config/baseUrl';

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
  const loading = useSelector(state => state.auth.loading);
  const { t } = useTranslation();

  const signIn = async () => {
    const res = await avatarApi.get('/auth/connect');

    setUrl(res.data.redirectUrl);
  };

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      search.length > 0 && dispatch(twitterSignIn(search));
    }
  }, [dispatch, isAuthenticated, loading, search]);

  if (url) {
    return (window.location.href = url);
  }

  if (!loading && isAuthenticated) {
    return <Redirect to="/dashboard" />;
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
      <Title size="1.7rem">{t('landing.title')}</Title>
      <Link to="/avatar-generator">{t('landing.cta-button')}</Link>

      {!isAuthenticated && (
        <>
          <p
            style={{ textAlign: 'center', color: 'white', fontSize: '1.2rem' }}
          >
            - or -
          </p>
          <TwitterButton onClick={signIn}>
            <img src="images/twitter.png" alt="twitter" />
            {t('landing.login')}
          </TwitterButton>
        </>
      )}
    </Banner>
  );
};

export default Landing;
