import styled from "styled-components";
import { colors } from "../../assets/styles/constants";

const FooterArea = styled.div`
  width: 100%;
  height: 120px;
  background: linear-gradient(180deg, #dddddd 100%, ${colors.darkBlue} 100%);
  color: ${colors.darkBlue};
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    position: relative;
    padding: 6px 15px;
    font-size: 16px;
    color: ${colors.darkBlue};
    border-radius: 34px;
    background-color: transparent;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
  }

  button::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: ${colors.darkBlue};
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  button:hover::before {
    scale: 3;
  }

  button:hover {
    color: white;
    background-color: ${colors.darkBlue};
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
  }

  button:active {
    scale: 1;
  }

  .social-icons {
    width: 160px;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    font-size: 25px;
  }

  @media (max-width: 400px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;

    .social-icons {
      margin-bottom: 20px;
    }
  }
`;

export default FooterArea;
