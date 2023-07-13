import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NoteContext = React.createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [nextId, setNextId] = useState(1);

  // Load notes from local storage when starting up
  useEffect(() => {
    loadNotes();
  }, []);

  // Save notes whenever they change
  useEffect(() => {
    saveNotes();
  }, [notes, nextId]);

  const loadNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('notes');
      const id = await AsyncStorage.getItem('nextId');
      if (savedNotes !== null && id !== null) {
        setNotes(JSON.parse(savedNotes));
        setNextId(JSON.parse(id));
      }
    } catch (error) {
      console.error('Error loading notes from storage:', error);
    }
  };

  const saveNotes = async () => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(notes));
      await AsyncStorage.setItem('nextId', JSON.stringify(nextId));
    } catch (error) {
      console.error('Error saving notes to storage:', error);
    }
  };

  const addNote = note => {
    setNotes(prevNotes => [...prevNotes, { ...note, id: nextId }]);
    setNextId(prevId => prevId + 1);
  };

  const updateNote = updatedNote => {
    setNotes(prevNotes => prevNotes.map(note => note.id === updatedNote.id ? updatedNote : note));
  };

  const deleteNote = id => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
