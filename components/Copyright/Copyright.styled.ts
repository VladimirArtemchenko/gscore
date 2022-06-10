import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const FooterList = styled.div`
  max-width: 627px;
  margin-top: 44px;
  box-sizing: border-box;
  display: flex;
  gap: 5px;
  @media ${baseTheme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
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
  @media ${baseTheme.media.tablet} {
    border: none;
  }

  :hover {
    opacity: 0.6;
  }

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
  @media ${baseTheme.media.tablet} {
    border: none;
  }
`;
