import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/assets/home/background-home-desktop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    background-image: url('/assets/home/background-home-tablet.jpg');
  }

  @media (max-width: 480px) {
    background-image: url('/assets/home/background-home-mobile.jpg');
  }
`;
