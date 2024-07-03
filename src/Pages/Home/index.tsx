import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import * as S from './styled';

export const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.HomeContent>
        <S.HomeIntro>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <Title text={"SPACE"} variant={'primary'}/>

          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </S.HomeIntro>
        <S.ButtonContent>
          <Button>
            <Link to={'/destination'}>EXPLORER</Link>
          </Button>
        </S.ButtonContent>
      </S.HomeContent>
    </S.Container>
  );
};
