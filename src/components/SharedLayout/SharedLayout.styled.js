import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  padding: 100px 128px;
  margin: 0 auto;
`;
export const MainWrap = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
`;
export const MainImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
export const MainTitle = styled.h1`
  font-weight: var(--fw-bold);
  font-size: var(--fs-xxl);
  color: var(--color-black);
`;
export const MainInfo = styled.div`
  margin-top: 150px;
`;
export const ImgWrap = styled.div`
  position: absolute;
  right: 0;
  top: -50px;
`;
export const MainDescription = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-lg);
  color: var(--color-text);
  margin-top: 20px;
  margin-bottom: 80px;
`;
export const MainLink = styled(Link)`
  text-decoration: none;
  font-size: var(--fs-md);
  padding: 12px 44px;
  border-radius: 12px;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--color-wight);
  background-color: var(--color-brend);

  &:hover,
  :focus {
    background-color: var(--color-acsent);
  }
`;
export const MessageWrap = styled.div`
  margin: 50px auto;
`;
export const MessageText = styled.h2`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-xl);
  color: var(--color-text);
  text-align: center;
`;
