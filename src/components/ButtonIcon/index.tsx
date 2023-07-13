import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    type?: ButtonIconTypeStyleProps
}


export function ButtonIcon({type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container {...rest}>
        <Icon name = "home" type ={type}/>
    </Container>
  )
}
