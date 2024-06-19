import React from 'react';
import * as S from './styled';

interface TabProps{
    children: React.ReactNode
    href: string
}


export const TabNav = ({children , href}: TabProps) => {
    return(
        <S.TabNav href={href}>
            {children}
        </S.TabNav>
    )
}