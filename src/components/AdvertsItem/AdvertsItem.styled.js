import styled from 'styled-components';

export const AdvertItemWrap = styled.li`
  width: calc((100% - 3 * 29px) / 4);
  position: relative;

  &:hover img,
  :focus img {
    transform: scale(1.2);
  }
`;
export const AdvertImgThumb = styled.div`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`;
export const AdvertImg = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const AddInfoWrap = styled.div`
  margin-top: 14px;
`;
export const MainInfoBlok = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
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
