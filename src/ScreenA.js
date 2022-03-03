import React from "react";
import {
    StyleSheet,
    Pressable,
    Text,
    View
} from "react-native"


export default function ScreenA({navigation}) {
    const onPressHandler = () => {
      navigation.navigate("Screen 2");
    }
    return(
      <View style={styles.body}>
        <Text style={styles.text}>
          Màn hình 1
        </Text>
        <Pressable
          onPress={onPressHandler}
            style={({pressed})=> ({backgroundColor: pressed ? '#b1c1' : '#ff2'})}>
          <Text style={styles.text}>
            Chuyển qua trang thứ 2
          </Text>
        </Pressable>
      </View>
      
    )
}

const styles = StyleSheet.create({
    body:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    }
  })