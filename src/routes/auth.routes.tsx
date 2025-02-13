import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SigIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

// Tipando as rotas
type AuthRoutes = {
    sigIn: undefined,
    signUp: undefined,
};

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
    return(
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen name="sigIn" component={SigIn} />
            <Screen name="signUp" component={SignUp} />
        </Navigator>
    )
}