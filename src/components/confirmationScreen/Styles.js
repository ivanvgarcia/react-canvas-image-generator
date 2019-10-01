
import styled from "styled-components";

const Confirmation = styled.div`
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");
`;

const ConfirmationAlert = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: fixed;
bottom: 20px;
left: 0;
width: 90%;
background: rgba(219, 71, 108, 0.5);
border-radius: 20px;
box-shadow: 0 2px 10px #4d4949;
padding: 10px;
margin: 0 10px;
min-height: 55px;
`;

const ConfirmationText = styled.p`
font-size: 1rem;
font-weight: bold;
color: white;
`;

const ConfirmationButtons = styled.div`
display: flex;
`;

const ConfirmationButton = styled.button`
background: ${props => props.backgroundColor};
`;

// const TweetContainer = styled.div`
//   min-width: 300px;
//   flex: 1;
//   @media (max-width: 650px) {
//     position: absolute;
//     bottom: 0px;
//     left: 0;
//     width: 100%;
//     background: none;
//   }
// `;

const TwitterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px auto 0px;
  width: 90%;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0.1);
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");
`;

const SampleImage = styled.img`
  width: 100%;
`;

export const Styles = {
  Confirmation,
  ConfirmationAlert,
  ConfirmationText,
  ConfirmationButtons,
  ConfirmationButton,
  TwitterContent,
  SampleImage
}

