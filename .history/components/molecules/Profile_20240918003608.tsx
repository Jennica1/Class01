import { View, StyleSheet } from 'react-native';
import Name from '@/components/atoms/Name';
import Message from '@/components/atoms/Message';
import Photo from '@/components/atoms/Photo';

const styles = StyleSheet.create({
  logo: {
    width: 10,
    height: 10,
  },
  container: {
    padding: 10,
    alignItems: 'center',
    width: 50,
    height: 50,
  },
});

export default function Profile({ myProfile }) {
  return (
    <View style={styles.container}>
      <Photo style={styles.logo} />
      <Name nameText={'John Smith'} />
      <Message messageText={'myProfile.message'} />
    </View>
  );
}
