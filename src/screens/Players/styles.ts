import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600}
  padding: 24px;

`;

export const Icon = styled(MaterialIcons).attrs(({theme, type}) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED ,
}))
