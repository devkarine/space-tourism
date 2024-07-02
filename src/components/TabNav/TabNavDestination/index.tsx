
import { TabNav } from '../styled';
import * as S from './styled';

interface TabNavDestinationProps {
  onTabClick: (destination: string) => void;
}

export const TabNavDestination = ({ onTabClick }: TabNavDestinationProps) => {
  return (
    <S.TabNavDestination>
      <TabNav to="#" onClick={() => onTabClick('moon')} borderDirection="bottom">
        Moon
      </TabNav>
      <TabNav to="#" onClick={() => onTabClick('mars')} borderDirection="bottom">
        Mars
      </TabNav>
      <TabNav to="#" onClick={() => onTabClick('europa')} borderDirection="bottom">
        Europa
      </TabNav>
      <TabNav to="#" onClick={() => onTabClick('titan')} borderDirection="bottom">
        Titan
      </TabNav>
    </S.TabNavDestination>
  );
};
