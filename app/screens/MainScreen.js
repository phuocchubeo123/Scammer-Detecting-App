import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// const ReadText = require('text-from-image');
const MainScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      // ReadText(result.uri)
      //   .then((text) => {
      //     console.log(text);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  return (
    <View style={styles.screen}>
      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <Text style={{ marginTop: 20, marginBottom: 10, color: '#474747' }}>
          1. Capture a screenshot of the suspicious message
        </Text>
        <Text style={{ color: '#474747', marginBottom: 10 }}>Quick links:</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../assets/message.png')}
            />
            {/* <Text style={{ fontSize: 11, marginTop: 10 }}>Message</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require('../assets/whatsapp.jpg')}
            />
            {/* <Text style={{ fontSize: 11 }}>Whatsapp</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../assets/telegram.jpg')}
            />
            {/* <Text style={{ fontSize: 11 }}>Telegram</Text> */}
          </View>
        </View>
        <Text style={{ marginBottom: 20, color: '#474747', marginTop: 20 }}>
          2. Autofill with your screenshot/fill manually:{' '}
        </Text>

        <View style={{ marginBottom: 20 }}>
          <Button title='Upload image' onPress={uploadImage} />
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
