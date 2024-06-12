import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size: 'small' | 'large',
    children?: ReactNode
}
export const Button = ({children, size, ...props}: ButtonProps) =>{
    return (
    <S.ButtonContainer size={size} {...props}>
      {children}
    </S.ButtonContainer>
    )
}