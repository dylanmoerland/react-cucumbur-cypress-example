import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.geyser};
  border-radius:15px;
  width: 300px;
  height: 500px;
  box-shadow: 2px 8px 16px rgba(0,0,0,0.3);
  overflow: hidden;
`;
