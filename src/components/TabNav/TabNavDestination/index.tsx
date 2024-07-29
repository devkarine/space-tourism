import { TabNav } from '../styled';
import * as S from './styled';

interface TabNavDestinationProps {
  onTabClick: (destination: string) => void;
}

export const TabNavDestination = ({ onTabClick }: TabNavDestinationProps) => {
  return (
    <S.TabNavDestination>
      <TabNav
        to="#"
        onClick={() => onTabClick('moon')}
        borderDirection="bottom"
      >
        MOON
      </TabNav>
      <TabNav
        to="#"
        onClick={() => onTabClick('mars')}
        borderDirection="bottom"
      >
        MARS
      </TabNav>
      <TabNav
        to="#"
        onClick={() => onTabClick('europa')}
        borderDirection="bottom"
      >
        EUROPA
      </TabNav>
      <TabNav
        to="#"
        onClick={() => onTabClick('titan')}
        borderDirection="bottom"
      >
        TITAN
      </TabNav>
    </S.TabNavDestination>
  );
};
