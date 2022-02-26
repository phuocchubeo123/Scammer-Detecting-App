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
  ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// const ReadText = require('text-from-image');
const MainScreen = (props) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(false);
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
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
      setNumber(' +65 81974118');
      setText(
        'Hi,We provide \n *Soccer * \n Live Casino \n* Slot GameEasy Registered \n Weekly Settlement & \n Daily Cash outRebate up to 10-38% \n Have a nice day!! \n WS:wa.me/6584196609'
      );
    }
  };

  return (
    // <View>
    loading ? (
      !result ? (
        <ScrollView
          style={styles.screen}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
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
            <Text
              style={{ color: '#474747', marginBottom: 10, marginLeft: 10 }}
            >
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
                <TouchableOpacity
                  onPress={() => Linking.openURL('sms:+123456789')}
                >
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
                  backgroundColor: '#FF6F61',
                  borderRadius: 10,
                  height: 30,
                  justifyContent: 'center',
                }}
                onPress={() => uploadImage()}
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
              onChangeText={(newNumber) => setText(newNumber)}
              defaultValue={number}
              style={{
                marginHorizontal: 10,
                height: 40,
                borderStyle: 'dotted',
                borderWidth: 1,
                borderRadius: 1,
                marginTop: 5,
              }}
            ></TextInput>
            <Text style={{ marginTop: 20, marginLeft: 10 }}>
              Pasted message:{' '}
            </Text>
            <TextInput
              underlineColorAndroid='transparent'
              multiline={true}
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
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
                onPress={() => {
                  setLoading(false);
                  setTimeout(() => {
                    setResult(true);
                    setLoading(true);
                  }, 3000);
                }}
                style={{
                  backgroundColor: '#009B77',
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
          <View
            style={{
              width: '100%',
              position: 'absolute',
              bottom: 0,
              // marginBottom: 30,
              height: 80,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              backgroundColor: '#34568B',
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate('MainScreen')}
              style={{ alignItems: 'center' }}
            >
              <AntDesign name='message1' size={24} color='white' />
              <Text style={{ color: 'white' }}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => props.navigation.navigate('PhoneScreen')}
            >
              <AntDesign name='phone' size={24} color='white' />
              <Text style={{ color: 'white' }}>Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => props.navigation.navigate('PhoneScreen')}
            >
              <Entypo name='text-document' size={24} color='white' />
              <Text style={{ color: 'white' }}>Report</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <View style={{ flex: 1 }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '25%',
            }}
          >
            <Text style={{ fontSize: 17, marginBottom: 20 }}>
              This is likely a{' '}
              <Text style={{ color: 'red', fontWeight: 'bold' }}>
                spam message.
              </Text>
            </Text>
            <Ionicons name='warning-outline' size={50} color='black' />
            <Text style={{ marginTop: 30, marginBottom: 60 }}>
              Scam likelihood for this message:{' '}
              <Text style={{ color: 'brown', fontWeight: 'bold' }}>82.56%</Text>
            </Text>

            <TouchableOpacity
              style={{
                width: '50%',
                backgroundColor: '#FF6F61',
                borderRadius: 10,
                height: 30,
                justifyContent: 'center',
              }}
              onPress={() => {
                setLoading(true);
                setResult(false);
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                Back to home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#00ff00' />
      </View>
    )

    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MainScreen;
