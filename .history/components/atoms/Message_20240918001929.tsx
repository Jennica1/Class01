import { Text, View } from "react-native"

export default function Button({ messageText }){
    return(
        <View>
            <Text
            style={
                {color:"salmon", 
                 flexDirection: 'row',
                 alignItems: 'center',
                 padding: 50,
                 borderWidth: 1,
                 borderColor: 'black',
                 borderRadius: 8,
                 backgroundColor: 'blue',
                 marginBottom: 50,}
                        
            }
            >
            {messageText}

            </Text>
        </View>
    )
}