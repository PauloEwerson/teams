import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  padding: 24px;
`