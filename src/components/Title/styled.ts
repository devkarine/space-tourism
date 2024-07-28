import styled from 'styled-components';

interface TitleStyleProps {
  $variant: 'primary' | 'secondary';
}

export const Title = styled.h2<TitleStyleProps>`
  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? `
      font-family: ${theme.fonts.family.primary};
      font-size: ${theme.fonts.size.header.large};

      @media (max-width: 768px) {
      font-size: ${theme.fonts.size.header.medium};
      
    }
        
      `
      : `

      font-family: ${theme.fonts.family.secondary};
      font-size: ${theme.fonts.size.header.extraSmall};
      max-width: 357px ;
      

      @media (max-width: 768px) {
      font-size: ${theme.fonts.size.text.small};
      
    }

        
      `}

  span {
    padding-right: 10px;
    color: ${({ theme }) => theme.colors.neutral[600]};
  }
`;
