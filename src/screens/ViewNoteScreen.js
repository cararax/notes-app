import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NoteContext } from '../NoteContext';
import ApiService from '../services/ApiService'; 

const ViewNoteScreen = ({ route, navigation }) => {
  const { note, isPublicNote } = route.params;
  const { deleteNote } = useContext(NoteContext);

  const handleDelete = () => {
    deleteNote(note.id);
    navigation.goBack();
  };

  const handlePublish = async () => {
    try {
      await ApiService.publishNote(note);
      alert('Note has been published successfully!');
      console.log('Note has been published successfully: ', note)
    } catch (error) {
      console.error('Error caught during API call:', error.message);
      if (error.response) {
        console.error('Response status:', error.response.status);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.text}</Text>
      {!isPublicNote && (
        <View>
          <Button title="Edit Note" onPress={() => navigation.navigate('Edit Note', { note })} />
          <Button title="Delete Note" onPress={handleDelete} />
          <Button title="Publish Note" onPress={handlePublish} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default ViewNoteScreen;
