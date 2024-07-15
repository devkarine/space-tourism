import * as S from './styled';

export interface PaginationProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'large';
  isSelected: boolean;
  onClick: () => void;
}

export const Pagination = ({ variant, size, isSelected, onClick }: PaginationProps) => {
  return (
    <S.PaginationContainer
      size={size}
      $variant={variant}
      onClick={onClick}
      style={{
        background: isSelected ? '#FFFFFF' : '',
        color: isSelected ? '#0B0D17' : ''
      }}
    />
  );
};
