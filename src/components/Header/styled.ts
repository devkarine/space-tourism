import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  height: 136px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 64px;
  gap: 20px;
  /* position: relative; */
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 48px;
  width: 736px;
  height: 96px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0 64px;
  

  span {
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
    color: ${({ theme }) => theme.colors.light};
  }
`;

// export const DetailHeader = styled.div`
//   min-width: 510px;
//   border: 0.5px solid #979797;
//   position: absolute;
//   z-index: 99999;
//   margin-left: 100px;



//   @media (max-width: 768px) {
//     display:  none;
//   }
// `;
