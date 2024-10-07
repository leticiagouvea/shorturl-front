import styled from "styled-components";
import { colors } from "../../assets/styles/constants";

const ResourcesArea = styled.div`
  margin: 180px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    color: ${colors.darkBlue};
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 700;
  }
`;

const SwiperWrapper = styled.div`
  width: 95%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet {
    background-color: ${colors.darkBlue};
  }
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 300px;
  width: 100%;

  img {
    width: 70px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 20px;
    color: ${colors.darkBlue};
    font-weight: 500;

    @media (max-width: 600px) {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 16px;
    width: 80%;
    line-height: 1.5;

    @media (max-width: 600px) {
      width: 90%;
      font-size: 15px;
    }
  }
`;

export { ResourcesArea, SwiperWrapper, SlideContent };
