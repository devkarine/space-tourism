import { Header } from '../../components/Header';
import { TabNav } from '../../components/TabNav';
import * as S from './styled';

export const Destination = () => {
  return (
    <S.Container>
      <Header />
      <h3>
        <span>01</span>PICK YOUR DESTINATION
      </h3>

      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
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
        </div>
      </div>
    </S.Container>
  );
};
