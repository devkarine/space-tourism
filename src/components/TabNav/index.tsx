import React from 'react';
import * as S from './styled';

interface TabProps{
    children: React.ReactNode
    to: string
    borderDirection: 'bottom' | 'right'
}


export const TabNav = ({children , to, borderDirection}: TabProps) => {
    return(
        <S.TabNav to={to} borderDirection={borderDirection}>
            {children}
        </S.TabNav>
    )
}