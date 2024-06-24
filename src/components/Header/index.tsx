import { Logo } from "../Logo"
import { TabNav } from "../TabNav"
import * as S from './styled'

export const Header = () => {
    return(
        <S.Container>
            <Logo/>
            {/* <S.DetailHeader></S.DetailHeader> */}
            <S.TabContainer>
                <TabNav href="#"><span>00</span>HOME</TabNav>
                <TabNav href="#"><span>01</span>DESTINATION</TabNav>
                <TabNav href="#"><span>02</span>CREW</TabNav>
                <TabNav href="#"><span>03</span>TECHNOLOGY</TabNav>
            </S.TabContainer>

        </S.Container>
    )
}

//TODO voltar e arrumar os DetailHeader
