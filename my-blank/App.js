/* zona 1, aqui van importaciones  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

const Texto=(props)=>{
  const{children}=props
  return(<Text>{children}</Text>) 
}

/* zona 2 , el main*/
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <Texto>"hola"</Texto>
        <Texto>"mundo"</Texto>
        <Texto>"React Native"</Texto>
        <Text>Hola mundo React Native</Text>
      <Button title='Presioname!'></Button>
      
    </View>
  );
}


/* zona 3, estilos */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});