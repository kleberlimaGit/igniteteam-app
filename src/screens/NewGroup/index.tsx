import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export default function NewGroup(){
    
    const navigation = useNavigation();
    function handleNew(){
        navigation.navigate('players', {group: 'EC. Bahia'});
    }

    return (
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>
                <Highlight title="Novo Time" subtitle="crie a turma para adicionar os jogadores"/>
                <Input placeholder="Nome do time"/>
                <Button title="Criar" style={{marginTop: 20}} onPress={handleNew}/>
            </Content>
        </Container>
    )
}