import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const MainContainer = styled.div`
  height: 100%;
`;

export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: white;
  font-size: ${props => props.size || '3rem'};
  text-align: center;
  text-shadow: 1px 2px 2px dodgerblue, 2px 3px 3px #000, 3px 4px 6px blue;
`;

export const SubTitle = styled.h4`
  color: white;
  font-size: ${props => props.size || '1rem'};
  text-align: center;
`;
