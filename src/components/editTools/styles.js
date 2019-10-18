import styled from 'styled-components';

export const Icon = styled.img`
  width: 60px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 40px;
  }
`;

export const Thumbnails = styled.div`
  display: flex;
`;

export const Thumbnail = styled.img`
  cursor: pointer;
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.5);
`;
