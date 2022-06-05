import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
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
`;
export const Logo = styled.img`
  width: 170px;
  height: 42px;
  margin: 0;
`;
export const UserContainer = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
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
  color: ${baseTheme.colors.neutral};

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
