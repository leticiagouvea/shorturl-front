import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Icon1 from "../../assets/images/Icon1.png";
import Icon2 from "../../assets/images/Icon2.png";
import Icon3 from "../../assets/images/Icon3.png";
import Icon4 from "../../assets/images/Icon4.png";
import { ResourcesArea, SwiperWrapper, SlideContent } from "./style";

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
          autoplay={{ delay: 3000 }}
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
