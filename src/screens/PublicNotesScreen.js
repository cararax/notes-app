import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ApiService from '../services/ApiService';

const PublicNotesScreen = () => {
  const [publicNotes, setPublicNotes] = useState([]);

  useEffect(() => {
    fetchPublicNotes();
  }, []);

  const fetchPublicNotes = async () => {
    try {
      const response = await ApiService.getPublicNotes();
      console.error(response);

      setPublicNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={publicNotes}
        keyExtractor={note => note.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.note}>{item.title}</Text>
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

export default PublicNotesScreen;
