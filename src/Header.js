import React from "react";
import {
    StyleSheet,
    Pressable,
    Text,
    View
} from "react-native"


const Header = (props) => {
    return(
        <View style={styles.view}>
            <Text style={styles.text}>
                Hello mấy bạn !!!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        height: 50,
        width: '150%',
        backgroundColor: '#aaa111',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        color: '#a1a',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default Header