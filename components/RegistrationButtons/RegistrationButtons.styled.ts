import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
export const ChoiceButton = styled.div <{ $isActive: boolean }>`
  box-sizing: border-box;
  margin-top: 20px;
  width: 195px;
  height: 8px;
  background: ${(props) => (props.$isActive ? baseTheme.colors.success : baseTheme.colors.secondary)};
  border-radius: 4px;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`;
