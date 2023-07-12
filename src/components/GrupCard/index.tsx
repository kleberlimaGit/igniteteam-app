import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styeles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
