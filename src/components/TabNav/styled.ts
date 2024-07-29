import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface TabNavProps {
  to: string;
  borderDirection: 'bottom' | 'right';
  onTabClick?: () => void;
}

export const TabNav = styled(Link)<TabNavProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.light};
  background-color: transparent;
  cursor: pointer;
  border-bottom: ${({ borderDirection }) =>
    borderDirection === 'bottom' ? '3px solid transparent' : 'none'};
  border-right: ${({ borderDirection }) =>
    borderDirection === 'right' ? '3px solid transparent' : 'none'};

  &:hover {
    border-color: ${({ theme }) => theme.colors.neutral[500]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.light};
  }
`;
