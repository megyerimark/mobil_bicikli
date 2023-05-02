/*
* File: App.js
* Author: Megyeri Márk Máté
* Copyright: 2023, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2023-05-02
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/



import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';


export default function App() {
  const[bike, setBikes]=useState([]);
  function bikes(){

    let host = "http://localhost:8000/bikes";

    fetch(host).then(response => response.json()).then(
      result=> {
        console.log(result);
        setBikes(result);
      });
  }
  
  useEffect( () => {
    bikes();
  }, []);
  

  return (

    <View style={styles.container}>
      <View style={styles.content}>
      <Text>Biciklik adatai lekérése</Text>

      <View style={styles.itemName}>
            <p style={styles.space}>Név</p>
            <p style={styles.space}>Kerék</p>
            <p style={styles.space}>Használhatóság</p>
            <p style={styles.space}>Ár</p>
          </View>
          
          <FlatList data={bike}
          renderItem={({item}) => (

            <View style={styles.items}>
                <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.wheel}</Text>
                  <Text style={styles.text}>{item.usage}</Text>
                  <Text style={styles.text}>{item.price}</Text>


            </View>


          )}>


          </FlatList>


      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:'yellow',
    fontSize:"1.2rem",
    fontWeight:600,
  },
   items: {
    flexDirection:'row',
    justifyContent:'space-between',  
    
  },
  content:{
    flex: 1,
    margin:30,
    marginTop:50,
    fontFamily:'arial',
    
  },

});
