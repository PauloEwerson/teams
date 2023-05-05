import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Hightlight
          title="Nova turma"
          subtitle="Crie uma nova turma para adicionar as pessoas que você deseja."
        />

        <Input
          placeholder="Nome da turma"
        />

        <Button
          title="Criar turma"
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  );
}