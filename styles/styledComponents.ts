import styled from 'styled-components';
import { baseTheme } from './theme';

export const HeaderContainer = styled.header`
  max-width: 1440px;
  padding: 32px 87px;
  margin: 0 auto 0;
  box-sizing: border-box;
  background: ${baseTheme.colors.primary};
  display: flex;
  justify-content: space-between;
`;
export const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const Flex = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 170px;
  height: 42px;
  margin: 0;
`;
export const UserContainer = styled.div`
  width: 269px;
  height: 58px;
  display: flex;
  align-items: center;
`;
export const FooterContainer = styled.footer`
  border-top: 1px solid #393939;
  max-width: 1440px;
  margin: 0 auto 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export const FooterColumn = styled.div`
  width: 333px;
  height: 126px;
  margin: 60px 0 60px 86px;
  box-sizing: border-box;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;
export const FooterDescription = styled.p`
  width: 333px;
  color: ${baseTheme.colors.text};
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
`;
export const FooterLine = styled.span`
  border-top: 1px solid #393939;
  box-sizing: border-box;
  width: 88%;
  margin: 0 auto 0;
`;
export const FooterBottomContainer = styled.footer`
  max-width: 100%;
  margin: 0 86px 42px 68px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
export const FooterList = styled.div`
  width: 627px;
  margin-top: 44px;
  box-sizing: border-box;
  display: flex;
  gap: 5px;
`;
export const FooterListLink = styled.a`
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-decoration: underline;
  color: white;
  text-align: end;
  border-right: 2px solid #393939;
  padding-right: 5px;

  &:last-child {
    border: none;
  }
`;
export const FooterListItem = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  padding-right: 5px;
  color: ${baseTheme.colors.text};
  border-right: 2px solid #393939;
  text-align: end;
`;
export const FooterSocialContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  margin-top: 42px;
`;
export const SocialIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 0;
`;
export const PriceCard = styled.div < { $isHovered: boolean } > `
  background: ${(props) => (props.$isHovered ? baseTheme.colors.success : baseTheme.colors.secondary)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 48px;
  width: 404px;
  height: 612px;
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
`;
export const Price = styled.div`
  font-family: 'DM Sans', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 66px;
  text-align: center;
  color: ${baseTheme.colors.base};
`;
export const License = styled.div`
  margin: 4px 0 8px;
  width: 147px;
  height: 26px;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  color: ${baseTheme.colors.base};
  
`;
export const Text = styled.div`
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: ${baseTheme.colors.base};
`;
export const CardLine = styled.span`
  margin: 40px 0 40px;
  width: 308px;
  opacity: 0.7;
  border-top: 1px solid #ffffff;
  box-sizing: border-box;
`;
export const CardList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 19px;
`;
export const CardListItem = styled.li`
  display: flex;
  gap: 14px;
  padding: 0;
  margin: 0;
`;
export const ListIcon = styled.img`
  width: 26px;
  height: 26px;
`;
export const PrimaryButton = styled.button < { $isHovered: boolean } > `
  width: 308px;
  height: 72px;
  color: ${(props) => (props.$isHovered ? baseTheme.colors.success : baseTheme.colors.secondary)};
`;
