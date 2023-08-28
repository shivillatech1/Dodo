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
const HomeScreen = ({navigation}) => {
  const categories = [
    {id: '1', title: 'Continue Watching'},
    {id: '2', title: 'Recommended For you'},
    // {id: '3', title: 'Recommended'},
  ];

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

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/download.jpeg')}
          style={[styles.moviePoster, {opacity: 0.7}]}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.8)']}
          style={[styles.gradient, {opacity: 0.9}]}>
          <View style={styles.movieInfoContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'transparent'}]}>
                <Image
                  source={require('../../assets/Icons/add.png')}
                  style={{width: wp(5), height: wp(5), tintColor: '#fff'}}
                />
                <Text style={styles.buttonText}>Watch later</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Watch')}
                style={[styles.button, {backgroundColor: '#4845f6'}]}>
                <Image
                  source={require('../../assets/Icons/play.png')}
                  style={{width: wp(5), height: wp(5), tintColor: '#fff'}}
                />
                <Text style={styles.buttonText}>Watch Now !</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <ScrollView
          contentContainerStyle={{paddingBottom: 150, paddingHorizontal: 15}}
          showsVerticalScrollIndicator={false}>
          {categories.map(category => (
            <View key={category.id}>
              <Text style={styles.categoryLabel}>{category.title}</Text>
              {category.title === 'Continue Watching' ? (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {dummyData1.map(item => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Watch', {item: item})}
                      style={{
                        marginRight: 10,
                        position: 'relative',
                      }}
                      key={item.id}>
                      <Image
                        source={require('../../assets/Images/bg.jpeg')}
                        style={{
                          height: hp(15),
                          width: wp(43),
                          resizeMode: 'cover',
                          borderRadius: hp(2),
                        }}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          position: 'absolute',
                          bottom: 10,
                          left: 10,
                          width: wp(30),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: hp(1.7),
                            fontWeight: 'bold',
                          }}>
                          {item.title.length > 10
                            ? item.title.slice(0, 9) + '...'
                            : item.title}
                        </Text>
                        <Image
                          source={require('../../assets/Icons/play.png')}
                          style={{
                            width: wp(6.5),
                            height: wp(6.5),
                            tintColor: '#fff',
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              ) : null}
              {category.title === 'Recommended For you' ? (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {dummyData1.map(item => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Watch', {item: item})}
                      style={{
                        marginRight: 10,
                        position: 'relative',
                      }}
                      key={item.id}>
                      <Image
                        source={require('../../assets/Images/bg.jpeg')}
                        style={{
                          height: hp(20),
                          width: wp(35),
                          resizeMode: 'cover',
                          borderRadius: hp(1),
                        }}
                      />
                      <LinearGradient
                        colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.5)']}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          borderRadius: hp(1),
                        }}></LinearGradient>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              ) : null}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{position: 'absolute', top: hp(2), left: hp(3), flex: 1}}>
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
              left: hp(13.6),
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
          <Text style={{fontSize: hp(1.5), fontWeight: '800', color: 'white'}}>
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
                <Text
                  style={{
                    fontSize: hp(1.3),
                    fontWeight: '500',
                    color: 'white',
                  }}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </>
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
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: 2,
    title: 'Movie Funtush',
    image: require('../../assets/Images/bg.jpeg'),
    description:
      'An action-packed thriller that will keep you on the edge of your seat.',
    rating: 4.5,
    genres: ['Action', 'Drama'],
  },
  {
    id: 3,
    title: 'Movie Funtush',
    image: require('../../assets/Images/bg.jpeg'),
    description: 'A heartwarming romance that will touch your soul.',
    rating: 4.7,
    genres: ['Romance', 'Drama'],
  },
  {
    id: 4,
    title: 'Movie Funtush',
    image: require('../../assets/Images/bg.jpeg'),
    description: 'A mind-bending science fiction journey.',
    rating: 4.9,
    genres: ['Science Fiction', 'Mystery'],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  moviePoster: {
    width: '100%',
    height: hp(55),
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    top: hp(30),
    width: wp(100),
    height: hp(25),
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  movieInfoContainer: {
    position: 'absolute',
    top: hp(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#e50914',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginRight: hp(8),
    left: hp(4.2),
    width: wp(35),
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: wp(2),
  },
  categoryLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  contentImage: {
    width: wp(40),
    height: hp(12),
    marginRight: 10,
    borderRadius: 5,
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
});

export default HomeScreen;
