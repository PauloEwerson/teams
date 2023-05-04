import { Header } from '@components/Header';
import { Container, Content, Icon } from './styles';
import { Hightlight } from '@components/Hightlight';
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

        <Button 
          title="Criar turma"
        />
      </Content>
    </Container>
  );
}