import React from 'react';
import * as S from './styled';

interface TabProps{
    children: React.ReactNode
}


export const TabNav = ({children}: TabProps) => {
    return(
        <S.TabNav>
            {children}
        </S.TabNav>
    )
}