import * as S from './styled'

interface ImgDestinationProps{
    src: string
    alt: string
}

export const ImgDestination = ({alt, src}: ImgDestinationProps) =>{
    return(
        <S.ImgDestination src={src} alt={alt} />
    )
}