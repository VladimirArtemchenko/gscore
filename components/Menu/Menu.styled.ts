import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  position: absolute;
  top: 94px;
  right: 86px;
  z-index: 100;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border-radius: 12px;
  background-color: ${baseTheme.colors.secondary};
  min-width: 188px;
  @media ${baseTheme.media.tablet} {
    top: 0;
    right: 0;
    border-radius: 0;
    height: 100vh;
  }
`;
export const Logo = styled.img`
  display: none;
  width: 130px;
  height: 32px;
  margin: 0;
  @media ${baseTheme.media.tablet} {
    display: flex;
    margin: 32px 50px 52px 0;
  }
`;
export const Close = styled.img`
  display: none;
  margin: 32px 32px 52px 0px;
  @media ${baseTheme.media.tablet} {
    display: flex;
  }
`;
export const MenuImage = styled.img`
  margin: 0;
`;
export const MenuContainer = styled.div`
  padding: 28px 0 28px 24px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  @media ${baseTheme.media.tablet} {
    gap: 0;
  }
`;
export const Flex = styled.div`
  display: none;
  @media ${baseTheme.media.tablet} {
    display: flex;
  }
`;
export const MenuLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  @media ${baseTheme.media.tablet} {
    display: none;
    gap: 25px;
  }
`;
export const FlexColumn = styled(Flex)`
  margin-top: 32px;
  @media ${baseTheme.media.tablet} {
    flex-direction: column;
    gap: 26px;
  }
`;
export const MenuItem = styled(MenuContainer)`
  flex-direction: row;
  gap: 12px;
  padding: 0;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }

  @media ${baseTheme.media.tablet} {
    padding: 0px 0 0px 24px;
  }
`;
export const Text = styled.p`
  margin: 0;
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: ${baseTheme.colors.base};

`;
export const TextMobile = styled(Text)`
  display: none;
  @media ${baseTheme.media.tablet} {
    display: flex;
  }
`;
export const TextMobileGrey = styled(Text)`
  display: none;
  @media ${baseTheme.media.tablet} {
    display: flex;
    color: ${baseTheme.colors.neutral};
  }
`;
export const Line = styled.span`
  display: none;
  margin: 24px 20px;
  width: 212px;
  opacity: 0.7;
  border-top: 1px solid #ffffff;
  box-sizing: border-box;
  @media ${baseTheme.media.tablet} {
    display: flex;
  }
`;
