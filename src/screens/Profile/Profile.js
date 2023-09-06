import {
  Image,
  ScrollView,
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
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  const handleButtonPress = buttonTitle => {
    navigation.navigate(buttonTitle);
  };
  const Signout = () => {
    auth()
      .signOut()
      .then(() => navigation.replace('SignIn'));
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/Icons/back.png')}
          style={{
            width: wp(7),
            height: wp(7),
            marginLeft: wp(6),
            marginTop: hp(3),
            tintColor: 'white',
          }}
        />
      </TouchableOpacity>
      <View style={styles.main}>
        <Image
          source={require('../../assets/Icons/man.png')}
          style={{
            width: wp(25),
            height: wp(25),
          }}
        />
        <Text style={[styles.text, {color: 'white'}]}>
          Aranya Prakash Mahapatra
        </Text>
        <View style={{flexDirection: 'row', gap: 3, marginTop: hp(0.5)}}>
          <Image
            source={require('../../assets/Icons/edit.png')}
            style={{
              width: wp(5),
              height: wp(5),

              tintColor: 'white',
            }}
          />
          <Text style={[styles.smtext, {color: 'white'}]}>Manage profile</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Button
          title="Subscription"
          imageSource={require('../../assets/Icons/video.png')}
          onPress={() => handleButtonPress('Subscription')}
        />
        <Button
          title="App Settings"
          imageSource={require('../../assets/Icons/settings.png')}
          onPress={() => handleButtonPress('Appsetting')}
        />
        <Button
          title="Account Settings"
          imageSource={require('../../assets/Icons/settingac.png')}
          onPress={() => handleButtonPress('Account Settings')}
        />
        <Button
          title="Help"
          imageSource={require('../../assets/Icons/question.png')}
          onPress={() => handleButtonPress('Help')}
        />
        <Button
          title="Watch History"
          imageSource={require('../../assets/Icons/history.png')}
          onPress={() => handleButtonPress('Watch History')}
          clear="Clear"
        />
      </View>
      <View
        style={{
          borderTopColor: '#fff',
          borderTopWidth: 1,
          marginTop: hp(1.8),
          paddingVertical: hp(0.9),
          paddingHorizontal: wp(3),
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: hp(0.8),
            backgroundColor: '#000',
            borderRadius: 10,
            flexDirection: 'row',
            gap: 5,
          }}>
          <Image
            source={require('../../assets/Icons/sign-in.png')}
            style={{
              width: wp(6),
              height: wp(6),

              tintColor: 'white',
            }}
          />
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: hp(2.1)}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    fontSize: hp(3),
    fontWeight: 'bold',
    paddingHorizontal: hp(1.8),
  },
  smtext: {
    fontSize: hp(1.9),
    fontWeight: '600',
  },
  main: {
    marginTop: hp(9),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: hp(5),
  },
});
