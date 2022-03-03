import React from "react";
import {
    StyleSheet,
    Pressable,
    Text,
    View
} from "react-native"

export default function ScreenB({navigation}) {

    const onPressHandler = () => {
      navigation.navigate('Screen 1')
    }
    
    return(
      <View style={styles.body}>
        <Text style={styles.text}>
          Màn hình 2
        </Text>
        <Pressable
          onPress={onPressHandler}
            style={({pressed})=> ({backgroundColor: pressed ? '#b1c1' : '#ff2'})}>
          <Text style={styles.text}>
            Quay về trang thứ 1
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