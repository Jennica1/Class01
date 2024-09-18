import { Text, View } from "react-native"

export default function Button({ messageText }){
    return(
        <View>
            <Text
            style={
                {color:"salmon", flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    marginBottom: 10,}
                        
            }
            >
            {messageText}

            </Text>
        </View>
    )
}