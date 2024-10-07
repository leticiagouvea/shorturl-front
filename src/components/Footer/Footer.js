import React, { useState } from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { RiChatSmile2Fill } from "react-icons/ri";
import { LearnMoreWindow } from "../LearnMoreWindow/LearnMoreWindow";
import FooterArea from "./style";

export function Footer() {
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowLearnMore(true);
  };

  const handleCloseLearnMore = () => {
    setShowLearnMore(false);
  };

  return (
    <>
      <FooterArea>
        <button onClick={handleLearnMoreClick}>SAIBA MAIS</button>
        <div className="social-icons">
          <RiChatSmile2Fill />
          <TiSocialInstagram />
          <MdEmail />
        </div>
      </FooterArea>
      {showLearnMore && <LearnMoreWindow onClose={handleCloseLearnMore} />}
    </>
  );
}
