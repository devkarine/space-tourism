import { styled } from 'styled-components';

export const Container = styled.div`
  background-image: url('/assets/destination/background-destination-desktop.jpg');
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
    background-image: url('/assets/destination/background-destination-tablet.jpg');
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
  }
`;

export const DestinationContent = styled.div`
  padding: 0 165px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

export const WrapperDestinations = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DestinationDescription = styled.p`
  padding-bottom: 40px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.neutral[500]};
`;

export const Distance = styled.div`
  display: flex;
  gap: 100px;
  padding-top: 40px;

  p {
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
  }

  span {
    font-family: ${({ theme }) => theme.fonts.family.primary};
    font-size: ${({ theme }) => theme.fonts.size.header.extraSmall};
    color: ${({ theme }) => theme.colors.light};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;
