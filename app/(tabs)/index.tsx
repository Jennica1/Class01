import { Text, View } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import InputForm from "@/components/molecules/InputForm";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontSize:50}}>
        I love Bananas
      </Text>

      <Button buttonText={'hi'}/>
      <Label labelText={"hi guys"}/>

      <InputForm
    textForLabel={'label'}
    textForButton={'button'}
    textForPlaceholder={'placejolder'}/>
    </View>



  );
}