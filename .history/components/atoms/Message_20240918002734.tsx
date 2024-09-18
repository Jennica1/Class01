import { Text, View } from "react-native"

export default function Button({ messageText }){
    return(
        <View>
            <Text
            style={
                {color:"salmon", }
                        
            }
            >
            {messageText}

            </Text>
        </View>
    )
}