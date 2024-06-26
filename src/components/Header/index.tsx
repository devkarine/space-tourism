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
      {/* <S.DetailHeader/> */}
      {windowWidth > 768 ? (
        <S.TabContainer>
          <TabNav href="#" borderDirection="bottom">
            <span>00</span>HOME
          </TabNav>
          <TabNav href="#" borderDirection="bottom">
            <span>01</span>DESTINATION
          </TabNav>
          <TabNav href="#" borderDirection="bottom">
            <span>02</span>CREW
          </TabNav>
          <TabNav href="#" borderDirection="bottom">
            <span>03</span>TECHNOLOGY
          </TabNav>
        </S.TabContainer>
      ) : (
        <ModalContent>
          <TabNav href="#" borderDirection="right">
            <span>00</span>HOME
          </TabNav>
          <TabNav href="#" borderDirection="right">
            <span>01</span>DESTINATION
          </TabNav>
          <TabNav href="#" borderDirection="right">
            <span>02</span>CREW
          </TabNav>
          <TabNav href="#" borderDirection="right">
            <span>03</span>TECHNOLOGY
          </TabNav>
        </ModalContent>
      )}
    </S.Container>
  );
};

//TODO voltar e arrumar os DetailHeader
