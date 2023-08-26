/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
const Onboarding = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
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
    <View style={styles.container}>
      <Text style={[styles.text, {color: '#14578b'}]}>DODO</Text>
      <Text style={[styles.text, {color: '#fff'}]}>FLIX</Text>
    </View>
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
  },
  text: {
    fontSize: hp(5.6),
    fontWeight: 'bold',
  },
});
