import styled from "styled-components";
import { colors } from "../assets/styles/constants";
import { TiSocialInstagram } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { RiChatSmile2Fill } from "react-icons/ri";

export function Footer() {
  return (
    <FooterArea>
      <h1>ShortUrl | 2024 ©</h1>
      <div className="social-icons">
        <RiChatSmile2Fill />
        <TiSocialInstagram />
        <MdEmail />
      </div>
    </FooterArea>
  );
}

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

  h1,
  .social-icons {
    width: 160px;
  }

  .social-icons {
    display: flex;
    justify-content: space-evenly;
    font-size: 25px;
    color: ${colors.darkGreen};
    cursor: pointer;
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
