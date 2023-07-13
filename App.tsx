import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';
import ViewNoteScreen from './src/screens/ViewNoteScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';
import { NoteProvider } from './src/NoteContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Create Note" component={CreateNoteScreen} />
          <Stack.Screen name="View Note" component={ViewNoteScreen} />
          <Stack.Screen name="Edit Note" component={EditNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
}
