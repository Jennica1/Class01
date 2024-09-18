import Name from '@/components/atoms/Name';
import Message from '@/components/atoms/Message';
import Photo from '@/components/atoms/Photo';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo: {
      width: 60,
      height: 80,
    },
    container: {
      padding: 10,
      alignItems: 'center',
    },
  });

export default function profile({ myProfile }){
    return (
        <View style={styles.container}>
            <Photo style={style.logo}/>
            <Name nameText={'John Smith'}/>
            <Message messageText={'Hello World!'}/>
        </View>

    )
}
