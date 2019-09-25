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

export const SliderContainer = styled.div`
  max-width: 100%;
  background: rgba(0, 0, 0, 0.5);

  @media (min-width: 1000px) {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 30px;
  }
`;
