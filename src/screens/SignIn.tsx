import { VStack, Image } from '@gluestack-ui/themed';
import BackgroundImg from '@assets/background.png';


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
    </VStack>
  );
}