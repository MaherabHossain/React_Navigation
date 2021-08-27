import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
export default function Header ({title,navigation}){
    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
               <Entypo name="menu" size={24} color="#fff" style={{marginRight:10,marginTop:12}} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        // width:'100%',
        // height:80,
        backgroundColor:'#1d73a8',
        flexDirection:'row',
        padding:20,
        paddingLeft:30
    },
    headerText:{
        marginTop:15,
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        
    }
})