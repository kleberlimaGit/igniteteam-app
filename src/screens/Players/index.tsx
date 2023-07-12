import { Header } from "@components/header";
import { Container } from "./styles";
import { Highlight } from "@components/highlight";
import { ButtonIcon } from "@components/ButtonIcon";


export default function Players(){
    return (
        <Container>
            <Header showBackButton/>
            <Highlight title="Nome do Time" subtitle="Adicione os jogadores nos times"/>
            <ButtonIcon/>
        </Container>
    )
}