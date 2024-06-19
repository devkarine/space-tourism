import styled from 'styled-components';

export const TabNav = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: ${({ theme }) => theme.fonts.size.header.extraSmall};
  color: ${({ theme }) => theme.colors.light};
  width: 97px;
  height: 96px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #85868b;
  }

  &:focus {
    border-bottom: 3px solid white;
  }

  //TODO Resolver o focus que não está funcionando
`;
