import styled from 'styled-components';

export const ImgDestination = styled.img`
  width: 480px;
  height: 480px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 375px) {
    width: 150px;
    height: 150px;
  }
`;
