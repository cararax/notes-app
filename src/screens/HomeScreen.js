import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { NoteContext } from '../NoteContext';

const HomeScreen = ({ navigation }) => {
  const { notes } = useContext(NoteContext);

  return (
    <View style={styles.container}>
      <Button title="Create Note" onPress={() => navigation.navigate('Create Note')} />
      <Button title="View Public Notes" onPress={() => navigation.navigate('Public Notes')} />

      <FlatList
        data={notes}
        keyExtractor={note => note.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.text}</Text>
            <Button 
              title="Visualizar" 
              onPress={() => navigation.navigate('View Note', { note: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HomeScreen;
