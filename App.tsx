import { StyleSheet, View, StatusBar } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { GluestackUIProvider, Text, Center } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';
import { Loading } from '@components/Loading';
import { SignUp } from '@screens/SignUp';

export default function App() {

  const [fonstLoaded] = useFonts({Roboto_700Bold, Roboto_400Regular});

  return (

    <GluestackUIProvider config={config}>
        
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        
        <SignUp />

    </GluestackUIProvider>
  );
}
