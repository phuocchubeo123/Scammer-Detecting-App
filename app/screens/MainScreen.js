import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Alert } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={{ marginTop: 20, marginBottom: 20 }}>
        1. Capture a full screenshot of the suspicious message
      </Text>
      <Text>Quick links:</Text>
      <View style={{}}></View>
      <Text style={{ marginBottom: 20 }}>
        2. Autofill with your screenshot, or fill manually:{' '}
      </Text>
      <View style={{ marginBottom: 20 }}>
        <Button
          title='Upload image'
          onPress={() => Alert.alert('Uploaded image')}
        />
      </View>
      <Text>Phone number: </Text>
      <TextInput
        style={{
          marginHorizontal: 10,
          height: 40,
          borderStyle: 'dotted',
          borderWidth: 1,
          borderRadius: 1,
        }}
      ></TextInput>
      <Text style={{ marginTop: 20 }}>Pasted message</Text>
      <TextInput
        underlineColorAndroid='transparent'
        multiline={true}
        style={{
          marginTop: 10,
          marginHorizontal: 10,
          height: 100,
          borderStyle: 'dotted',
          borderWidth: 1,
          borderRadius: 1,
          fontSize: 12,

          textAlignVertical: 'top',
        }}
      ></TextInput>
      <View style={{ marginTop: 20 }}>
        <Button
          title='Deep check by AI'
          onPress={() => Alert.alert('Uploaded image')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MainScreen;
