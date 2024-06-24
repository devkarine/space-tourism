import styled from 'styled-components';

export const CloseModal = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    color: ${({theme})=> theme.colors.light};
    font-size: 24px;
  }
`;

export const OpenModal = styled.button`
  color: ${({theme})=> theme.colors.light};
  font-size: 24px;
`;
