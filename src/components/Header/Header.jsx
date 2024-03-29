import {
  NavWrap,
  Navigation,
  MenuNav,
  MenuLink,
  LogoLink,
  PhoneLink,
} from './Header.styled';
import { ReactComponent as Logo } from '../../assets/car-logo.svg';
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
          <NavWrap>
            <PhoneLink href="tel: +380660000000">+380660000000</PhoneLink>
          </NavWrap>
        </MenuNav>
      </Navigation>
    </>
  );
};

export default Header;
