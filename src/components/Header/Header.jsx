import {
  NavWrap,
  Navigation,
  MenuNav,
  MenuLink,
  LogoLink,
} from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/car-logo.svg";
const Header = () => {
  return (
    <>
      <Navigation>
        <MenuNav>
          <LogoLink to="/">
            <Logo />
          </LogoLink>

          <NavWrap>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/catalog">Catalog</MenuLink>
            <MenuLink to="/favorites">Favorites</MenuLink>
          </NavWrap>
        </MenuNav>
      </Navigation>
    </>
  );
};

export default Header;
