import { Header } from '../../components/Header';
import { TabNav } from '../../components/TabNav';
import { Title } from '../../components/Title';
import * as S from './styled';

export const Destination = () => {
  return (
    <S.Container>
      <Header />
      <Title  position={"01"} text={"PICK YOUR DESTINATION"}/>

      <section>
        <section>
          <img src="" alt="" />
        </section>
        <section>
          <div>
            <TabNav to="/" borderDirection={'bottom'}>
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
          </div>
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
      </section>
    </S.Container>
  );
};
