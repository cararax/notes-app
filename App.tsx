import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Aqui vamos importar as telas que criaremos em seguida
import HomeScreen from './screens/HomeScreen';
import CreateNoteScreen from './screens/CreateNoteScreen';
import ViewNoteScreen from './screens/ViewNoteScreen';
import EditNoteScreen from './screens/EditNoteScreen';
import PublicNotesScreen from './screens/PublicNotesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateNote" component={CreateNoteScreen} />
        <Stack.Screen name="ViewNote" component={ViewNoteScreen} />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
        <Stack.Screen name="PublicNotes" component={PublicNotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
