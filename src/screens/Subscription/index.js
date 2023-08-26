/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Subscription = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/Images/bg.jpeg')}
      style={{width: '100%', height: '100%', flex: 1}}>
      <View style={{position: 'absolute', top: hp(25), left: hp(9)}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: hp(3.5)}}>
          Welcome to
        </Text>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: hp(3.5)}}>
          DODOFLiX Video
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{marginTop: hp(5), marginBottom: 13}}>
          <Text style={styles.text}>
            <Text
              style={{color: 'white', fontWeight: '500', fontSize: hp(2.3)}}>
              Watch the latest Movies, Tv shows,
            </Text>
            and award-Winining DODOFLIX
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              textAlign: 'center',
              paddingHorizontal: 8,
            }}>
            Join DODOFLIX $1499/Year
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              textAlign: 'center',
              paddingHorizontal: 8,
            }}>
            DODOFLIX Video Mobile Edition at $599/Year
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              textAlign: 'center',
              paddingHorizontal: 8,
            }}>
            View All Plans
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: hp(30),
    left: hp(3.5),
    height: hp(45),
    width: wp(86),
  },
  text: {
    fontSize: hp(2.2),
    fontWeight: '500',
    paddingTop: 16,
    paddingHorizontal: 16,
    color: 'white',
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
    width: wp(85),
    borderRadius: wp(1),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
});
