/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
const Signin = ({navigation}) => {
  const [confirm, setConfirm] = useState(null);
  console.log(confirm);

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
    navigation.navigate('Otp', {confirm: confirmation});
  }

  return (
    <ImageBackground
      source={require('../../assets/Images/bg.jpeg')}
      style={{width: '100%', height: '100%', flex: 1}}>
      <View style={{position: 'absolute', top: hp(18), left: hp(15.8)}}>
        <Text style={{color: '#4845f6', fontWeight: 'bold', fontSize: hp(3.5)}}>
          DODO<Text style={{color: 'white'}}>FLIX</Text>
        </Text>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: hp(1.8),
            paddingVertical: 8,
            right: hp(15),
          }}>
          Enjoy Over 100,000 Movies and Series Only On One Place.
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{marginTop: hp(5)}}>
          <Text style={styles.text}>
            <Text
              style={{color: 'white', fontWeight: 'bold', fontSize: hp(1.79)}}>
              Sign-in
            </Text>{' '}
            and Enjoy
          </Text>
          <Text style={styles.text1}>
            thousands of Movies and Series from our library.
          </Text>
        </View>
        <View style={styles.containerText}>
          <TextInput
            style={styles.input}
            placeholder="(123) 456-7890"
            keyboardType="phone-pad"
            maxLength={14}
          />
        </View>
        {!confirm && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Otp')}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                textAlign: 'center',
                paddingHorizontal: 8,
              }}>
              Sign up
            </Text>
            <Image
              source={require('../../assets/Icons/sign-in.png')}
              style={{height: wp(5), width: wp(5), tintColor: 'white'}}
            />
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: hp(30),
    left: hp(3.5),
    height: hp(45),
    width: wp(86),
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  text: {
    fontSize: hp(1.7),
    fontWeight: '500',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  text1: {
    fontSize: hp(1.7),
    fontWeight: '500',

    paddingHorizontal: 16,
  },
  containerText: {
    padding: 16,
    marginTop: hp(1.7),
  },
  input: {
    backgroundColor: '#1E1E1E', // Input field background color
    padding: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007be5',
    padding: 15,
    width: wp(30),
    borderRadius: wp(1),
    left: hp(24),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
