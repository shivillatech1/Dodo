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

const Library = ({navigation}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = option => {
    setSelectedValue(option);
    setDropdownOpen(false);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleOptionPress = index => {
    setActiveIndex(index);
  };
  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(2.5), paddingHorizontal: hp(2.2)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}>
            <Text style={[styles.text, {color: '#14578b'}]}>
              DODO<Text style={[styles.text, {color: '#fff'}]}>FLIX</Text>
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Subscription')}>
              <Image
                source={require('../../assets/Icons/crown.png')}
                style={{height: wp(6.5), width: wp(6.5), resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: hp(1.8),
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/Icons/cast.png')}
                style={{
                  height: wp(5.5),
                  width: wp(5.5),
                  resizeMode: 'contain',
                  tintColor: 'white',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Image
                source={require('../../assets/Icons/search.png')}
                style={{
                  height: wp(5.5),
                  width: wp(5.5),
                  resizeMode: 'contain',
                  tintColor: 'white',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('../../assets/Icons/man.png')}
                style={{height: wp(9), width: wp(9), resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={toggleDropdown}
          style={styles.dropdownButton}>
          <Text style={{fontSize: hp(1.5), fontWeight: '800'}}>
            {selectedValue || ' Category'}
          </Text>
          <Image
            source={require('../../assets/Icons/down-arrow.png')}
            style={{
              height: wp(5),
              width: wp(5),
              resizeMode: 'contain',
              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
        {dropdownOpen && (
          <View style={styles.dropdownList}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleOptionSelect(option)}
                style={styles.dropdownItem}>
                <Text style={{fontSize: hp(1.3), fontWeight: '500'}}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <>
        <Text
          style={{
            fontSize: hp(2),
            fontWeight: 'bold',
            paddingHorizontal: hp(2.8),
            color: 'white',
            paddingVertical: 12,
          }}>
          My Library
        </Text>
        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => handleOptionPress(0)}
            style={[
              styles.optionButton,
              activeIndex === 0 && styles.activeOptionButton,
            ]}>
            <Text
              style={[
                styles.optionText,
                activeIndex === 0 && styles.activeOptionText,
              ]}>
              Movies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOptionPress(1)}
            style={[
              styles.optionButton,
              activeIndex === 1 && styles.activeOptionButton,
            ]}>
            <Text
              style={[
                styles.optionText,
                activeIndex === 1 && styles.activeOptionText,
              ]}>
              Series
            </Text>
          </TouchableOpacity>
        </View>
      </>
      <FlatList
        data={dummyData1}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={{
          paddingVertical: hp(3),
          paddingHorizontal: hp(1.6),
          paddingBottom: hp(6.5),
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Watch', {item: item})}
            style={{
              marginRight: 10,
              position: 'relative',
              marginBottom: 10,
            }}
            key={item.id}>
            <Image
              source={require('../../assets/Images/bg.jpeg')}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.titleText} numberOfLines={2}>
                  {item.title}
                </Text>
              </View>
            </View>
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
  dropdownButton: {
    padding: 10,
    flexDirection: 'row',
    gap: 3,
    borderRadius: 5,
  },
  dropdownList: {
    position: 'absolute',
    top: hp(8),
    left: hp(3),
    width: wp(25),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'black',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  container1: {
    marginTop: 10,
    paddingHorizontal: hp(2.8),
    flexDirection: 'row',
    gap: 20,
    marginBottom: 8,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  activeOptionButton: {
    backgroundColor: 'blue',
  },
  optionText: {
    color: 'white',
  },
  activeOptionText: {
    color: 'white',
  },
  image: {
    height: hp(20),
    width: wp(30),
    resizeMode: 'cover',
    borderRadius: hp(1),
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    left: 10,
    width: wp(25),
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
