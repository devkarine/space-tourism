import { Header } from '../../components/Header';
import { ImgDestination } from '../../components/ImgDestination';
import { TabNav } from '../../components/TabNav';
import { Title } from '../../components/Title';
import * as S from './styled';

export const Destination = () => {
  return (
    <S.Container>
      <Header />
      <Title  position={"01"} text={"PICK YOUR DESTINATION"}/>

      <S.DestinationContent>
        <ImgDestination src={'/assets/destination/image-moon.png'} alt={"Lua"}/>

        <section>
          <nav>
            <TabNav to="/moon" borderDirection={'bottom'}>
              Moon
            </TabNav>
            <TabNav to="/" borderDirection={'bottom'}>
              Mars
            </TabNav>
            <TabNav to="/" borderDirection={'bottom'}>
              Europa
            </TabNav>
            <TabNav to="/" borderDirection={'bottom'}>
              Titans
            </TabNav>
          </nav>
          <div>
            <h1></h1>
            <p></p>
            <div>
              <div>
                <p></p>
                <p></p>
              </div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </section>
      </S.DestinationContent>
    </S.Container>
  );
};
