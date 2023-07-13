import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { NoteContext } from '../NoteContext';

const HomeScreen = ({ navigation }) => {
  const { notes } = useContext(NoteContext);

  return (
    <View style={styles.container}>
      <Button title="Create Note" onPress={() => navigation.navigate('Create Note')} />
      <FlatList
        data={notes}
        keyExtractor={note => note.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.note} onPress={() => navigation.navigate('View Note', { note: item })}>
            {item.title}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  note: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomeScreen;
