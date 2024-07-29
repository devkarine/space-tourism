import { useEffect, useState } from 'react';
import { Logo } from '../Logo';
import { ModalContent } from '../Modal';
import { TabNav } from '../TabNav';
import * as S from './styled';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Container>
      <Logo />
      <S.DetailHeader />
      {windowWidth > 768 ? (
        <S.TabContainer>
          <TabNav to="/home" borderDirection="bottom">
            <S.Position>00</S.Position>HOME
          </TabNav>

          <TabNav to="/destination" borderDirection="bottom">
            <S.Position>01</S.Position>DESTINATION
          </TabNav>
          <TabNav to="/crew" borderDirection="bottom">
            <S.Position>02</S.Position>CREW
          </TabNav>
          <TabNav to="/technology" borderDirection="bottom">
            <S.Position>03</S.Position>TECHNOLOGY
          </TabNav>
        </S.TabContainer>
      ) : (
        <ModalContent>
          <TabNav to="/home" borderDirection="right">
            <S.Position>00</S.Position>HOME
          </TabNav>
          <TabNav to="/destination" borderDirection="right">
            <S.Position>01</S.Position>DESTINATION
          </TabNav>
          <TabNav to="/crew" borderDirection="right">
            <S.Position>02</S.Position>CREW
          </TabNav>
          <TabNav to="/technology" borderDirection="right">
            <S.Position>03</S.Position>TECHNOLOGY
          </TabNav>
        </ModalContent>
      )}
    </S.Container>
  );
};
