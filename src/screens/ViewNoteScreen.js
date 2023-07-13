import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NoteContext } from '../NoteContext';

const ViewNoteScreen = ({ route, navigation }) => {
  const { note } = route.params;
  const { deleteNote } = useContext(NoteContext);

  const handleDelete = () => {
    deleteNote(note.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
      <Button title="Edit" onPress={() => navigation.navigate('Edit Note', { note })} />
      <Button title="Delete" onPress={handleDelete} />
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
