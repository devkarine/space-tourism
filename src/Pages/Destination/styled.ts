import { styled } from "styled-components";

export const Container = styled.div`
  background-image: url('/assets/destination/background-destination-desktop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    background-image: url('/assets/destination/background-destination-tablet.jpg');
  }
`;