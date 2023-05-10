import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { UsersThree } from 'phosphor-react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;