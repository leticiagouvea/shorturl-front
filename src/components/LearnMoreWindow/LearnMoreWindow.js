import React from "react";
import { IoClose } from "react-icons/io5";
import CuttingUrl from "../../assets/images/CuttingUrl.png";
import { Overlay, PopUp, CloseButton } from "./style";

export function LearnMoreWindow({ onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <PopUp>
        <CloseButton onClick={onClose}>
          <IoClose size={24} />
        </CloseButton>
        <img src={CuttingUrl} alt="Cutting Url" />
        <h2>Saiba mais sobre o ShortUrl</h2>
        <p>
          O ShortUrl é uma ferramenta simples e eficiente para encurtar seus
          links. Torne seus links mais fáceis de compartilhar e gerenciar com
          apenas alguns cliques!
        </p>
      </PopUp>
    </Overlay>
  );
}
