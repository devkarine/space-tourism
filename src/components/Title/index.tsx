import * as S from './styled';

interface TitleProps {
  position: string;
  text: string;
}

export const Title = ({ position, text }: TitleProps) => {
  return (
    <S.Title>
      <span>{position}</span>
      {text}
    </S.Title>
  );
};
