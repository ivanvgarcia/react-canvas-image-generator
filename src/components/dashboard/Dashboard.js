import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Title, SubTitle } from 'components/commonStyles';
import { Styles } from 'components/dashboard/styles';
import Loader from 'components/loader/Loader';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);
  const { t } = useTranslation();

  const renderUser = () =>
    user && (
      <div>
        <Styles.UserInfo>
          <Styles.UserImage src={user.photo} alt="user" />
          <Styles.UserName>{user.name}</Styles.UserName>

          {user.screen_name && (
            <Styles.SocialButton
              backgroundColor={'#1fa1f3'}
              href={`https://twitter.com/${user.screen_name}`}
            >
              {t('dashboard.twitter-button')}
            </Styles.SocialButton>
          )}
        </Styles.UserInfo>

        <SubTitle>{t('dashboard.title-2')}</SubTitle>
        <Styles.FlexContainer>
          {user.avatars.length > 0 ? (
            user.avatars.map(avatar => (
              <Link key={avatar._id} to={`/avatar/${avatar._id}`}>
                <Styles.AvatarImage>
                  <img srcSet={avatar.webp} type="image/webp" alt="avatar" />
                  <source src={avatar.url} alt="avatar" />
                </Styles.AvatarImage>
              </Link>
            ))
          ) : (
            <h4>You have not created any avatars yet.</h4>
          )}
        </Styles.FlexContainer>
      </div>
    );

  return (
    <Styles.Dashboard>
      <Title>{t('dashboard.title')}</Title>
      {loading ? <Loader /> : renderUser()}
    </Styles.Dashboard>
  );
};

export default Dashboard;
