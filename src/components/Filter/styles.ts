import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type FilterStyleProps = {
    isActive?: boolean;
}


export const Container = styled(TouchableOpacity)<FilterStyleProps>`
${({theme, isActive}) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_500}
`}

border-radius: 4px;
margin-right: 12px;
height: 45px;
width: 80px;

align-items:center;
justify-content: center;
`;

export const Title = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
color: ${({theme}) => theme.COLORS.WHITE};
text-transform: uppercase;
`