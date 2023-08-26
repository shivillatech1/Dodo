/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Otp = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text.length === 1 && index < 3) {
        refs[index + 1].current.focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
      refs[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Icons/back.png')}
        style={{
          width: wp(8),
          height: wp(8),
          marginLeft: wp(6),
          marginTop: hp(3),
          tintColor: 'white',
        }}
      />
      <View style={styles.main}>
        <Text style={[styles.text, {color: 'white'}]}>Otp Verification</Text>
        <Text style={[styles.smtext, {color: 'white'}]}>
          This Verification is essential for 2-Step Verification and making your
          account secure in any case of loss.
        </Text>
      </View>
      <View style={styles.Otpcontainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            onChangeText={text => handleOtpChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            value={digit}
            keyboardType="number-pad"
            maxLength={1}
            secureTextEntry // To hide the entered digits
            ref={refs[index]}
          />
        ))}
      </View>

      <View
        style={{
          width: '100%',
          marginTop: hp(2.5),
        }}>
        <Text
          style={{
            fontWeight: '600',
            color: 'white',
            paddingHorizontal: hp(2.5),
            fontSize: hp(1.7),
          }}>
          Resend OTP
        </Text>
        <Text
          style={{
            fontSize: hp(1.7),
            fontWeight: '300',
            color: 'white',
            paddingHorizontal: hp(2.5),
            paddingVertical: 22,
          }}>
          The OTP has been sent to your personal number ending with XXXX please
          Do not share it with others.
        </Text>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#100bfa'}]}
          onPress={() => navigation.navigate('Main')}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Complete
          </Text>
          <Image
            source={require('../../assets/Icons/checked.png')}
            style={{
              width: wp(5),
              height: wp(5),
              marginLeft: 8,

              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#1b1b19'}]}>
          <Text style={{color: 'white', fontWeight: '500', fontSize: hp(1.8)}}>
            Having Issue? Change Number !
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',
  },
  text: {
    fontSize: hp(3.8),
    fontWeight: 'bold',
    paddingHorizontal: hp(1.8),
  },
  smtext: {
    fontSize: hp(1.4),
    fontWeight: '300',

    paddingVertical: 20,
    paddingHorizontal: hp(1.8),
  },
  main: {
    paddingHorizontal: hp(1.8),
    marginTop: 20,
  },
  button: {
    marginTop: 40,

    borderRadius: 10,
    padding: 16,
    width: wp(80),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 33,
    flexDirection: 'row',
  },
  Otpcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(3),
    marginBottom: hp(3),
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: hp(1.8),
    width: wp(13),
    textAlign: 'center',
    marginRight: 10,
  },
});
