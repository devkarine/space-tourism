import { useState } from 'react';
import * as S from './styled';

export interface PaginationProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'large';
  children?: React.ReactNode;
}

export const Pagination = ({ variant, size, children }: PaginationProps) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <S.PaginationContainer
      size={size}
      $variant={variant}
      onFocus={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      style={{
        background: isSelected ? '#FFFFFF' : '',
        color: isSelected ? '#0B0D17' : ''
      }}
    >
      {children}
    </S.PaginationContainer>
  );
};
