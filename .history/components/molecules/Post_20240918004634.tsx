import { View, StyleSheet } from 'react-native';
import Name from '@/components/atoms/Name';
import Message from '@/components/atoms/Message';
import Photo from '@/components/atoms/Photo';

export default function Post({ myPost }) {
  return (
    <View style={styles.container}>
      <Photo style={styles.photo}/>
      <Name nameText={'John Smith'}/>
      <Message messageText={'Excited to announce that I’ve finally completed my first marathon! 🏅 After months of training and pushing my limits, crossing that finish line was one of the most rewarding experiences of my life. Grateful for all the support from friends and family along the way. Here’s to many more challenges and milestones ahead! 💪 #MarathonComplete #NeverGiveUp'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
  },
  photo: {
    width: 60,
    height: 80
  }
});
