import styled from "styled-components";
import {baseTheme} from "./theme";


export const HeaderContainer = styled.header`
  max-width: 1440px;
  padding: 32px 87px;
  margin: 0 auto 0;
  box-sizing: border-box;
  background: ${baseTheme.colors.primary};
  display: flex;
  justify-content: space-between;
`
export const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`
export const Logo = styled.img`
  width: 170px;
  height: 42px;
  margin: 0;
`
export const UserContainer = styled.div`
  width: 269px;
  height: 58px;
  display: flex;
  align-items: center;
`
export const FooterContainer = styled.footer`
  border-top: 1px solid #393939;
  max-width: 1440px;
  margin: 0 auto 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`
export const FooterColumn = styled.div`
  width: 333px;
  height: 126px;
  margin: 60px 0 60px 86px;
  box-sizing: border-box;
  gap: 24px;
  display: flex;
  flex-direction: column;
`
export const FooterDescription = styled.p`
  width: 333px;
  color: ${baseTheme.colors.text};
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
`
export const FooterLine = styled.span`
  border-top: 1px solid #393939;
  box-sizing: border-box;
  width: 88%;
  margin: 0 auto 0;
`
export const FooterBottomContainer = styled.footer`
  max-width: 100%;
  margin: 0 0 42px 68px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`
export const FooterList = styled.div`
  width: 627px;
  margin-top: 44px;
  box-sizing: border-box;
  display: flex;
  gap: 5px;
`
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
`
export const FooterListItem = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  padding-right: 5px;
  color: ${baseTheme.colors.text};
  border-right: 2px solid #393939;
  text-align: end;
`
export const FooterSocialContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  margin-top: 42px;
`
export const SocialIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 0;
`