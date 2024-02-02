import styled from "styled-components";

export const ButtonSearch = styled.button`
  display: block;
  border: none;
  padding: 14px 44px;
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
export const ButtonLearnMore = styled.button`
  display: block;
  border: none;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: var(--color-brend);
  color: var(--color-wight);
  border-radius: 12px;
  margin-top: 28px;

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
