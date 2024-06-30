import { Link } from 'react-router-dom';
import * as S from './styled';

export const Logo = () => {
  return (
    <Link to="/home">
      <S.Logo src="assets/shared/logo.svg" alt="Logo" />
    </Link>
  );
};
