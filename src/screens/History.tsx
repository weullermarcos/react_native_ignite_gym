import { ScreenHeader } from '@components/ScreenHeader';
import { VStack, Text } from '@gluestack-ui/themed';


export function History(){
    return (
        <VStack flex={1} bg="$gray700">
            <ScreenHeader title='Histórico'/>
        </VStack>
    )
}

