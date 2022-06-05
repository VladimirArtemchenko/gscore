import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';
import { FooterListLink } from '../Copyright';

export const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const ContactLink = styled(FooterListLink)`
  color: ${baseTheme.colors.success};
  display: flex;
  justify-content: center;
  margin: 0 auto 42px;
  border: none;
  padding: 0;
`;
export const Text = styled.div`
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: ${baseTheme.colors.base};
`;
export const TextHome = styled(Text)`
  margin: 33px auto 1px;
`;

export const Title = styled.h1`
  margin: 16px auto 98px;
  width: 638px;
  height: 54px;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  text-align: center;
  color: ${baseTheme.colors.base};
`;
export const Flex = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
