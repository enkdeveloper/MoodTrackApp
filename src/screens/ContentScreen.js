import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider as PaperProvider, DarkTheme, DefaultTheme } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const CustomButton = ({ onPress, title, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    borderColor: '#999',
    borderWidth: 1,
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20, 
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(13, 40, 42, 0.07)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F5F5F5',
    marginBottom: 10,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', 
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#FFF',
    fontSize: 18,
    marginRight: 10, 
  },
  addButton: {
    backgroundColor: '#B4B4B8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 0,
    width: '20%',
  },
  button: {
    backgroundColor: '#B4B4B8',
    width: '30%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  noteText: {
    flex: 1,
    fontSize: 16,
  },
  deleteIcon: {
    marginLeft: 1,
  },
});

export default function ContentScreen({ navigation }) {
  const [thought, setThought] = useState('');
  const [notesNegative, setNotesNegative] = useState([]);
  const [notesPositive, setNotesPositive] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [username, setUsername] = useState('');
  const [openNoteId, setOpenNoteId] = useState(null);

  useEffect(() => {
    const fetchThemePreference = async () => {
      try {
        const themePreference = await AsyncStorage.getItem('themePreference');
        if (themePreference === 'dark') {
          setIsDarkTheme(true);
        }
      } catch (error) {
        console.error('Error fetching theme preference from AsyncStorage:', error);
      }
    };
    fetchThemePreference();

    const fetchNotes = async () => {
      try {
        const savedNotesNegative = await AsyncStorage.getItem('notesNegative');
        if (savedNotesNegative !== null) {
          setNotesNegative(JSON.parse(savedNotesNegative));
        }
        const savedNotesPositive = await AsyncStorage.getItem('notesPositive');
        if (savedNotesPositive !== null) {
          setNotesPositive(JSON.parse(savedNotesPositive));
        }
      } catch (error) {
        console.error('Error fetching notes from AsyncStorage:', error);
      }
    };
    fetchNotes();

    const fetchUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        if (storedUsername !== null) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error('Error fetching username from AsyncStorage:', error);
      }
    };
    fetchUsername();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('username');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error removing username from AsyncStorage:', error);
    }
  };

  const handleThemeToggle = async () => {
    try {
      if (isDarkTheme) {
        await AsyncStorage.removeItem('themePreference');
      } else {
        await AsyncStorage.setItem('themePreference', 'dark');
      }
      setIsDarkTheme(!isDarkTheme);
    } catch (error) {
      console.error('Error toggling theme preference in AsyncStorage:', error);
    }
  };

  const handleAddNote = async () => {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();
      const newNote = { id: Date.now(), text: thought, date: formattedDate };
      if (isDarkTheme) {
        const updatedNotes = [...notesNegative, newNote];
        setNotesNegative(updatedNotes);
        await AsyncStorage.setItem('notesNegative', JSON.stringify(updatedNotes));
      } else {
        const updatedNotes = [...notesPositive, newNote];
        setNotesPositive(updatedNotes);
        await AsyncStorage.setItem('notesPositive', JSON.stringify(updatedNotes));
      }
      setThought('');
    } catch (error) {
      console.error('Error adding note to AsyncStorage:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      if (isDarkTheme) {
        const updatedNotes = notesNegative.filter(note => note.id !== id);
        setNotesNegative(updatedNotes);
        await AsyncStorage.setItem('notesNegative', JSON.stringify(updatedNotes));
      } else {
        const updatedNotes = notesPositive.filter(note => note.id !== id);
        setNotesPositive(updatedNotes);
        await AsyncStorage.setItem('notesPositive', JSON.stringify(updatedNotes));
      }
    } catch (error) {
      console.error('Error deleting note from AsyncStorage:', error);
    }
  };

  const handleOpenNote = (id) => {
    setOpenNoteId(openNoteId === id ? null : id);
  };

  return (
    <PaperProvider theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <ImageBackground source={isDarkTheme ? require('../components/img/neg.png') : require('../components/img/pos.png')} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome {username}!</Text>
          <Switch
            value={isDarkTheme}
            onValueChange={handleThemeToggle}
            trackColor={{ false: '#B0A4A4', true: '#DDDDDD' }}
            thumbColor={isDarkTheme ? '#434242' : '#f4f3f4'}
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          />
          <Text style={styles.title}>{isDarkTheme ? 'Sadness shared is sadness halved' : 'Happiness shared is happiness doubled'}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Pour your heart out..."
              value={thought}
              onChangeText={text => setThought(text)}
            />
            <CustomButton title="Add" onPress={handleAddNote} style={styles.addButton} />
          </View>
          <ScrollView style={{ width: '100%' }}>
            {isDarkTheme ? (
              notesNegative.map(note => (
                <TouchableOpacity key={note.id} onPress={() => handleOpenNote(note.id)}>
                <View style={styles.noteContainer}>
                  <View style={styles.noteContent}>
                    <Text style={styles.noteText}>{openNoteId === note.id ? note.text : note.text.substring(0, 20) + (note.text.length > 20 ? '...' : 'note.text')}</Text>
                    {openNoteId === note.id && (
                      <Text style={styles.noteDate}>{note.date}</Text>
                    )}
                  </View>
                  <TouchableOpacity onPress={() => handleDeleteNote(note.id)} style={styles.deleteIcon}>
                    <MaterialIcons name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.divider}/>
                </TouchableOpacity>
              ))
            ) : (
              notesPositive.map(note => (
                <TouchableOpacity key={note.id} onPress={() => handleOpenNote(note.id)}>
                <View style={styles.noteContainer}>
                  <View style={styles.noteContent}>
                    <Text style={styles.noteText}>{openNoteId === note.id ? note.text : note.text.substring(0, 20) + (note.text.length > 20 ? '...' : 'note.text')}</Text>
                    {openNoteId === note.id && (
                      <Text style={styles.noteDate}>{note.date}</Text>
                    )}
                  </View>
                  <TouchableOpacity onPress={() => handleDeleteNote(note.id)} style={styles.deleteIcon}>
                    <MaterialIcons name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.divider}/>
                </TouchableOpacity>
              ))
            )}
          </ScrollView>
          <CustomButton title="Logout" onPress={handleLogout} />
        </View>
      </ImageBackground>
    </PaperProvider>
  );
}

