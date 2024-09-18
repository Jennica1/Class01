import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const style = StyleSheet.create({
    logo: {
        width: 60,
        height:80,
    }
});

export default function image({ myPhoto }) {
    return (
        <View>
            <Image 
            style={style.logo}
            source={require('@/assets/images/profileImage.jpg')}/>
        </View>
    )
};
