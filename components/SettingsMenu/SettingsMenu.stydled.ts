import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0 0 48px;
  border-bottom: 2px solid ${baseTheme.colors.secondary}
`;
export const Text = styled.div`
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: ${baseTheme.colors.base};
`;
