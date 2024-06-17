import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode
}
export const Button = ({children, ...props}: ButtonProps) =>{
    return (
    <S.ButtonContainer {...props}>
      {children}
    </S.ButtonContainer>
    )
}