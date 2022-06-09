import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const HeaderContainer = styled.header`
  max-width: 1440px;
  padding: 32px 87px;
  margin: 0 auto 0;
  box-sizing: border-box;
  background: ${baseTheme.colors.primary};
  display: flex;
  justify-content: space-between;
  @media ${baseTheme.media.tablet} {
    padding: 26px 16px 79px;
  }
`;
export const Logo = styled.img`
  width: 170px;
  height: 42px;
  margin: 0;
  @media ${baseTheme.media.tablet} {
    display: none;
  }
`;
export const LogoMobile = styled.img`
  display: none;
  width: 130px;
  height: 32px;
  margin: 0;
  @media ${baseTheme.media.tablet} {
    display: flex;
  }
`;
export const UserContainer = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  @media ${baseTheme.media.tablet} {
    display: none;
  }
`;
export const MenuIcon = styled.img<{ $isMenuOpen: boolean }>`
  transform: ${(props) => (props.$isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  margin-left: 12px;
`;
export const GreyText = styled.p`
  margin: 0 32px 0 0;
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
  color: ${baseTheme.colors.base};

  :hover {
    opacity: 0.6;
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
  cursor: pointer;
  color: ${baseTheme.colors.base};

  :hover {
    opacity: 0.6;
  }
`;
export const Burger = styled.img`
  display: none;
  @media ${baseTheme.media.tablet} {
    display: flex;
  }
`;
