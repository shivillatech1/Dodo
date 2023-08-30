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

const Topics = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <FlatList
        data={dummyData1}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{
          paddingVertical: hp(8),
          paddingHorizontal: hp(1.6),
          paddingBottom: hp(6.5),
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              marginRight: hp(2.2),

              marginBottom: hp(1.8),
            }}
            key={item.id}>
            <Image
              source={require('../assets/Images/bg.jpeg')}
              style={styles.image}
            />
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.4)', 'rgba(0,0,0,0.6)']}
              style={{
                position: 'absolute',
                width: wp(46),
                bottom: 0,
                height: hp(15.5),
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: hp(1.8),
                backgroundColor: '#fff',
                width: wp(35),
                left: wp(5),
                padding: wp(0.6),
              }}>
              <Text
                style={{
                  fontSize: hp(1.6),
                  fontWeight: '800',
                  color: '#000',
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Topics;

const dummyData1 = [
  {
    id: 1,
    title: 'Movie Funtush',
    image: require('../assets/Images/bg.jpeg'),
    description: 'A hilarious comedy that will keep you laughing.',
    rating: 4.8,
    genres: ['Comedy', 'Adventure'],
  },
  {
    id: 2,
    title: 'Web Series',
    image: require('../assets/Images/bg.jpeg'),
    description:
      'An action-packed thriller that will keep you on the edge of your seat.',
    rating: 4.5,
    genres: ['Action', 'Drama'],
  },
  {
    id: 3,
    title: 'Sports',
    image: require('../assets/Images/bg.jpeg'),
    description: 'A heartwarming romance that will touch your soul.',
    rating: 4.7,
    genres: ['Romance', 'Drama'],
  },
  {
    id: 4,
    title: 'Cartoon',
    image: require('../assets/Images/bg.jpeg'),
    description: 'A mind-bending science fiction journey.',
    rating: 4.9,
    genres: ['Science Fiction', 'Mystery'],
  },
];

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
