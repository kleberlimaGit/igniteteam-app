import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    type?: ButtonIconTypeStyleProps
}


export function ButtonIcon({}: Props) {
  return (
    <Container>
        <Icon name = "home" type ="PRIMARY"/>
    </Container>
  )
}
