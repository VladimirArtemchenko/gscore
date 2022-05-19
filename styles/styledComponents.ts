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
export const UserContainer=styled.div`
width: 269px;
  height: 58px;
  display: flex;
  align-items: center;
`
export const FooterContainer = styled.footer`
  max-width: 1440px;
  margin: 0 auto 0;
  box-sizing: border-box;
  // background: ${baseTheme.colors.primary};
  display: flex;
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
export const FooterDescription= styled.p`
`