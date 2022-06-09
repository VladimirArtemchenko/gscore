import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const Container = styled.div <{ $isHovered: boolean }>`
  background: ${(props) => (props.$isHovered ? baseTheme.colors.success : baseTheme.colors.secondary)};
  transform: ${(props) => (props.$isHovered ? 'translateY(-50px)' : 'translateY(0px)')};
  transition: transform 0.4s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 48px;
  width: 404px;
  height: 612px;
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  @media ${baseTheme.media.laptop} {
    width: 96%;
    padding: 21px 24px;
    margin: 0px auto;
  }
`;
export const Price = styled.div`
  font-family: 'DM Sans', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 66px;
  text-align: center;
  color: ${baseTheme.colors.base};
`;
export const License = styled.div`
  margin: 4px 0 8px;
  width: 147px;
  height: 26px;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  color: ${baseTheme.colors.base};
`;
export const CardLine = styled.span`
  margin: 40px 0 40px;
  width: 308px;
  opacity: 0.7;
  border-top: 1px solid #ffffff;
  box-sizing: border-box;
`;
export const CardList = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const CardListItem = styled.div`
  display: flex;
  height: 26px;
  gap: 14px;
  padding: 0;
  margin: 0;
`;
export const ListIcon = styled.img`
  width: 26px;
  height: 26px;
`;
export const PrimaryButton = styled.button <{ $isHovered: boolean }>`
  border: none;
  margin: 35px 0 0;
  background: ${baseTheme.colors.base};
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  width: 308px;
  height: 72px;
  font-family: 'THICCCBOI', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.$isHovered ? baseTheme.colors.success : baseTheme.colors.secondary)};

  :hover {
    opacity: 0.6;
  }
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
export const ListText = styled(Text)`
  font-size: 18px;
  line-height: 20px;
`;
