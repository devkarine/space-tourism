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
  position: relative;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 48px;
  width: 736px;
  height: 96px;
  background: ${({ theme }) => theme.colors.neutral[900]};
  backdrop-filter: blur(10px);
  padding: 0 64px;
`;

export const Position = styled.span`
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
  color: ${({ theme }) => theme.colors.light};
  font-weight: 700;
`;

export const DetailHeader = styled.hr`
  width: 60vw;
  height: 1px;
  border: 1px solid #979797;
  opacity: 0.25;
  position: absolute;
  margin-left: 100px;

  @media (max-width: 768px) {
    display: none;
  }
`;
