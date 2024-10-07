import { Link } from "react-router-dom";
import LogoIcon from "../../assets/images/LogoIcon.png";
import { HeaderArea, Title, Menu } from "./style";

export function Header() {
  return (
    <HeaderArea>
      <Title>
        <img src={LogoIcon} alt="Link Icon" />
        <span>Short</span>
        <span className="blue-title">Url</span>
      </Title>
      <Menu>
        <Link to="/">
          <button>Início</button>
        </Link>
        <Link to="/resources">
          <button>Recursos</button>
        </Link>
      </Menu>
    </HeaderArea>
  );
}
