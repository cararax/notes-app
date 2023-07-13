import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NoteContext } from '../NoteContext';
import ApiService from '../services/ApiService'; // Tenha certeza que ApiService está sendo importado corretamente

const ViewNoteScreen = ({ route, navigation }) => {
  const { note } = route.params;
  const { deleteNote } = useContext(NoteContext);

  const handleDelete = () => {
    deleteNote(note.id);
    navigation.goBack();
  };

  const handlePublish = async () => {
    try {
      await ApiService.publishNote(note); // usando publishNote do ApiService
      alert('Note has been published successfully!');
    } catch (error) {
      console.error('Error caught during API call:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
      <Button title="Edit" onPress={() => navigation.navigate('Edit Note', { note })} />
      <Button title="Delete" onPress={handleDelete} />
      <Button title="Publish" onPress={handlePublish} />
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
  content: {
    fontSize: 18,
  },
});

export default ViewNoteScreen;
