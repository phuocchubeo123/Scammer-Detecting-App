import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import OpenApplication from 'react-native-open-application';
import { ScrollView } from 'react-native-gesture-handler';

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
    <ScrollView style={styles.screen}>
      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,
            color: '#474747',
            fontWeight: 'bold',
          }}
        >
          1. Capture a screenshot of the message
        </Text>
        <Text style={{ color: '#474747', marginBottom: 10, marginLeft: 10 }}>
          Quick links:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL('sms:+123456789')}>
              <Image
                style={{ width: 50, height: 50 }}
                source={require('../assets/message.png')}
              />
            </TouchableOpacity>

            {/* <Text style={{ fontSize: 11, marginTop: 10 }}>Message</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'whatsapp://send?phone=${whatsappNo}&text=${whatsappMsg}'
                )
              }
            >
              <Image
                style={{ width: 70, height: 70 }}
                source={require('../assets/whatsapp.jpg')}
              />
            </TouchableOpacity>

            {/* <Text style={{ fontSize: 11 }}>Whatsapp</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://t.me/');
              }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={require('../assets/telegram.jpg')}
              />
            </TouchableOpacity>

            {/* <Text style={{ fontSize: 11 }}>Telegram</Text> */}
          </View>
        </View>
        <Text
          style={{
            marginBottom: 20,
            color: '#474747',
            marginTop: 20,
            fontWeight: 'bold',
          }}
        >
          2. Autofill with your screenshot/fill manually:{' '}
        </Text>

        <View
          style={{
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              width: '50%',
              backgroundColor: '#34568B',
              borderRadius: 10,
              height: 30,
              justifyContent: 'center',
            }}
            onPress={uploadImage}
          >
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Upload image
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginLeft: 10 }}>Phone number: </Text>
        <TextInput
          style={{
            marginHorizontal: 10,
            height: 40,
            borderStyle: 'dotted',
            borderWidth: 1,
            borderRadius: 1,
            marginTop: 5,
          }}
        ></TextInput>
        <Text style={{ marginTop: 20, marginLeft: 10 }}>Pasted message: </Text>
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
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity
            onPress={() => Alert.alert('Uploaded image')}
            style={{
              backgroundColor: '#FF6F61',
              height: 40,
              justifyContent: 'center',
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Deep check by AI
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MainScreen;
