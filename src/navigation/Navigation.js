import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import Downloads from '../screens/main/Downloads';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
/* eslint-disable prettier/prettier */
import {Image} from 'react-native';
import Search from '../components/Search';
import Profile from '../screens/Profile/Profile';
import AppSettings from '../screens/Profile/AppSettings';
import Subscription from '../screens/Subscription';
import WatchVideo from '../screens/Watchvideo';
import VideoPlayerScreen from '../screens/Watchvideo/VideoScreen';
const {NavigationContainer} = require('@react-navigation/native');
const {createNativeStackNavigator} = require('@react-navigation/native-stack');
const {default: Onboarding} = require('../screens/Onboarding');
const {default: Signin} = require('../screens/Auth/Signin');
const {default: Otp} = require('../screens/Auth');

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={Signin} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Main" component={MyTabs} />

        <Stack.Screen name="Appsetting" component={AppSettings} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen
          name="Watch"
          component={WatchVideo}
          options={{
            headerShown: true,

            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'white',
              fontSize: hp(2.6),
            },
            headerStyle: {
              padding: wp(3),
              alignItems: 'center',
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="Video" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#fff',

        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2a3239',
          position: 'absolute',
          bottom: 0,
          paddingHorizontal: wp(3),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: true,

          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontSize: hp(2.6),
          },
          headerStyle: {
            padding: wp(3),
            alignItems: 'center',
          },
          headerShadowVisible: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/Icons/home.png')}
              style={{
                width: wp(4.5),
                height: wp(4.5),
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontSize: hp(2.6),
          },
          headerStyle: {
            padding: wp(3),
            alignItems: 'center',
          },
          headerShadowVisible: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/Icons/search.png')}
              style={{
                width: wp(4.5),
                height: wp(4.5),
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          tabBarLabel: 'Downloads',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontSize: hp(2.6),
          },
          headerStyle: {
            padding: wp(3),
            alignItems: 'center',
          },
          headerShadowVisible: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/Icons/Down.png')}
              style={{
                width: wp(4.5),
                height: wp(4.5),
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/Icons/user.png')}
              style={{
                width: wp(4.5),
                height: wp(4.5),
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
