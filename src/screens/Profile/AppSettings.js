import {
  Image,
  StyleSheet,
  Switch,
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

const AppSettings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginTop: hp(3),
          marginLeft: wp(3),
        }}>
        <Image
          source={require('../../assets/Icons/back.png')}
          style={{
            width: wp(6),
            height: wp(6),

            tintColor: 'white',
          }}
        />
        <Text style={styles.smtext}>App Settings</Text>
      </TouchableOpacity>
      <View style={{marginTop: hp(6)}}>
        <Text style={styles.smtext}>Notifications</Text>
        <View style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Icons/notification.png')}
              style={styles.buttonImage}
            />
            <View tyle={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.buttonText}>Allow Notification</Text>
              <Text style={styles.buttonText1}>Turn on/off Notifications</Text>
            </View>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={{marginTop: hp(3)}}>
        <Text style={styles.smtext}>Network</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Icons/wifi.png')}
              style={styles.buttonImage}
            />
            <View tyle={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.buttonText}>Streaming Data Usage</Text>
              <Text style={styles.buttonText1}>Automatic</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Icons/gauge.png')}
              style={styles.buttonImage}
            />
            <View tyle={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.buttonText}>Internet Speed Test</Text>
              <Text style={styles.buttonText1}>Check Your Network Speed</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: hp(2)}}>
        <Text style={styles.smtext}>Network</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Icons/document.png')}
              style={styles.buttonImage}
            />
            <View tyle={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.buttonText}>Open Source License</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Icons/privacy.png')}
              style={styles.buttonImage}
            />
            <View tyle={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.buttonText}>Privacy Policy</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Icons/cookie.png')}
              style={styles.buttonImage}
            />
            <View tyle={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.buttonText}>Cookies Preference</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Icons/terms-and-conditions.png')}
              style={styles.buttonImage}
            />
            <View tyle={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.buttonText}>Terms of Use</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopColor: '#fff',
          borderTopWidth: 1,
          marginTop: hp(3.5),
          paddingVertical: hp(1.5),
          paddingHorizontal: wp(3),
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',

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
    </View>
  );
};

export default AppSettings;

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
    fontWeight: 'bold',
    color: '#fff',
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(0.5),
    backgroundColor: '#161616',
    padding: hp(2),
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  buttonImage: {
    width: wp(7),
    height: wp(8),
    resizeMode: 'contain',
    marginRight: hp(1),
    tintColor: 'white',
  },
  buttonText: {
    color: '#fff',
    fontSize: hp(1.5),
    fontWeight: '700',
    marginLeft: hp(1.5),
  },
  buttonText1: {
    color: '#fff',
    fontSize: hp(1),
    fontWeight: '400',
    marginLeft: hp(1.5),
  },
});
