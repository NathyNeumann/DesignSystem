import { FormEvent, useState } from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { TextInput } from "../components/TextInput/TextInput";
import { Text } from "../components/Text/Text";
import { Logo } from "../Logo";

export function SignIn () {
    const [isUserSignIn, setIsUserSignIn] = useState(false);

    function handleSinIn (event: FormEvent) {
        event.preventDefault();
        setIsUserSignIn(true)
    }
    return (
        <div className="w-screen h-screen bg-gray-900 flex  flex-col items-center justify-center text-gray-100">
        <header className='flex flex-col items-center'>
          <Logo />
          <Heading size="2xl" className='mt-4'>Ignite Lab</Heading>
          <Text size="md" textColor={400} className="mt-1">Faça login e comece a usar!</Text>
        </header>
        <form onSubmit={handleSinIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
         {isUserSignIn && <Text>Login realizado</Text>}
          <label htmlFor="email" className='flex flex-col gap-3'>
            <Text className='font-semibold' size='md'>Endereço de e-mail:</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <EnvelopeSimple />
              </TextInput.Icon>
              <TextInput.Input id="email" type="email" placeholder='Digite seu e-mail'/>
            </TextInput.Root>
          </label>
          <label htmlFor="senha" className='flex flex-col gap-3'>
            <Text className='font-semibold' size='md'>Sua senha:</Text>
            <TextInput.Root>
              <TextInput.Icon>
               <Lock />
              </TextInput.Icon>
              <TextInput.Input id="senha" type="password" placeholder='******'/>
            </TextInput.Root>
          </label>
          <label htmlFor="remember" className='flex items-center gap-2'>
            <Checkbox id="remember"/>
            <Text size="xs">Lembrar por 30 dias</Text>
          </label>
          <Button type="submit" className='mt-4'>Entrar na plataforma</Button>
        </form>
        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text size="xs" asChild>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
          </Text>
          <Text size="xs" asChild>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
          </Text>
        </footer>
      </div>
    )
}