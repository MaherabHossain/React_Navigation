import React, { useEffect, useState } from "react";
import { Text, View,ActivityIndicator,StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Header from "./Header";
import UniversityDetails from "./UniversityDetails";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 function Univarsity({ navigation }) {
  const [university, setUniversity] = useState(); // useSate hook
  const [loader,setLoader] = useState(); // loader use when data fatching from api
  const fetchData = async () => {
  //  fetch data
    await fetch("http://universities.hipolabs.com/search?country=Bangladesh", )
      .then((res) => res.json()) //convert into json
      .then((data) => {
        setLoader(false)
         setUniversity(data); // set University name into university using setState hook
      });
      // console.log(university);
  };
  /* 
    useEffect hook use for when we come this screen
    then work useEffect then its called fetchdata function
    for fetchig data from api 
  */
  useEffect(() => {
   setLoader(true)
    fetchData();
    
  }, []);
  if(loader){
    return(
    <View>
      <Header title="University List in BD" navigation={navigation} />
      <View style={styles.container}>
         <ActivityIndicator size="large" color="#1d73a8" />
      </View>
    </View>)
  }else{
    var key = 0;
    return (
      <View>
        <Header title="University List in BD" navigation={navigation} />
        <View style={{marginBottom:100}} >
          <FlatList 
            data={university}
            keyExtractor={(item, index) => 'key'+index}
            renderItem={({ item, index, separators })=><Card university={item} navigation={navigation}   />}

          />
        </View>
      </View>
    );
  }
}

const Card = ({university,navigation}) =>{
  return(
    <View style={styles.Card}>
        <TouchableOpacity onPress={()=>navigation.navigate('universityDetails',{
          name:university.name,
          web:university.web_pages,
          country:university.country
          })} >
          <Text>
              {university.name}
          </Text>
        </TouchableOpacity>
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
  Card:{
    padding:20,
    backgroundColor:'#d3d3d3',
    marginTop:10,
    flex:1
  }
})



const Stack = createNativeStackNavigator();

export default function UniversityStack () {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="universityAll" component={Univarsity} />
      <Stack.Screen name="universityDetails" component={UniversityDetails} />
    </Stack.Navigator>
  )
}
