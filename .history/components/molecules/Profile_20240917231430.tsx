import Name from '@/components/atoms/Name';
import Message from '@/components/atoms/Message';
import Photo from '@/components/atoms/Photo';
import {View, Text, Image} from 'react-native';


export default function profile({ myProfile }){
    return (
        <View>
            <Photo/>
            <Name nameText={'John Smith'}/>
            <Message messageText={'Hello World!'}/>
        </View>

    )
}
