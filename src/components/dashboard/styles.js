import styled from 'styled-components';

const Dashboard = styled.div`
  margin-top: 80px;
  padding: 0 20px;
`;

const SocialButton = styled.a`
  display: inline-block;
  background: ${props => props.backgroundColor};
  color: white;
  padding: 10px;
  margin: 15px 0;
  border-radius: 25px;
  text-decoration: none;
  flex: 1 1 100%;
  margin: 0 70px;
  text-align: center;
  margin: 15px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const UserInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  background: white;
  box-shadow: 0 4px 8px #000;
  padding: 20px 0;
  border-radius: 20px;
`;

const UserImage = styled.img`
  margin-right: 10px;
  border-radius: 50%;
  max-width: 100px;
  box-shadow: 0 4px 8px #000;
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  font-size: 1.4rem;
  margin: 10px 0 0;
`;

const AvatarImage = styled.picture`
  flex: 25%;
  margin: 5px;
  border-radius: 10px;
  img {
    width: 100%;
  }
`;

export const Styles = {
  Dashboard,
  FlexContainer,
  AvatarImage,
  UserInfo,
  UserImage,
  UserName,
  SocialButton
};
