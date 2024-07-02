import * as S from './styled';

interface TitleProps {
  position?: string;
  text: string;
  variant: 'primary' | 'secondary'
}

export const Title = ({ position, text, variant }: TitleProps) => {
  return (
    <S.Title $variant={variant}>
      <span>{position}</span>
      {text}
    </S.Title>
  );
};
