import { Button as NativeButton, View } from "react-native"
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors"

export default function Button({ buttonText }){
    return(
        <View>
            <NativeButton title={buttonText}
            color={'red'}/>
        </View>
    )
}