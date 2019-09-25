import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container } from 'components/commonStyles';

export const Wrapper = styled.div`
  background-color: #330000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23D18'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  h2 {
    margin: 0;
  }
  min-height: 100vh;
  color: white;
  a {
    display: inline-block;
    background: #1fa1f3;
    color: white;
    padding: 10px;
    margin: 15px 0;
    border-radius: 25px;
    text-decoration: none;
  }
`;

const FlexContainer = styled.div`
  display: flex;
`;

const AvatarImage = styled.img`
  width: 10%;
  margin: 20px;
`;

const Dashboard = () => {
  //   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  //   const loading = useSelector(state => state.auth.loading);

  const renderUser = () =>
    user && (
      <div>
        <img src={user.photo} alt="user" />
        <p>{user.name}</p>
        <a href={`https://twitter.com/${user.screen_name}`}>Twitter Profile</a>

        <h2>My Avatars</h2>
        <FlexContainer>
          {user.avatars.map(avatar => (
            <AvatarImage src={avatar.url} alt="avatar" />
          ))}
        </FlexContainer>
      </div>
    );

  return (
    <Wrapper>
      <Container>
        <h2>Dashboard</h2>
        {renderUser()}
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
