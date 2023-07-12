import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStylesProps, Container, Title } from "./style";

interface Props extends TouchableOpacityProps {
    title: string;
    type?: ButtonTypeStylesProps;
}

export function Button({title, type = 'PRIMARY', ...rest}: Props){
    return (
        <Container
            type={type} 
            {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}