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
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// const ReadText = require('text-from-image');
const PhoneScreen = (props) => {
  const [image, setImage] = useState(null);
  const [tapped, setTapped] = useState(true);
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
    }
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View style={{ marginLeft: 15, marginRight: 15, marginTop: 20 }}>
        <Text
          style={{
            marginTop: 5,
            marginBottom: 0,
            marginLeft: 10,
            color: '#474747',
          }}
        >
          Report your confirmed scam phone number/link below:
        </Text>
        {/* <Text
          style={{
            color: '#474747',
            marginLeft: 10,
            fontStyle: 'italic',
          }}
        >
          How it works:
        </Text>
        <Text style={{ fontStyle: 'italic', marginLeft: 10 }}>
          We will query the phone number in our report database, contributed by
          our app’s user community.
        </Text> */}
        <Text style={{ marginLeft: 10, marginTop: 30 }}>Phone number: </Text>
        <TextInput
          onChangeText={(newNumber) => setNumber(newNumber)}
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
        <Text style={{ marginLeft: 10, marginTop: 30 }}>Detail: </Text>
        <TextInput
          underlineColorAndroid='transparent'
          multiline={true}
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
          style={{
            marginHorizontal: 10,
            height: 120,
            borderStyle: 'dotted',
            borderWidth: 1,
            borderRadius: 1,
            textAlignVertical: 'top',
            marginTop: 5,
          }}
        ></TextInput>
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity
            onPress={() => {
              setText('');
              setNumber('');
              Alert.alert(
                'Thank you!',
                'Thank you very much. Your valued contributed data will be processed, before being putted to our database to help other users prevent scammers.',
                [
                  //   {
                  //     text: 'Cancel',
                  //     onPress: () => console.log('Cancel Pressed'),
                  //     style: 'cancel',
                  //   },
                  { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
              );
            }}
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
              Submit report
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
          onPress={() => props.navigation.navigate('ReportScreen')}
        >
          <Entypo name='text-document' size={24} color='white' />
          <Text style={{ color: 'white' }}>Report</Text>
        </TouchableOpacity>
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

export default PhoneScreen;
