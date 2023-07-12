import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/Button";

export default function NewGroup(){
    return (
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>
                <Highlight title="Novo Time" subtitle="crie a turma para adicionar os jogadores"/>
                <Button title="Criar"/>
            </Content>
        </Container>
    )
}