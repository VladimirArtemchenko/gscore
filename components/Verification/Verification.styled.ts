import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const ButtonsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 32px auto 64px;
  max-width: 620px;
  min-height: 42px;
  @media ${baseTheme.media.tablet} {
    max-width: 320px;
    margin: 0 auto 64px;
  }
`;
export const Text = styled.div`
  max-width: 320px;
  display: none;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: ${baseTheme.colors.base};
  @media ${baseTheme.media.tablet} {
    display: flex;
    margin: 32px auto 0;

  }
`;
