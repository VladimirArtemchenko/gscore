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
  flex-wrap: wrap;
  @media ${baseTheme.media.tablet} {
    gap: 20px;
    justify-content: space-around;
  }
`;
