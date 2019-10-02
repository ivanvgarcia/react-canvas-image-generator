import styled from 'styled-components';

const Select = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  padding: 5px 10px;
  svg {
    width: 20px;
  }
`;

const Options = styled.div`
  position: absolute;
  top: 50px;
  right: 24px;
  background: white;
  box-shadow: 0 2px 5px #000;
  div {
    svg {
      width: 20px;
    }
  }
`;

const Flag = styled.div`
  padding: 5px;
`;

export const Styles = {
  Select,
  Options,
  Flag
};
