import styled from 'styled-components';

interface PaginationContainerProps {
  $variant: 'primary' | 'secondary';
  size: 'small' | 'large';
}

export const PaginationContainer = styled.button<PaginationContainerProps>`
  width: ${({ size }) => (size === 'small' ? '15px' : '80px')};
  height: ${({ size }) => (size === 'small' ? '15px' : '80px')};
  border-radius: 50%;
  transition:
    background 0.3s,
    color 0.3s;

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? `
        background:${theme.colors.neutral[800]};

        &:hover {
            background:${theme.colors.neutral[500]};
        }
      `
      : `

      color: ${theme.colors.light} ;
      border: solid 1px ${theme.colors.neutral[800]};
      font-size: ${theme.fonts.size.header.small};

      &:hover {
            border: solid 1px ${theme.colors.light};
        }

        
      `}

  @media (max-width: 688px ) {
    width: ${({ size }) => (size === 'small' ? '10px' : '56px')};
    height: ${({ size }) => (size === 'small' ? '10px' : '56px')};
  }
`;
