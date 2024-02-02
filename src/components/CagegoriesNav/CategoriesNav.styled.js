import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrap = styled.div`
  display: flex;
  gap: 32px;
`;
export const CategoryLink = styled(NavLink)`
  color: rgba(239, 237, 232, 0.4);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  position: relative;
  &.active {
    color: #efede8;
  }
  &.active::after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 4px;
    left: 0;
    bottom: -8px;

    background-color: #ef8964;
    border-radius: 2px;
  }
`;
export const NavPageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CategoriesWrap = styled.div`
  margin: 0 auto;
`;
export const GoBackBtnWrap = styled.div`
  position: absolute;
  top: 116px;
`;
