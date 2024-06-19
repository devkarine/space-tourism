import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 136px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 64px;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 48px;
  width: 736px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding-right: 64px;
  position: relative;

  span {
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const DetailHeader = styled.div`
  width: 485px;
  border: 0.5px solid #979797;
  margin-left: 100px;
  position: absolute;
  z-index: 99999;
`;
