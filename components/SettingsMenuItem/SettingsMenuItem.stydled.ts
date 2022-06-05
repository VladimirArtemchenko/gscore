import styled from 'styled-components';
import Link from 'next/link';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div<{ $isActive: boolean }>`
  margin-bottom: -2px;
  padding: 0 24px 12px;
  box-sizing: border-box;
  border-bottom: 2px solid ${(props) => (props.$isActive ? baseTheme.colors.success : baseTheme.colors.secondary)}
`;
export const SettingsLink = styled(Link)<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? baseTheme.colors.success : baseTheme.colors.secondary)};
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
`;
