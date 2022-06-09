import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  padding: 0 0 120px 87px;
  max-width: 1440px;
  @media ${baseTheme.media.laptopL} {
    padding: 0 16px 60px;
  }
`;
export const Title = styled.h1`
  margin: 4px 0 0;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: ${baseTheme.colors.base};

  @media ${baseTheme.media.tablet} {
    min-width: 219px;
    font-size: 28px;
    line-height: 40px;
  }

`;
export const Flex = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
`;
export const BottomContainer = styled(Flex)`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TitleContainer = styled(Flex)`
  margin: 28px 0 32px;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  display: flex;

  @media ${baseTheme.media.tablet} {
    min-width: 219px;
    font-size: 28px;
    line-height: 40px;
    align-items: center;
    margin: 0px 0 32px;
  }
`;
export const Slider = styled.div`
  overflow: hidden;
  width: 100%;
  //margin: 0 0 32px;
`;
export const Cards = styled(Flex)<{ $currentIndex: number }>`
  transform: translateX(${(props) => (props.$currentIndex - 1) * -648}px);
  transition: transform 0.4s linear;
  gap: 28px;
  @media ${baseTheme.media.tablet} {
    gap: 12px;
    transform: translateX(${(props) => (props.$currentIndex - 1) * -330}px);
  }
`;
export const ButtonsContainer = styled(Flex)`
  margin: 24px 0 32px;
  width: 159px;
  height: 44px;
  align-items: center;
  gap: 12px;
  @media ${baseTheme.media.tablet} {
    width: 47px;
    margin: 16px auto 32px;
  }
`;
export const CodesContainer = styled(Flex)`
  padding: 0 86px 48px 0;
  flex-direction: column;
  gap: 32px;
  @media ${baseTheme.media.laptopL} {
    padding: 0px 16px 0;
  }
  @media ${baseTheme.media.laptop} {
    gap: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const LeftButton = styled.img <{ $isActive: boolean }>`
  opacity: ${(props) => (props.$isActive ? 1 : 0.6)};
  background-position: center;
  background-size: cover;
  transform: rotate(180deg);

  :hover {
    opacity: 0.6;
  }

  @media ${baseTheme.media.tablet} {
    display: none;
  }

`;
export const RightButton = styled.img<{ $isActive: boolean }>`
  opacity: ${(props) => (props.$isActive ? 1 : 0.6)};
  background-position: center;
  background-size: cover;

  :hover {
    opacity: 0.6;
  }

  @media ${baseTheme.media.tablet} {
    display: none;
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
export const BottomText = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 22px;
  @media ${baseTheme.media.laptop} {
    display: none;
  }
`;
export const PrimaryButton = styled.button`
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

  @media ${baseTheme.media.tablet} {
    background-color: ${baseTheme.colors.primary};
    color: ${baseTheme.colors.success};
    box-shadow: none;
    margin: 0;
    width: 66px;
    height: 18px;
    font-size: 16px;
    line-height: 18px;
  }

`;
export const ConfirmButton = styled(PrimaryButton)`
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

  @media ${baseTheme.media.tablet} {
    width: 343px;
    height: 72px;
    font-size: 16px;
    line-height: 18px;
    margin: 62px auto 0;
  }

`;
