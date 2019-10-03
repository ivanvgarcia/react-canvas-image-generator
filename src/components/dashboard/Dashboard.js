import React from 'react';
import { useSelector } from 'react-redux';
import { Title } from 'components/commonStyles';
import { Styles } from "components/dashboard/styles";


const Dashboard = () => {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  // const loading = useSelector(state => state.auth.loading);

  const renderUser = () =>
    user && (
      <div>
        <Styles.UserInfo>
          <Styles.UserImage src={user.photo} alt="user" />
          <Styles.UserName>{user.name}</Styles.UserName>
          <a href={`https://twitter.com/${user.screen_name}`}>Twitter Profile</a>
        </Styles.UserInfo>

        <h2>My Avatars</h2>
        <Styles.FlexContainer>
          {user.avatars.map(avatar => (
            <Styles.AvatarImage src={avatar.url} alt="avatar" />
          ))}
        </Styles.FlexContainer>
      </div>
    );

  return (
    <Styles.Dashboard>
      <Title>Dashboard</Title>
      {renderUser()}
    </Styles.Dashboard>
  );
};

export default Dashboard;
