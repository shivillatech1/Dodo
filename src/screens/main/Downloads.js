import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useLayoutEffect} from 'react';
const Library = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Demo',
      headerStyle: {
        backgroundColor: 'black',
        height: hp(10.5),
      },

      headerLeft: () => (
        <TouchableOpacity onPress={() => console.log('Left Icon Pressed')}>
          <Image
            source={require('../../assets/Icons/hamburger.png')}
            style={{
              height: wp(5.5),
              width: wp(5.5),
              resizeMode: 'contain',
              tintColor: 'white',
              marginLeft: hp(1.8),
            }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('Right Icon Pressed')}>
          <Image
            source={require('../../assets/Icons/search.png')}
            style={{
              height: wp(5.5),
              width: wp(5.5),
              resizeMode: 'contain',
              tintColor: 'white',
              marginRight: hp(1.8),
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData1}
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
            key={item.id}>
            <Image
              source={require('../../assets/Images/bg.jpeg')}
              style={styles.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const dummyData1 = [
  {
    id: 1,
    title: 'Movie Funtush',
    image: require('../../assets/Images/bg.jpeg'),
    description: 'A hilarious comedy that will keep you laughing.',
    rating: 4.8,
    genres: ['Comedy', 'Adventure'],
  },
  {
    id: 2,
    title: 'Movie 2',
    image: require('../../assets/Images/bg.jpeg'),
    description:
      'An action-packed thriller that will keep you on the edge of your seat.',
    rating: 4.5,
    genres: ['Action', 'Drama'],
  },
  {
    id: 3,
    title: 'Movie 3',
    image: require('../../assets/Images/bg.jpeg'),
    description: 'A heartwarming romance that will touch your soul.',
    rating: 4.7,
    genres: ['Romance', 'Drama'],
  },
  {
    id: 4,
    title: 'Movie 4',
    image: require('../../assets/Images/bg.jpeg'),
    description: 'A mind-bending science fiction journey.',
    rating: 4.9,
    genres: ['Science Fiction', 'Mystery'],
  },
];

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
