import styled from "styled-components";
import { colors } from "../../assets/styles/constants";

const InputArea = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormUrl = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input {
    width: 300px;
    height: 50px;
    padding: 20px;
    border: 0px;
    border-radius: 10px;
    background-color: ${colors.lightBlue};
    margin-right: 18px;
    font-size: 16px;

    @media (max-width: 510px) {
      width: 230px;
      margin-right: 12px;
    }
  }

  button {
    width: 100px;
    height: 50px;
    padding: 20px;
    border-radius: 10px;
    background-color: ${colors.mediumBlue};
    font-weight: 700;
    color: white;
    font-size: 16px;
  }
`;

const ResultArea = styled.div`
  width: 415px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px dashed #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  a {
    color: ${colors.mediumBlue};
    font-weight: bold;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const QRCodeWrapper = styled.div`
  margin-top: 30px;

  img {
    margin-top: 10px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

const CopyButton = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid ${colors.darkBlue};
  color: ${colors.darkBlue};
  font-size: 15px;
`;

const NewUrlButton = styled.button`
  margin-top: 30px;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: ${colors.darkBlue};
  color: white;
  font-size: 15px;

  p {
    margin-left: 10px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 15px;
`;

export {
  InputArea,
  FormUrl,
  ResultArea,
  QRCodeWrapper,
  CopyButton,
  NewUrlButton,
  ErrorMessage,
};
