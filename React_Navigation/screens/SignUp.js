import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './StyleLogin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 export default function SignUp({navigation}){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const[phone,setPhone] = useState('')
  const [confPass,setConfPass] = useState('');
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
            style={styles.inputText}
            placeholder="Phone..." 
            placeholderTextColor="#003f5c"
            value={phone}
            onChangeText={text => setPhone(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password..." 
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText={text => setPassword(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            value={confPass}
            onChangeText={text => setConfPass(text)}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('login')}>
          <Text style={styles.loginText}>Already have a account!</Text>
        </TouchableOpacity>
      </View>
  )
}
