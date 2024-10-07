import { LinkInput } from "../../components/LinkInput/LinkInput";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import Illustration from "../../assets/images/Illustration.png";
import { HomePage, Infos } from "./style";

export function Home() {
  return (
    <HomePage>
      <Infos>
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
      </Infos>
      <LinkInput />
    </HomePage>
  );
}
