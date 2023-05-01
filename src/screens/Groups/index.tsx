import {useState} from 'react';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles'

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Amigos', 'Familia']);
  return (
    <Container>
      <Header />
      <Hightlight title='Turmas' subtitle='Jogue com sua turma'/>

      <FlatList 
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <GroupCard
            title={item}
          />
        )}
      />
    </Container>
  );
}
