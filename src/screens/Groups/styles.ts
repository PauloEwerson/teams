import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD};
  `};
  padding: 24px;
`