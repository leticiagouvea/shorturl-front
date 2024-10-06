import styled from "styled-components";
import { colors } from "../assets/styles/constants";

export function LinkInput() {
  return (
    <InputArea>
      <form className="link-input">
        <input placeholder="Insira seu link" type="url" required />
        <button>Encurtar</button>
      </form>
    </InputArea>
  );
}

const InputArea = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 100px;

  .link-input {
    display: flex;
    justify-content: center;
    align-items: center;

    input,
    textarea {
      width: 40%;
      min-width: 300px;
      height: 50px;
      padding: 20px;
      border: 0px;
      border-radius: 10px;
      background-color: ${colors.lightBlue};
      margin-right: 18px;
      font-size: 16px;
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
  }
`;
