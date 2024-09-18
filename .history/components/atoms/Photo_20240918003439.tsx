import { View, Image} from 'react-native';
import React from 'react';

export default function image({ myPhoto }) {
    return (
        <View>
            <Image 
            source={require('@/assets/images/profileImage.jpg')}/>
        </View>
    )
};

