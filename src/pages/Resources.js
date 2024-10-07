import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { colors } from "../assets/styles/constants";
import Icon1 from "../assets/images/Icon1.png";
import Icon2 from "../assets/images/Icon2.png";
import Icon3 from "../assets/images/Icon3.png";
import Icon4 from "../assets/images/Icon4.png";

export function Resources() {
  const slides = [
    {
      title: "Totalmente gratuito",
      text: "Você pode usar o ShortUrl sem custo algum e sem limites de uso.",
      image: Icon1,
    },
    {
      title: "Conteúdo responsivo",
      text: "Compatível com desktop, tablets e dispositivos móveis.",
      image: Icon2,
    },
    {
      title: "Encurtamento Rápido e Simplificado",
      text: "Com o ShortUrl, você pode encurtar qualquer link rapidamente, tornando URLs curtas e fáceis de lembrar ou compartilhar.",
      image: Icon3,
    },
    {
      title: "Geramos um QR Code para você",
      text: "Ao encurtar uma URL, você também recebe um QR Code para acessar o novo link.",
      image: Icon4,
    },
  ];

  return (
    <ResourcesArea>
      <h2>Porque usar o ShortUrl?</h2>

      <SwiperWrapper>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideContent>
                <img src={slide.image} alt={slide.title} />
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </SlideContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </ResourcesArea>
  );
}

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
