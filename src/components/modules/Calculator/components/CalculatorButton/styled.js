import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.baliHay};
  outline: none !important;
  padding: 12px 8px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    outline: 1px blue;
  }

  ${({ variant }) => variant === 'operator' && css`
    background-color: ${({ theme }) => theme.colors.bismark};
  `}

  ${({ variant }) => variant === 'success' && css`
    background-color: ${({ theme }) => theme.colors.flushOrange};
  `}

  ${({ variant }) => variant === 'danger' && css`
    background-color: red;
  `}
`;

export const Label = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  margin: 0;
  height: 18px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  display: block;
`;
