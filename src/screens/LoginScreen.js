import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 20, 
    paddingVertical: 40, 
    borderRadius: 10, 
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
  },
  input: {
    width: '100%', 
    height: 40,
    borderColor: '#B4B4B8',
    borderBottomColor: '#B4B4B8',
    borderBottomWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#161A30',
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#7D7C7C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      navigation.navigate('Home', { username });
    } catch (error) {
      console.error('Error saving username to AsyncStorage:', error);
    }
  };

  return (
    <ImageBackground source={require('../components/img/enter.png')} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}