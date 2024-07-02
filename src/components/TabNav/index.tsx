
import * as S from './styled';

interface TabProps {
  children: React.ReactNode;
  to: string;
  borderDirection: 'bottom' | 'right';
  onClick?: () => void;
}

export const TabNav = ({ children, to, borderDirection, onClick }: TabProps) => {
  return (
    <S.TabNav to={to} borderDirection={borderDirection} onClick={onClick}>
      {children}
    </S.TabNav>
  );
};
