/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
const Onboarding = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      // return subscriber; // unsubscribe on unmount
      navigation.navigate('SignIn');
    }, 1000);
  }, [navigation]);
  useEffect(() => {}, []);

  function onAuthStateChanged(user) {
    if (user) {
      // Handle successful authentication
      // For example, you can navigate to the main screen
      navigation.navigate('Main');
    } else {
      navigation.navigate('SignIn');
    }
  }
  return (
    <ImageBackground
      style={styles.container}
      defaultSource={require('../../assets/Images/logo2.jpg')}
      source={require('../../assets/Images/logo2.jpg')}>
      <View style={styles.center}>
        <Text style={styles.text}>MEDIA</Text>
        <Text style={styles.text1}>CLINIQUE</Text>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    resizeMode: 'contain',
  },
  center: {
    height: hp(30),
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(51,58,68)',
  },
  text: {
    fontSize: hp(5.6),
    fontWeight: 'bold',
    color: 'white',
  },
  text1: {
    fontSize: hp(4.6),
    fontWeight: '400',
    color: 'white',
  },
});
