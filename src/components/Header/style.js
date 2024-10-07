import styled from "styled-components";
import { colors } from "../../assets/styles/constants";

const HeaderArea = styled.div`
  width: 100%;
  height: 140px;
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 3px 3px 6px rgb(0 0 0 / 40%);
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  img {
    width: 22px;
    margin-right: 8px;
    object-fit: cover;
  }

  .blue-title {
    color: ${colors.mediumBlue};
  }
`;

const Menu = styled.div`
  color: white;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0px 20px;
    width: 100px;
    position: relative;
    height: 40px;
    border: 3px ridge ${colors.mediumBlue};
    outline: none;
    background-color: transparent;
    color: white;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 14px;

    @media (max-width: 600px) {
      margin: 0px 12px;
      width: 90px;
      font-size: 12px;
    }
  }

  button::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    transition: 0.5s;
    transform-origin: center;
    background-color: ${colors.darkBlue};
  }

  button::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    transition: 0.5s;
    background-color: ${colors.darkBlue};
  }

  button:hover::before,
  button:hover::after {
    transform: scale(0);
  }

  button:hover {
    box-shadow: inset 0px 0px 25px #1479ea;
  }
`;

export { HeaderArea, Title, Menu };
