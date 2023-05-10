import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function NewGroup() {
  const [newGroup, setNewGroup] = useState('');

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate('players', { group: newGroup })
  }

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
          onChangeText={setNewGroup}
        />

        <Button
          title="Criar turma"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}