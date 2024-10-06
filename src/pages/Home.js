import { LinkInput } from "../components/LinkInput";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import Illustration from "../assets/images/Illustration.png";
import styled from "styled-components";
import { colors } from "../assets/styles/constants";

export function Home() {
  return (
    <>
      <HomeInfos>
        <img
          src={Illustration}
          alt="Link Icon"
          className="animate__animated animate__swing"
        />
        <div className="title">
          <FaRegFaceSmileWink />
          <h1>Links mais amigáveis para compartilhar!</h1>
        </div>
        <h2>
          Um encurtador de URL simples e rápido! Basta colar a URL para ser
          encurtada:
        </h2>
      </HomeInfos>
      <LinkInput />
    </>
  );
}

const HomeInfos = styled.div`
  margin: 150px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 350px;
  }

  .title {
    display: flex;
    font-size: 20px;
    color: ${colors.darkBlue};
    font-weight: 700;
    margin-bottom: 20px;

    h1 {
      margin-left: 10px;
    }
  }

  h2 {
    max-width: 415px;
    margin-bottom: 20px;
    color: black;
  }
`;
