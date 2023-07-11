import { BackIcon, Container, Logo, BackButton } from "./styles";
import LogoImg from "@assets/logo.png";

interface Props {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
}
