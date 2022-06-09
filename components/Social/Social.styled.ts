import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const SocialIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 0;

  :hover {
    opacity: 0.6;
  }
`;
export const FooterSocialContainer = styled.div`
  margin: 41px 0 0;
  box-sizing: border-box;
  gap: 16px;
  display: flex;
  @media ${baseTheme.media.tablet} {
    justify-content: center;
  }
`;
