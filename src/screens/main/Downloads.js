import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Linking,
} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useLayoutEffect} from 'react';

import {useDownloadedVideos} from '../../Hooks/Download';
import {useFocusEffect} from '@react-navigation/native';
const Library = ({navigation}) => {
  const {downloadedVideos, loadDownloadedVideos} = useDownloadedVideos();

  console.log('Name is', downloadedVideos);

  useFocusEffect(
    useCallback(() => {
      loadDownloadedVideos();
    }, []),
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerStyle: {
        backgroundColor: 'black',
        height: hp(10.5),
      },

      headerLeft: () => (
        <TouchableOpacity
          onPress={() => console.log('Left Icon Pressed')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: wp(3),
          }}>
          <Image
            source={require('../../assets/Icons/menu.png')}
            style={{
              width: wp(8),
              height: wp(8),

              tintColor: '#D4af37',
            }}
          />
        </TouchableOpacity>
      ),
      // headerRight: () => (
      //   <TouchableOpacity onPress={() => console.log('Right Icon Pressed')}>
      //     <Image
      //       source={require('../../assets/Icons/search.png')}
      //       style={{
      //         height: wp(5.5),
      //         width: wp(5.5),
      //         resizeMode: 'contain',
      //         tintColor: 'white',
      //         marginRight: hp(1.8),
      //       }}
      //     />
      //   </TouchableOpacity>
      // ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={downloadedVideos}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{
          paddingVertical: hp(3),
          paddingHorizontal: hp(1.6),
          paddingBottom: hp(6.5),
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              marginRight: hp(2.2),
              position: 'relative',
              marginBottom: hp(1.8),
            }}
            key={item.id}
            onPress={() => {
              navigation.navigate('Video', {item: item});
            }}>
            <Image source={{uri: item}} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Library;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',
  },
  text: {
    fontSize: hp(2.6),
    fontWeight: 'bold',
  },

  image: {
    height: hp(15),
    width: wp(45),
    resizeMode: 'cover',
    borderRadius: hp(1),
  },

  titleText: {
    color: '#fff',
    fontSize: hp(1.7),
    fontWeight: 'bold',
  },
  episodeText: {
    color: '#fff',
    fontSize: hp(1.4),
    fontWeight: '400',
  },
  playIcon: {
    width: wp(6.5),
    height: wp(6.5),
    tintColor: '#fff',
  },
});
