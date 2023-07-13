import React, { useState } from 'react';

export const NoteContext = React.createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addNote = note => {
    setNotes([...notes, { ...note, id: nextId }]);
    setNextId(nextId + 1);
  };

  const updateNote = updatedNote => {
    setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
  };

  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
