import {View, TextInput} from 'react-native';
import Name from '@/components/atoms/Name';
import Message from '@/components/atoms/Message';
import Photo from '@/components/atoms/Photo';



export default function post({ myPost }){
    return (
        <View>
            <Photo/>
            <Name nameText={'John Smith'}/>
            <Message messageText={'Hello World!'}/>
        </View>

    )
}
