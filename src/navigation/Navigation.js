import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import Library from '../screens/main/Library';
import Series from '../screens/main/Series';
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
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Appsetting" component={AppSettings} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen name="Watch" component={WatchVideo} />
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
        tabBarActiveBackgroundColor: '#004dfc',
        tabBarLabelPosition: 'beside-icon',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          position: 'absolute',
          bottom: 0,
        },
      }}>
      <Tab.Screen
        name="Movies"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/Icons/movie.png')}
              style={{
                width: wp(6),
                height: wp(6),
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/Icons/series.png')}
              style={{
                width: wp(6.5),
                height: wp(6.5),
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/Icons/video-files.png')}
              style={{
                width: wp(6),
                height: wp(6),
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
