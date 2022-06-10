import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  box-sizing: border-box;
  padding: 32px 87px;
  @media ${baseTheme.media.laptop} {
    padding: 73px 16px;
  }
`;
export const Title = styled.h1`
  margin: 0 0 48px;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: ${baseTheme.colors.base};
`;
export const SubTitle = styled.h2`
  margin: 0 0 24px;
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: ${baseTheme.colors.base};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  max-width: 620px;
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
  width: 160px;
  height: 58px;
  border-radius: 4px;
  margin: 48px 0;
  box-shadow: 0 10px 28px rgba(252, 88, 66, 0.2);
  cursor: pointer;
  background-color: ${baseTheme.colors.success};
  color: ${baseTheme.colors.base};
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  border: none;
  @media ${baseTheme.media.laptop} {
    margin: 48px auto;
  }
`;
