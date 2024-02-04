import styled from 'styled-components';

export const MileageWrap = styled.div`
  width: 320px;
`;
export const Label = styled.label`
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);
  line-height: 18px;
  color: var(--color-label);
`;
export const InputsWrap = styled.div`
  height: 48px;
  display: flex;
`;
export const LeftInput = styled.input`
  width: 160px;
  border-bottom-left-radius: 14px;
  border-top-left-radius: 14px;
  font-size: var(--fs-lg);
  color: var(--color-black);
  border: none;
  outline: none;
  background-color: var(--color-input);

  &::placeholder {
    color: var(--color-black);
    padding-left: 24px;
  }
`;
export const RightInput = styled.input`
  width: 160px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  font-size: var(--fs-lg);
  color: var(--color-black);
  border: none;
  outline: none;
  background-color: var(--color-input);
  border-left: 1px solid rgba(138, 138, 137, 0.2);

  &::placeholder {
    color: var(--color-black);
    padding-left: 24px;
  }
`;
