import styled from 'styled-components';
import Button from '@guijun13/common-modules/components/Button';

const Title = styled.h1`
  color: orange;
  font-size: 50px;
`;

export default function Home() {
  return (
    <>
      <Button>Clique aqui</Button>
      <Title>Hello world!</Title>
    </>
  );
}
