import styled from 'styled-components';

export const CloseModal = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fonts.size.text.medium};
  }
`;

export const OpenModal = styled.button`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fonts.size.text.medium};
  padding-right: 64px;
`;

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  justify-content: flex-start;
`;
