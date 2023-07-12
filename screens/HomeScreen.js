import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Tela Inicial</Text>
      <Button title="Nova Nota" onPress={() => navigation.navigate('CreateNote')} />
      {/* Aqui você pode adicionar a lista de notas */}
    </View>
  );
}

export default HomeScreen;
