import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  position: absolute;
  top: 94px;
  left: 80%;
  z-index: 100;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border-radius: 12px;
  background-color: ${baseTheme.colors.secondary};
  min-width: 188px;
`;
export const MenuImage = styled.img`
  margin: 0;
`;
export const MenuContainer = styled.div`
  padding: 28px 0 28px 24px;
  gap: 32px;
  display: flex;
  flex-direction: column;

`;
export const MenuItem = styled(MenuContainer)`
  flex-direction: row;
  gap: 12px;
  padding: 0;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`;
export const Text = styled.p`
  margin: 0;
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: ${baseTheme.colors.base};
`;
