import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';
import arrow from '../../public/arrow.svg';

export const Root = styled.div`
  padding: 0 0 0 87px;
  max-width: 1440px;
`;
export const Title = styled.h1`
  margin: 4px 0 0;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: ${baseTheme.colors.base};
`;
export const Flex = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
`;
export const TitleContainer = styled(Flex)`
  margin: 28px 0 32px;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  display: flex;
`;
export const Slider = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 0 0 32px;
`;
export const Cards = styled(Flex)<{ $currentIndex: number }>`
  transform: translateX(${(props) => (props.$currentIndex - 1) * -648}px);
  transition: transform 0.4s linear;
  gap: 28px;
`;
export const ButtonsContainer = styled(Flex)`
  margin: 24px 0 32px;
  width: 159px;
  height: 44px;
  align-items: center;
  gap: 12px;
`;
export const CodesContainer = styled(Flex)`
  padding: 0 86px 120px 0;
  flex-direction: column;
  gap: 32px;
`;
export const LeftButton = styled.img <{ $isActive: boolean }>`
  opacity: ${(props) => (props.$isActive ? 1 : 0.6)};
  background-position: center;
  background-size: cover;
  transform: rotate(180deg);

  :hover {
    opacity: 0.6;
  }
`;
export const RightButton = styled.img<{ $isActive: boolean }>`
  opacity: ${(props) => (props.$isActive ? 1 : 0.6)};
  background-position: center;
  background-size: cover;

  :hover {
    opacity: 0.6;
  }
`;
export const Text = styled.p`
  margin: 0;
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
`;
export const UpgradeButton = styled.button`
  border: none;
  padding: 0;
  box-sizing: border-box;
  width: 152px;
  height: 72px;
  box-shadow: 0 10px 28px rgba(252, 88, 66, 0.2);
  border-radius: 6px;
  margin: 0 86px 0 0;
  cursor: pointer;
  background-color: ${baseTheme.colors.success};
  color: ${baseTheme.colors.base};
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  :hover {
    opacity: 0.6;
  }
`;
