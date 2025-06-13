/* zona 1, aqui van importaciones  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';

const Texto=({style})=>{
  const [contenido, setContenido]=useState('hola mundo ')
  const actualizarTexto=()=>{setContenido('Estado actualizado')}
  return(<Text style={[styles.text,style]} onPress={actualizarTexto}>{contenido}</Text>) 
}

/* zona 2 , el main*/
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <Texto style={styles.red}></Texto>
        <Texto style={styles.green}></Texto>
        <Texto style={styles.black}></Texto>
        
      
    </View>
  );
}


/* zona 3, estilos */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'base-line',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text:{
  color:'white',
  fontSize:'25',
   
  },
  red:{backgroundColor:'red'},
  green:{backgroundColor:'green'},
  black:{backgroundColor:'black'},
});