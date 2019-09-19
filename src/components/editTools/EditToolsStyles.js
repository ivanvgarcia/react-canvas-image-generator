import styled from 'styled-components';

export const Icon = styled.img`
  width: 60px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 50px;
  }
`;

export const Thumbnails = styled.div`
  display: flex;
`;

export const Thumbnail = styled.img`
  cursor: pointer;
`;
