import { Container, Form } from './styles';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Digite o nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon
          icon="add"
        />
      </Form>

      <Filter
        title="Time A"
        isActive
      />

    </Container>
  );
}