import { styled } from 'styled-components';

export const Container = styled.div`
  background-image: url('/assets/technology/background-technology-desktop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    background-image: url('/assets/technology/background-technology-tablet.jpg');
  }
`;

export const WrapperTecnology = styled.div`
  padding: 0 0 0 165px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 95px;
  padding-bottom: 30px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const TechnologyContent = styled.div`
  max-width: 500px;

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.header.small};
    font-family: ${({ theme }) => theme.fonts.family.primary};
    color: ${({ theme }) => theme.colors.neutral[500]};
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.text.medium};
      text-align: center;
    }

    @media (max-width: 375px) {
      font-size: ${({ theme }) => theme.fonts.size.text.small};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.size.header.medium};
    font-family: ${({ theme }) => theme.fonts.family.primary};
    color: ${({ theme }) => theme.colors.light};

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.header.small};
      text-align: center;
    }

    @media (max-width: 375px) {
      font-size: ${({ theme }) => theme.fonts.size.text.medium};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fonts.size.text.small};
    font-family: ${({ theme }) => theme.fonts.family.tertiary};
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 180%;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
      text-align: center;
    }
  }
`;

export const PaginationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ImgTechnology = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
