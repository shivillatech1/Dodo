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
      source={require('../../assets/Images/logo2.jpg')}
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          top: hp(15),
          borderColor: '#80797a',
          borderWidth: 0.8,
          height: hp(15),
          width: wp(50),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: hp(3.8),
            fontWeight: 'bold',
            color: 'white',
            shadowColor: '#fff',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 5,
          }}>
          MEDIA
        </Text>
        <Text
          style={{
            fontSize: hp(3.2),
            fontWeight: '400',
            color: 'white',
            shadowColor: '#fff',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 5,
          }}>
          CLINIQUE
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{marginTop: hp(3), marginBottom: hp(2)}}>
          <Text style={styles.text}>
            <Text
              style={{color: 'white', fontWeight: '300', fontSize: hp(2.3)}}>
              Watch the latest Movies, Tv shows,
            </Text>
            and award-Winining Demo
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: '#1c15ee',
              fontWeight: '600',
              textAlign: 'center',
              paddingHorizontal: 8,
            }}>
            Join Demo $1499/Year
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: '#1c15ee',
              fontWeight: '600',
              textAlign: 'center',
              paddingHorizontal: 8,
            }}>
            Demo Video Mobile Edition at $599/Year
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: '#1c15ee',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: hp(2.2),
    fontWeight: '300',
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
    backgroundColor: '#d4af37',
    padding: 15,
    width: wp(85),
    borderRadius: wp(1),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
});
