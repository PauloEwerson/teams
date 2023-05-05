import { Container } from './styles';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
    </Container>
  );
}