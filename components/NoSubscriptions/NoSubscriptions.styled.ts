import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  padding: 200px 0 240px 0px;
  max-width: 1440px;
`;
export const Title = styled.h1`
  margin: 0 0 8px;
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  color: ${baseTheme.colors.base};
`;
export const Flex = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NoSubscride = styled.img`
  margin-bottom: 25px;
`;
export const Text = styled.p`
  margin: 0 0 32px;
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: ${baseTheme.colors.base};
`;
export const PurchaseButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  border: none;
  padding: 0;
  box-sizing: border-box;
  width: 164px;
  height: 70px;
  box-shadow: 0 10px 28px rgba(252, 88, 66, 0.2);
  border-radius: 6px;
  margin: 0;
  cursor: pointer;
  background-color: ${baseTheme.colors.success};
  color: ${baseTheme.colors.base};

  :hover {
    opacity: 0.6;
  }
`;
