/* FondoBienvenida.jsx */
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FondoBienvenida = () => {
  return (
    <ImageBackground
      source={require('./assets/fondo.jpg')}
      style={styles.fondo}
    >
      <View style={styles.contenido}>
        <Text style={styles.titulo}>¡Pantalla de inicio!</Text>
      </View>
    </ImageBackground>
  );
};

export default FondoBienvenida;

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
