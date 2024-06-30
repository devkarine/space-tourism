import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/assets/home/background-home-desktop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    background-image: url('/assets/home/background-home-tablet.jpg');
  }
`;

export const HomeContent = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 30px;
  height: 390px;
  max-width: 1357px;
  padding: 0 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 555px;
    text-align: center;
  }
`;

export const HomeIntro = styled.div`
  max-width: 540px;

  span {
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-size: ${({ theme }) => theme.fonts.size.header.extraSmall};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.family.primary};
    font-size: ${({ theme }) => theme.fonts.size.header.extraLarge};

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.header.large};
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.family.tertiary};
    font-size: ${({ theme }) => theme.fonts.size.text.small};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
    }
  }
`;

export const ButtonContent = styled.div`
  width: 540px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    width: inherit;
  }
`;
