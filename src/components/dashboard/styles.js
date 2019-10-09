import styled from 'styled-components';

const Dashboard = styled.div`
  margin-top: 80px;
  padding: 0 20px;
  a {
    display: inline-block;
    background: #1fa1f3;
    color: white;
    padding: 10px;
    margin: 15px 0;
    border-radius: 25px;
    text-decoration: none;
    flex: 1 1 100%;
    margin: 0 70px;
    text-align: center;
    margin: 15px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
`;

const UserInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const UserImage = styled.img`
  margin-right: 10px;
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  text-shadow: 1px 2px 2px dodgerblue, 2px 3px 3px #000, 3px 4px 6px blue;
  font-family: 'Satisfy';
`;

const AvatarImage = styled.picture`
  flex: 25%;
  margin: 5px;
  background-image: linear-gradient(115deg, #000, #242424);
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
  UserName
};
