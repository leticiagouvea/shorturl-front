import React from "react";
import styled from "styled-components";
import { colors } from "../assets/styles/constants";
import { IoClose } from "react-icons/io5";

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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const PopUp = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  max-width: 90%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  position: relative;

  h2 {
    color: ${colors.darkBlue};
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 700;

    h1 {
      margin-left: 10px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  color: ${colors.mediumBlue};
  font-size: 24px;
`;
