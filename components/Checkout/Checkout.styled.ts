import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  max-width: 620px;
  box-sizing: border-box;
  margin: 0 auto 0;
  padding: 0;
  @media ${baseTheme.media.tablet} {
    padding: 0 10px 0;
  }
`;
export const Title = styled.h1`
  margin: 0 0 32px;
  max-width: 638px;
  height: 54px;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: ${baseTheme.colors.base};
`;
export const Container = styled.div`
  box-sizing: border-box;
  max-width: 620px;
  height: 232px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: ${baseTheme.colors.secondary};

`;
export const Flex = styled(Container)`
  margin: 48px 0 0;
  padding: 0 72px 0 32px;
  height: 66px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0;
  border-bottom: 1px solid ${baseTheme.colors.text};
`;
export const SecondFlex = styled(Flex)`
  margin: 32px 0 0;
  height: 76px;
  border-bottom: none;
  padding: 0 48px 0 32px;
`;
export const BottomFlex = styled(Flex)`
  margin: 24px 0 48px;
  background: none;
  border: none;
  padding: 0;
`;
export const Text = styled.div`
  font-family: 'THICCCBOI', sans-serif;
  height: 34px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: ${baseTheme.colors.base};
`;
export const ThinText = styled(Text)`
  height: 38px;
  font-weight: 400;
  line-height: 38px;
`;
export const BigText = styled(Text)`
  font-size: 28px;
  line-height: 40px;
`;
export const SubmitButton = styled.button`
  width: 200px;
  height: 58px;
  border-radius: 4px;
  margin: 0 0 290px 0;
  box-shadow: 0 10px 28px rgba(252, 88, 66, 0.2);
  cursor: pointer;
  background-color: ${baseTheme.colors.success};
  color: ${baseTheme.colors.base};
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  :hover {
    opacity: 0.6;
  }
`;
export const Basket = styled.img`
  margin: 0 0 -4px 9px;
  width: 24px;
  height: 24px;
`;
