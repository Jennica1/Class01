import Name from '@/components/atoms/Name';
import Message from '@/components/atoms/Message';
import Photo from '@/components/atoms/Photo';
import {View, Text, Image, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    logo: {
        width: 60,
        height:80,
    }
});

export default function profile({ myProfile }){
    return (
        <View>
            <Photo style={style.logo}/>
            <Name nameText={'John Smith'}/>
            <Message messageText={'Hello World!'}/>
        </View>

    )
}
