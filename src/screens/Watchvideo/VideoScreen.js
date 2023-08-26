import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';
import {useFocusEffect} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const VideoPlayerScreen = ({route, navigation}) => {
  const {item} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  useFocusEffect(
    React.useCallback(() => {
      const onAndroidBackPress = () => {
        navigation.goBack();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);

      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onAndroidBackPress,
        );
      };
    }, []),
  );
  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{uri: item.uri}}
        style={styles.video}
        controls
        resizeMode="contain"
        pictureInPicture={true}
        fullscreen={true}
        onEnd={() => navigation.goBack()}
        onLoadStart={handleLoadStart}
        onLoad={handleLoadEnd}
        playInBackground={true}
      />
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#fff"
          style={styles.activityIndicator}
        />
      )}
      <TouchableOpacity
        style={styles.exitButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/Icons/remove-button.png')}
          style={{width: wp(7), height: wp(7), tintColor: '#fff'}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
  exitButton: {
    position: 'absolute',
    top: hp(3),
    left: hp(3),
    padding: 10,
    zIndex: 1,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 2,
  },
});

export default VideoPlayerScreen;
