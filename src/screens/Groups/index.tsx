import { StatusBar } from 'expo-status-bar';
import { Container} from './styles';
import { Header } from '@components/header';

export default function Groups() {
  return (
    <Container>
      <Header />
      <StatusBar style="auto" />
    </Container>
  );
}
