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
            marginBottom: 20,
            marginLeft: 10,
            color: '#474747',
          }}
        >
          Input a suspected number, we will check if that phone number is from a
          scammer.
        </Text>
        <Text
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
        </Text>

        <Text style={{ marginLeft: 10, marginTop: 30 }}>Phone number: </Text>
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
              Search for possible scam
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 30,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Result</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginBottom: 8,
              marginTop: 5,
            }}
          />
          <Text>
            No result received. Please input the suspected phone number again.
          </Text>
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
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default PhoneScreen;
