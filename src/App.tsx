import './styles/global.css';
import { Text } from './components/Text/Text';
import { Heading } from './components/Heading/Heading';
import { Button } from './components/Button/Button';
import { TextInput } from './components/TextInput/TextInput';

export function App() {

  return (
    <>
      <Heading >Heading</Heading>
      <Text >texto</Text>
      <TextInput.Root>
        <TextInput.Input placeholder='digite algo'></TextInput.Input>
      </TextInput.Root>
      <Button>
        Enviar
      </Button>
    </>
  )
}

