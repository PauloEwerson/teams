import { Contaier, Title, Subtitle } from './styles';

type Props = {
  title: string;
  subtitle: string;
}

export function Hightlight({ title, subtitle}: Props) {
  return (
    <Contaier>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Contaier>
  );
}