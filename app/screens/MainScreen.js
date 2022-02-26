import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={{ marginTop: 20, marginBottom: 20 }}>
        1. Capture a full screenshot of the suspicious message
      </Text>
      <Text>Quick links</Text>
      <View style={{}}></View>
      <Text style={{ marginBottom: 20 }}>
        Autofill with your screenshot, or fill manually:{' '}
      </Text>
      <View style={{ marginBottom: 20 }}>
        <Button
          title='Upload image'
          onPress={() => Alert.alert('Uploaded image')}
        />
      </View>
      <View></View>
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
