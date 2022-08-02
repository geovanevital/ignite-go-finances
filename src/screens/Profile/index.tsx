import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export function Profile() {
  return (
    <View>
      <Text testID='text-title'>
        Perfil
      </Text>
      <TextInput placeholder='Nome' autoCorrect={false} testID="input-name" value="Geovane" />
      <TextInput placeholder='Sobrenome' autoCorrect={false} testID="input-surname" value="Vital" />
      <TouchableOpacity onPress={() => {}} />
    </View>
  );
}
