import styled from "styled-components";
import { colors } from "../../assets/styles/constants";

const HomePage = styled.div`
  margin: 0 auto;
  width: 415px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Infos = styled.div`
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
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${colors.darkBlue};
    font-weight: 700;
    margin-bottom: 20px;

    h1 {
      margin-left: 10px;

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }
  }

  h2 {
    margin-bottom: 20px;
    color: black;

    @media (max-width: 600px) {
      max-width: 330px;
    }
  }
`;

export { HomePage, Infos };
