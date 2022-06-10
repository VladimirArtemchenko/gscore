import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div<{ $isActive: boolean }>`
  opacity: ${(props) => (props.$isActive ? 1 : 0.6)};
`;
export const Title = styled.h1`
  margin: 0 0 32px;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: ${baseTheme.colors.base};
  @media ${baseTheme.media.tablet} {
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
  }
`;
export const Container = styled.div`
  box-sizing: border-box;
  width: 620px;
  height: 334px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: ${baseTheme.colors.secondary};
  @media ${baseTheme.media.tablet} {
    width: 318px;
    height: 268px;
  }
`;
export const Flex = styled(Container)`
  margin: 48px 0 0;
  padding: 0 64px 0 32px;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0;
  border-bottom: 1px solid #969696;
  @media ${baseTheme.media.tablet} {
    padding: 0 24px 0 16px;
    margin: 32px 0 0;
  }
`;
export const SecondFlex = styled(Flex)`
  margin: 32px 0 0;
  height: 26px;
  border-bottom: none;
  padding: 0 81px 0 32px;
  @media ${baseTheme.media.tablet} {
    padding: 0 50px 0 16px;
    margin: 24px 0 0;
  }
`;
export const BottomFlex = styled(Flex)`
  margin: 12px 32px 0;
  max-height: 18px;
  background: none;
  border: none;
  padding: 0;
  @media ${baseTheme.media.tablet} {
    margin: 4px 16px 0;
  }
`;
export const Text = styled.div`
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${baseTheme.colors.base};
  @media ${baseTheme.media.tablet} {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
  }

`;
export const ColoredText = styled(Text) <{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? baseTheme.colors.active : baseTheme.colors.success)};
`;
export const SmallText = styled(Text)`
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  @media ${baseTheme.media.tablet} {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }

`;
export const ThinText = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #969696;
`;
export const SubmitButton = styled.button`
  box-sizing: border-box;
  width: 120px;
  height: 58px;
  border-radius: 4px;
  margin: 32px 0 48px 32px;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  cursor: pointer;
  background-color: ${baseTheme.colors.base};
  color: ${baseTheme.colors.success};
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  :hover {
    opacity: 0.6;
  }

  @media ${baseTheme.media.tablet} {
    margin: 24px 16px 32px;
  }
`;
