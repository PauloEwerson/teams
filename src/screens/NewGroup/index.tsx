import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { AppError } from '@utils/AppError';

export function NewGroup() {
  const [newGroup, setNewGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if(newGroup.trim().length === 0) {
        return Alert.alert('Ops!', 'Informe o nome da turma');
      }
      
      await groupCreate(newGroup)
      navigation.navigate('players', { group: newGroup })
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Ops!', error.message);
      } else {
        Alert.alert('Ops!', 'Não foi possível criar um novo grupo');
      }
      console.log(error);
    }
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
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}