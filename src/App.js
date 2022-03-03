import React from 'react';

import { Button, Linking, RefreshControl, ScrollView, StyleSheet, Text, View, FlatList, 
  SectionList, TextInput, TouchableOpacity, 
  TouchableHighlight, Pressable, Alert, ToastAndroid,
  Image } from 'react-native';
// import ModelButton from '../ButtonCustomer';
// import Header from '../Header';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

function ScreenA({navigation}) {

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
function ScreenB({navigation}) {

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

export default function App(){
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name= "Screen 1"
            component= {ScreenA}
            options={{
              header: () => null
            }}
          />
          <Stack.Screen
            name= "Screen 2"
            component= {ScreenB}
          />
        </Stack.Navigator>
      </NavigationContainer>
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


// export default function App() {
//   // const [name, setName] = useState ({number: 0});
//   // const [Items, setItem] = useState ([
//   //   { name: 'Item 1'},
//   //   {name: 'Item 2'},
//   //   {name: 'Item 3'},
//   //   {name: 'Item 4'},
//   //   {name: 'Item 5'},
//   //   {name: 'Item 6'},
//   //   {name: 'Item 7'},
//   // ]);
//   // const DATA= [
//   //   {
//   //     title: 'Title 1',
//   //     data: ['Title 1-1', 'Title 1-2']
//   //   },
//   //   {
//   //     title: 'Title 2',
//   //     data: ['Title 2-1', 'Title 2-2']
//   //   },
//   //   {
//   //     title: 'Title 3',
//   //     data: ['Title 3-1', 'Title 3-2']
//   //   },
//   //   {
//   //     title: 'Title 4',
//   //     data: ['Title 4-1']
//   //   },
//   // ]
//   // const [Refreshing, setRefreshing] = useState (false);
//   // const onRefresh = ()=>{
//   //   setRefreshing(true);
//   //   setItem([...Items, {key: '8', name: 'Item 8'}]);
//   //   setRefreshing(false);
//   // }
//   // const [name, setName] = useState ('');
//   // const [submitted, setSubmit] = useState (false);
//   // const onPressHandler = () => {
//   //   if(name.length>3){
//   //     setSubmit(!submitted);
//   //   }else{
//   //     Alert.alert('Warning!','The name must be longer than 3 characters', [
//   //       {text:'Later', onPress : ()=> console.warn('Later Pressed!')},
//   //       {text:'Cancel', onPress : ()=> console.warn('Cancel Pressed!')},
//   //       {text:'OK', onPress : ()=> console.warn('OK Pressed!')},
//   //     ], {cancelable: true, onDismiss : () => console.warn('Close all')});
//       // ToastAndroid.showWithGravity('The name must be longer than 3 characters',
//       // ToastAndroid.SHORT,
//       // ToastAndroid.CENTER
    
//      // )
//   //   }
//   // }
//   // return (
//   //   <View style={styles.container}>
//   //   <Header/>
//   //     <Text style={styles.text}>
//   //       Vui lòng nhập tên:
//   //     </Text>
//   //     <TextInput
//   //       multiline 
//   //       style={styles.input}
//   //       placeholder= 'Nhập họ tên:'
//   //       onChangeText={(value)=> setName(value)}
//   //       secureTextEntry
//   //     />
//      { /* <Button
//       //   title={submitted?'Clear':'Submit' }
//       //   onPress={onPressHandler}
//      // /> */}
//     { /* <TouchableHighlight
//         style={styles.button}
//         onPress={onPressHandler}
//         activeOpacity={0.5}
//       >
//         <Text>
//           {submitted?'Clear':'Submit' }
//         </Text>
//     </TouchableHighlight>*/}
//     // <ModelButton
//     //   onPressFunction = {onPressHandler}
//     //   title = {submitted?'Clear':'Submit' }
//     //   color = {'#00ff00'}
//     // />
//     // <ModelButton
//     //   onPressFunction = {()=> {}}
//     //   title = {'Text'}
//     //   color = {'#00ff'}
//     //   style={{margin:3}}
//     // />
//   {/*  <Pressable
//       onPress={onPressHandler}
//       hitSlop = {{top: 10, bottom: 10, left: 10, right: 10}}
//       android_ripple = {{color:'#00f'}}
//       style={({pressed})=>[
//         {backgroundColor: pressed ? '#ffffff': '#00ff00'},
//         styles.button
//       ]}
//     >
//       <Text>
//         {submitted?'Clear':'Submit' }
//       </Text>
//     </Pressable> */}
//       // {submitted?
//       //   <View style={styles.container}>
//       //     <Text style={styles.text}>
//       //       Họ tên là: {name}
//       //     </Text>
//       //     <Image
//       //       style={styles.image}
//       //       source={require('../images/phamthianhtu.jpg')}
//       //       resizeMode='stretch'
//       //     />
//       //   </View>
//       //   :
//       //   <Image
//       //     style={styles.image}
//       //     source={require('../images/phamthianhtu.jpg')}
//       //     resizeMode='stretch'
//       //   />
//       // }
      
//   //  </View>
//     // <SectionList
//     //   keyExtractor={(item, index) => index.toString()}
//     //   sections={DATA}
//     //   renderItem ={({item})=> (
//     //       <Text style={styles.text}>{item} </Text>
//     //   )}
//     //   renderSectionHeader={({section})=>(
//     //     <View style={styles.item} >
//     //       <Text style={styles.text}>{section.title} </Text>
//     //     </View> 
//     //   )}
//     // />
//     // <FlatList
//     //   keyExtractor={(item, index) => index.toString()}
//     //   data={Items}
//     //   renderItem={({item}) =>(
//     //     <View style={styles.item} >
//     //       <Text style={styles.text}>{item.name} </Text>
//     //     </View>  
//     //   )}
//     //   refreshControl={
//     //     <RefreshControl
//     //       refreshing={Refreshing}
//     //       onRefresh={onRefresh}
//     //   />}
//     // />
//       // <ScrollView style={styles.container} 
//       //   refreshControl={
//       //     <RefreshControl
//       //       refreshing={Refreshing}
//       //       onRefresh={onRefresh}
//       //     />}>
//       // {
//       //   Items.map((item) => {
//       //     return(
//       //       <View style={styles.item} key = {item.key}>
//       //         <Text style={styles.text}>{item.name} </Text>
//       //       </View>
            
//       //     )    
//       //   })
//       // }
//       // </ScrollView>
// //   );
//  }

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   // height: 200,
//   //   // width: 400,
//   //   // flexDirection: 'column',
//   //   backgroundColor: '#ffffff',
//   //   alignItems: 'center',
//   //   // justifyContent: 'center',
//   //   // borderWidth: 10,
//   //   // borderColor: '#a1a2a3',
//   //   // borderRadius: 15,
//   //    margin: 20
//   // },
//   // // item: {
//   // //   margin: 10,
//   // //   backgroundColor: '#00ffff',
//   // //   alignItems: 'center',
//   // //   justifyContent: 'center',
//   // // },
//   // text: {
//   //   fontSize: 20,
//   //   color: '#000000',
//   //   margin: 10,
//   // },
//   // input:{
//   //   width: 200,
//   //   borderWidth: 1,
//   //   borderColor: '#555',
//   //   borderRadius: 5,
//   //   textAlign: 'center',
//   //   margin: 10,
//   // },
//   // button:{
//   //   height: 30,
//   //   width: 100,
//   //   alignItems: 'center',
//   //   margin: 10
//   // },
//   // image:{
//   //   width: 200,
//   //   height: 200,
//   //   margin: 15
//   // }
// });



