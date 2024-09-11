import { Text, View } from "react-native"

export default function Button({ labelText }){
    return(
        <View>
            <Text
            style={{color:"salmon"}}
            >
            {labelText}
            </Text>
        </View>
    )
}