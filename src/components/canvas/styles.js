import styled from 'styled-components';

export const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Base64TextContainer = styled.div``;

export const Base64Text = styled.textarea`
  font-size: 0.8rem;
  width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 1px 2px 8px #ccc;
  white-space: pre-wrap; /* Webkit */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera <7 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
  margin: 5px 0;
  resize: none;
`;

export const SampleImage = styled.img`
  position: fixed;
  top: 40px;
  right: 40px
  width: 200px;
`;
