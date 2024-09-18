import React from 'react';
import { View, StyleSheet } from 'react-native';
import Name from '@/components/atoms/Name';
import Message from '@/components/atoms/Message';
import Photo from '@/components/atoms/Photo';

export default function Post({ myPost }) {
  return (
    <View style={styles.container}>
      <Photo style={styles.photo} photoUrl={myPost.photoUrl} />
      <Name nameText={myPost.name} />
      <Message messageText={myPost.message} />
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
    marginBottom: 10,
  },
  photo: {
    width: 200,
    height: 200,
  },
});
