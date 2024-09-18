import { View,  } from "react-native";
import Profile from '@/components/molecules/Profile'
import Post from "@/components/molecules/Post";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Profile/>

      <Post/>

    </View>



  );
}