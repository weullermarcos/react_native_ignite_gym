import { Button as GlueStackButton, Text, ButtonSpinner } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof GlueStackButton> & {

    title: string,
    variant?: "solid" | "outline",
    isLoading?: boolean,
};

export function Button({ title, variant = 'solid', isLoading = false, ...rest }: Props){
    return(
        <GlueStackButton 
            {...rest}
            w="$full"
            h="$14"
            bg={variant === "outline" ? "transparent" : "$green700"}
            borderWidth={variant === "outline" ? "$1" : "$0"}
            borderColor="$green400"
            rounded="$sm"
            $active-bg={variant === "outline" ? "$gray500" : "$green500"}
            disabled={isLoading}
        >
        
        { 
            isLoading ? <ButtonSpinner color="$white" /> : 
            <Text color={variant === "outline" ? "$green500" : "$white"} fontFamily="$heading" fontSize="$sm"> { title } </Text>}

        </GlueStackButton>
    );
}

