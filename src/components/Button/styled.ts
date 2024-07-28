import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 272px;
  height: 272px;
  font-size: ${({ theme }) => theme.fonts.size.header.small};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 50%;
  transition: ease-in-out 3s;

  &:hover {
    box-shadow: 0 0 0 50px ${({ theme }) => theme.colors.neutral[900]};
    transition: ease-in 0.5s;
  }

  @media (max-width: 768px) {
    width: 144px;
    height: 144px;
    font-size: ${({ theme }) => theme.fonts.size.text.small};
    color: ${({ theme }) => theme.colors.neutral[500]};
  }
`;
