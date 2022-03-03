import React from "react";
import {
    StyleSheet,
    Pressable,
    Text
} from "react-native"

const ModelButton = (props) => {
    return(
    <Pressable
        onPress={props.onPressFunction}
        hitSlop = {{top: 10, bottom: 10, left: 10, right: 10}}
        android_ripple = {{color:'#00f'}}
        style={({pressed})=>[
            {backgroundColor: pressed ? '#ffffff': props.color},
            styles.button,
            {...props.style}
        ]}
        >
        <Text>
            {props.title}
        </Text>
        </Pressable> 
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#000000',
        margin: 10,
      },
    button:{
    height: 30,
    width: 100,
    alignItems: 'center',
    margin: 10
    },
})

export default ModelButton