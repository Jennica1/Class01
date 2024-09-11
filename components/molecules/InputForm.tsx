import {View, TextInput} from 'react-native';
import Button from '../atoms/Button';
import Label from '@/components/atoms/Label';

export default function InputForm({ textForLabel, textForButton, textForPlaceholder}){
    return (
        <View>
            <Label labelText={textForLabel}/>
            <TextInput defaultValue={textForPlaceholder}/>
            <Button buttonText={textForButton}/>
            </View>

    )
}
