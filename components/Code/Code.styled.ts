import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
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
export const Flex = styled.div`
  display: flex;
  @media ${baseTheme.media.laptop} {
    flex-direction: column;
  }
`;
export const Form = styled.form`
  display: flex;
  width: 79%;
  justify-content: flex-start;
  @media ${baseTheme.media.laptop} {
    flex-direction: column;
  }
`;

export const Container = styled(Flex)`
  min-width: 890px;
  width: 100%;
  height: 153px;
  border-radius: 12px;
  background: ${baseTheme.colors.secondary};
  @media ${baseTheme.media.laptop} {
    height: 338px;
    min-width: 343px;
    padding: 24px 20px 32px;
    position: relative;
  }
`;
export const LicenseContainer = styled(Flex)`
  width: 30%;
  margin: 24px 28px 31px 0;
  flex-direction: column;
  background: ${baseTheme.colors.secondary};
  @media ${baseTheme.media.laptop} {
    margin: 0;
    width: 80%;
  }
`;
export const LinkContainer = styled(Flex)<{ $isInactive: boolean }>`
  margin: 24px 56px 31px 0;
  width: ${(props) => (props.$isInactive ? '45%' : '62%')};
  flex-direction: column;
  border-radius: 5px;
  background: ${baseTheme.colors.secondary};
  @media ${baseTheme.media.laptopL} {
    margin: 24px 20px 31px 0;
  }
  @media ${baseTheme.media.laptop} {
    margin: 0;
  }
`;
export const StatusContainer = styled(Flex)`
  margin: 24px 20px 31px 0;
  max-width: 20%;
  flex-direction: column;
  border-radius: 5px;
  @media ${baseTheme.media.laptop} {
    display: none;
`;

export const Checkbox = styled.img`
  margin: 74px 48px 0 32px;
  width: 28px;
  height: 28px;
  @media ${baseTheme.media.laptop} {
    margin: 14px 20px 0 0;
  }
`;
export const LicenseCode = styled.input`
  background: #393939;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${baseTheme.colors.neutral};
  box-shadow: 0 2px 12px rgba(20, 20, 43, 0.06);
  border: none;
  border-radius: 6px;
  padding: 0 90px 0 25px;
  max-width: 296px;
  min-width: 146px;
  height: 68px;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${baseTheme.media.laptop} {
    width: 303px;
    padding: 0 97px 0 24px;
  }
`;
export const Domain = styled(LicenseCode)`
  max-width: 620px;
  padding: 0 34px 0 24px;
  min-width: 200px;
  @media ${baseTheme.media.laptop} {
    width: 303px;
    padding: 0 31px 0 24px;
  }

`;
export const Label = styled.label`
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${baseTheme.colors.neutral};
  margin: 0 0 12px 0;
  @media ${baseTheme.media.laptop} {
    margin: 24px 0 12px;
  }
`;

// @ts-ignore
export const ColoredText = styled.div <{ $color: string }>`
  margin: 20px 0 0 0;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${(props) => (baseTheme.colors[props.$color])};
`;
export const TopColoredText = styled.div <{ $color: string }>`
  display: none;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${(props) => (baseTheme.colors[props.$color])};
  @media ${baseTheme.media.laptop} {
    position: absolute;
    display: flex;
    top: 34px;
    left: 68px;
  }
`;
export const ActivateButton = styled.button`
  box-sizing: border-box;
  width: 111px;
  height: 58px;
  border-radius: 4px;
  margin: 57px 56px 48px -2px;
  box-shadow: 0 10px 28px rgba(252, 88, 66, 0.2);
  cursor: pointer;
  background-color: ${baseTheme.colors.base};
  color: ${baseTheme.colors.success};
  font-family: 'THICCCBOI', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;

  :hover {
    opacity: 0.6;
  }

  @media ${baseTheme.media.laptopL} {
    margin: 57px 20px 20px -2px;
  }
  @media ${baseTheme.media.laptop} {
    position: absolute;
    top: 20px;
    right: 20px;
    margin: 0;
  }
`;
