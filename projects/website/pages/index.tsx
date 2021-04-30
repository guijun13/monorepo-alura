import styled from 'styled-components';
import { UIProvider } from '@guijun13/ui/src/theme/UIProvider';
import Button from '@guijun13/ui/src/components/Button';

const Title = styled.h1`
  color: orange;
  font-size: 50px;
`;

export default function Home() {
  return (
    <UIProvider>
      <Button>Componente que veio da lib</Button>
      {/* <Button>Clique aqui</Button> */}
      <Title>Hello world!</Title>
    </UIProvider>
  );
}
