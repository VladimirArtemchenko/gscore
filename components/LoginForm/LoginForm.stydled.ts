import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  width: 620px;
  box-sizing: border-box;
  margin: 0 auto 0;
  padding: 0;
`;
export const Title = styled.h1`
  margin: 0 0 32px;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: ${baseTheme.colors.base};
`;
export const Form = styled.form`

`;
export const Input = styled.input`
  width: 620px;
  height: 68px;
  border-radius: 5px;
  padding: 25px 0 25px 23px;
  margin-bottom: 24px;

  :last-child {
    margin-bottom: 0;
  }

  ::placeholder {
    color: ${baseTheme.colors.text};
  }
`;
export const SubmitButton = styled.button`
  width: 200px;
  height: 58px;
  border-radius: 4px;
  margin: 48px 0;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
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
