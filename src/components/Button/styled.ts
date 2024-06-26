import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 272px;
  height: 272px;
  font-size: ${({ theme }) => theme.fonts.size.header.small};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 50%;

  &:hover {
    box-shadow: 0 0 0 88px rgba(255, 255, 255, 10%);
    transition: ease-in 0.5s;
  }

  @media (max-width: 688px) {
    width: 144px;
    height: 144px;
    font-size: ${({ theme }) => theme.fonts.size.text.small};
    color: #949599;
  }
`;
