import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/assets/crew/background-crew-desktop.jpg');
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
    background-image: url('/assets/crew/background-crew-tablet.jpg');
  }
`;

export const CrewContent = styled.div`
  padding: 0 165px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  @media (max-width: 930px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const WrapperCrew = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 180px;
  padding: 5px;
  height: 631px;
  /* max-width: 539px; */
`;

export const RoleCrew = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.header.small};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-weight: 400;
  height: 37px;
  margin: 24px 0;
`;

export const NameCrew = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.header.medium};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  color: ${({ theme }) => theme.colors.light};
  height: 143px;
  font-weight: 400;
  max-width: 500px;
  margin-bottom: 24px;
`;

export const DescriptionCrew = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.text.small};
  font-family: ${({ theme }) => theme.fonts.family.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
  line-height: 180%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 930px) {
    text-align: center;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 40px;

  @media (max-width: 930px) {
    justify-content: center;
  }
`;

export const ImgCrew = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, #0b0d17);
  }

  img {
    width: 539px;
    height: 636px;

    @media (max-width: 1300px) {
      width: 400px;
      height: 469px;
    }

    @media (max-width: 768px) {
      width: 300px;
      height: 369px;
    }
  }
`;
