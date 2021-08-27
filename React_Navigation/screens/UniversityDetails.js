import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import Header from './Header'
export default function UniversityDetails ({route,navigation}) {
    const {name,country,web} = route.params;
    return(
        <View>
        <Header title="University Details" navigation={navigation} />
      <View
        style={styles.container}>
        <View style={styles.card}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:18,marginTop:10}}>{name}</Text>
            <Text style={{fontSize:16,marginTop:10}}>{web}</Text>
            <Text style={{fontSize:16,marginTop:10}}>{country}</Text>
            </View>
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 280,
    },
    card:{
        height:300,
        width:300,
        backgroundColor:'#d3d3d3',
        borderRadius:10
    }
})