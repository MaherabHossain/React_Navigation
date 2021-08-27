import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './StyleLogin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './SignUp';
 function Login({navigation}){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  return(
    <View style={styles.container}>
        <Text style={styles.logo}>Welcome</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText={text => setPassword(text)}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('signUp')} >
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
  )
}
const Stack = createNativeStackNavigator();
// create login stack
export default function LoginStack () {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='signUp' component={SignUp} />
    </Stack.Navigator>
  )
}