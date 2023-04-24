import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles'

export default function Groups() {
  return (
    <Container>
      <Header />
      <Hightlight title='Turmas' subtitle='Jogue com sua turma'/>

      <GroupCard title='Turma 1' />
    </Container>
  );
}
