import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface TabNavProps {
  to: string;
  borderDirection: 'bottom' | 'right';
}

export const TabNav = styled(Link)<TabNavProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
  color: ${({ theme }) => theme.colors.light};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    ${({ borderDirection }) =>
      borderDirection === 'bottom'
        ? 
        'border-bottom: 3px solid #85868b;'
        : 
        'border-right: 3px solid #85868b;'}
  }

  &:focus {
    ${({ borderDirection }) =>
      borderDirection === 'bottom'
        ? 'border-bottom: 3px solid white;'
        : 'border-right: 3px solid white;'}
  }
`;
