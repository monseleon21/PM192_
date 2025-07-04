import { ImageBackground, StyleSheet, Text, View } from 'expo-native';
import React from 'react';
import { Image } from 'react-native';

const fondoB =()=> {
  return (
    <ImageBackground
    source={require('./assets/fondom.jpg')}
    style={styles.fondom}
    >
<View style={styles.contenido}>
        <Text style={styles.titulo}>¡Pantalla de inicio!</Text>
      </View>
    </ImageBackground>
  );
};

export default fondoB;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
});
