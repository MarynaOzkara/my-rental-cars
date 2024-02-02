import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.header`
  width: 100%;
  box-shadow: var(--shadow);
`;
export const MenuNav = styled.nav`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 128px;
  display: flex;
  align-items: center;
  gap: 100px;
`;
export const NavWrap = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;
export const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-size: var(--fs-xl);
  padding: 4px 16px;
  border-radius: 4px;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--color-brend);
  &.active {
    color: var(--color-wight);
    background-color: var(--color-brend);
  }
  &:hover,
  :focus {
    color: var(--color-acsent);
  }
`;
export const LogoLink = styled(NavLink)`
  text-decoration: none;
`;
