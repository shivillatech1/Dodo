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
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import {PhoneInput} from 'react-native-international-phone-number';
const Signin = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [loading, SetLoading] = useState(false);

  async function signInWithPhoneNumber() {
    SetLoading(true);
    const confirmation = await auth().signInWithPhoneNumber(
      selectedCountry?.callingCode + inputValue,
    );
    setInputValue('');
    navigation.navigate('Otp', {confirm: confirmation});
    SetLoading(false);
  }

  console.log(selectedCountry?.callingCode + inputValue);
  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }

  useEffect(() => {
    setTimeout(() => {
      // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      // return subscriber; // unsubscribe on unmount
      navigation.navigate('Otp');
    }, 3000);
  }, [navigation]);
  return (
    <>
      <View
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: hp(1.79),
                }}>
                Sign-in
              </Text>{' '}
              and Enjoy
            </Text>
            <Text style={styles.text1}>
              thousands of Movies and Series from our library.
            </Text>
          </View>
          <View style={styles.containerText}>
            <Image
              source={require('../../assets/Icons/telephone.png')}
              style={{
                height: wp(3.5),
                width: wp(3.5),
                tintColor: 'white',
                marginLeft: hp(0.8),
              }}
            />
            <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={handleInputValue}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              maxLength={14}
              placeholderTextColor={'white'}
            />
          </View>

          <View style={styles.footer}>
            <View style={styles.line} />
            <Text
              style={{
                fontSize: hp(1.3),
                fontWeight: '400',
                color: 'gray',
                textAlign: 'center',
                paddingHorizontal: hp(2),
              }}>
              New User ?
            </Text>
            <View style={styles.line} />
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: hp(12),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: wp(30), height: wp(30), resizeMode: 'cover'}}
          source={require('../../assets/Images/logo.png')}
        />
        <Text
          style={{
            color: '#fff',
            fontWeight: '700',
            fontSize: hp(1.8),
            paddingVertical: 8,
          }}>
          Enjoy Over 100,000 Movies and Series Only On One Place.
        </Text>
      </View>
    </>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(3),
  },
  text: {
    fontSize: hp(1.7),
    fontWeight: '500',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  footer: {
    marginTop: hp(4),
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp(2),
  },
  line: {
    borderColor: 'gray',
    width: wp(25),
    borderBottomWidth: 1,
  },
  text1: {
    fontSize: hp(1.7),
    fontWeight: '500',

    paddingHorizontal: 16,
  },
  containerText: {
    marginTop: hp(3.5),
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    width: wp(76),
    marginLeft: hp(1.5),
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    paddingHorizontal: 6,
    borderRadius: 8,
    width: wp(75),
  },
  button: {
    backgroundColor: '#007be5',
    padding: 15,
    width: wp(30),
    borderRadius: wp(1),
    left: hp(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    color: '#F3F3F3',
  },
  containerStyle: {
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F3F3F3',
    marginVertical: 16,
  },
  flagContainerStyle: {
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: '#808080',
    justifyContent: 'center',
  },
});

{
  /** <View style={{position: 'absolute', top: hp(22), left: hp(15.8)}}>
   <Image
   style={{width: wp(40), height: wp(40), resizeMode: 'cover'}}
   source={require('../../assets/Images/logo.png')}
 />
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
      </View> */
}

{
  /**   <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Otp')}
         >
          {loading ? (
            <ActivityIndicator
              size="small"
              color="#fff"
              style={{justifyContent: 'center', alignItems: 'center'}}
            />
          ) : (
            <>
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
            </>
          )}
        </TouchableOpacity>*/
}
