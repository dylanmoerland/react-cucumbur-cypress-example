import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bismark};
  padding: 24px 24px;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.tana};
  padding: 12px 16px;
`;

export const Label = styled.p`
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  text-align: right;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;
