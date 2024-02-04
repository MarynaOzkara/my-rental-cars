import styled from 'styled-components';

export const CardWrap = styled.div`
  width: 461px;
  padding-top: 40px;
  padding-bottom: 40px;
`;
export const ImgThumb = styled.div`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  overflow: hidden;
`;
export const ImgCard = styled.img``;
export const MainInfoBlok = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 14px;
`;
export const BrandText = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
  line-height: 24px;
  color: var(--color-black);
`;
export const BrandAccentText = styled.span`
  color: var(--color-brend);
`;
export const PriceText = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
  line-height: 24px;
  color: var(--color-black);
  padding-right: 9px;
`;
export const SecondInfoBlok = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
`;
export const SecondInfoBlokItem = styled.li`
  padding-right: 6px;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
  &:not(:first-child) {
    padding-left: 6px;
  }
`;
export const InfoText = styled.p`
  color: var(--color-text);
  font-size: var(--fs-ss);
  font-weight: var(--fw-light);
  line-height: 18px;
`;
export const FavWrap = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
`;
export const Description = styled.p`
  margin-top: 14px;
  color: var(--color-black);
  font-size: var(--fs-sm);
  line-height: 20px;
`;
export const RentalBtn = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-top: 24px;
  padding: 12px 50px;
  border: none;
  background-color: var(--color-brend);
  color: var(--color-wight);
  border-radius: 12px;

  font-family: var(--family);
  font-size: var(--fs-sm);
  font-weight: var(--fw-semi-bold);
  line-height: 1.42; /* 142.857% */

  cursor: pointer;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: var(--color-acsent);
  }
`;
export const AdditionalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;
export const AdditionalItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: rgb(249, 249, 249);
  font-size: var(--fs-ss);
  font-weight: var(--fw-light);
  line-height: 18px;
  color: var(--color-black);
`;
export const SpanAccent = styled.span`
  font-size: var(--fs-ss);
  font-weight: var(--fw-semi-bold);
  color: var(--color-brend);
`;
export const WrapBlock = styled.div`
  margin-top: 24px;
`;
