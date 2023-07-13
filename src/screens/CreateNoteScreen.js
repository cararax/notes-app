import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { NoteContext } from '../NoteContext';

const CreateNoteScreen = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm();
  const { addNote } = useContext(NoteContext);

  React.useEffect(() => {
    register('title');
    register('content');
  }, [register]);

  const onSubmit = data => {
    addNote(data);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Title" onChangeText={text => setValue('title', text)} />
      <TextInput style={styles.input} placeholder="Content" onChangeText={text => setValue('content', text)} multiline />
      <Button title="Save" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
});

export default CreateNoteScreen;
