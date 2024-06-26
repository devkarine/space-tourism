import React from 'react';
import * as S from './styled';

interface TabProps{
    children: React.ReactNode
    href: string
    borderDirection: 'bottom' | 'right'
}


export const TabNav = ({children , href, borderDirection}: TabProps) => {
    return(
        <S.TabNav href={href} borderDirection={borderDirection}>
            {children}
        </S.TabNav>
    )
}