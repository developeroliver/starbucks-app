import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
} from 'react-native';
import { scale } from 'react-native-size-matters';

import starbucks from '../assets/starbucks.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: scale(100),
    height: scale(100),
    marginBottom: scale(15),
  },
  title: {
    fontSize: scale(32),
    fontWeight: 'bold',
    color: '#00704A',
    textTransform: 'uppercase',
  },
});

export default function App() {
  const [ordered, setOrdered] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={starbucks}
        style={styles.image}
        resizeMode="contain"
      />
      <StatusBar style="auto" />
      <Text style={styles.title}>Starbucks!</Text>
      <Pressable
        onPress={() => setOrdered(!ordered)}
        style={styles.button}
      >
        {ordered ? (
          <Text>Commande en cours</Text>
        ) : (
          <Text>Passer commande</Text>
        )}
      </Pressable>
    </View>
  );
}
