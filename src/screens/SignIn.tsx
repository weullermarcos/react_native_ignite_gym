import { VStack, Image, Center, Text, Heading } from '@gluestack-ui/themed';

import BackgroundImg from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from '@components/Input';


export function SigIn() {
  return (

    <VStack flex={1} bg='$gray700'>
        <Image 
            w='$full'
            h={624}
            source={BackgroundImg} 
            defaultSource={BackgroundImg}
            alt='Pessoas treinando'
            position='absolute'
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text color='$gray100' fontSize="$sm">Treine sua mente e o seu corpo</Text>
          </Center>

          <Center gap="$2">
            <Heading color='$gray100'>Acesse sua conta</Heading>
            <Input placeholder='E-mail'/>
            <Input placeholder='Senha'/>
          </Center>
        </VStack>
    </VStack>
  );
}