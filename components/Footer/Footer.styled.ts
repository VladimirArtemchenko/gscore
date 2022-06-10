import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const Logo = styled.img`
  width: 170px;
  height: 42px;
  margin: 0;
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
  height: 126px;
  margin: 60px 0 60px 86px;
  box-sizing: border-box;
  gap: 24px;
  display: flex;
  flex-direction: column;
  @media ${baseTheme.media.mobileL} {
    margin: 60px 20px 60px;
    align-items: center;
  }

`;
export const FooterDescription = styled.p`
  width: 333px;
  color: ${baseTheme.colors.text};
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  @media ${baseTheme.media.mobileL} {
    text-align: center;
  }
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

  @media ${baseTheme.media.laptop} {
    flex-direction: column;
  }
`;
