import { Container } from './styles';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { ButtonIcon } from '@components/ButtonIcon';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <ButtonIcon />
    </Container>
  );
}