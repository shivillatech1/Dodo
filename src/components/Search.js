import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Search = ({navigation}) => {
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

  const [Input, setInput] = useState('');

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
                source={require('../assets/Icons/crown.png')}
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
                source={require('../assets/Icons/cast.png')}
                style={{
                  height: wp(5.5),
                  width: wp(5.5),
                  resizeMode: 'contain',
                  tintColor: 'white',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/Icons/search.png')}
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
                source={require('../assets/Icons/man.png')}
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
            source={require('../assets/Icons/down-arrow.png')}
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
      <View style={styles.container1}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp(90),
            height: hp(7),
            alignItems: 'center',

            backgroundColor: '#111010',
          }}>
          <TextInput
            onChangeText={setInput}
            value={Input}
            style={{
              width: wp(70),

              borderRadius: 5,
              paddingHorizontal: hp(1.5),
            }}
            placeholder="Search ..."
            placeholderTextColor="white"
          />
          <TouchableOpacity onPress={() => console.log('pressed')}>
            <Image
              source={require('../assets/Icons/search.png')}
              style={{
                height: wp(5.5),
                width: wp(5.5),
                resizeMode: 'contain',
                tintColor: 'white',
                marginRight: 8,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: hp(4), paddingHorizontal: hp(1.6)}}>
          <Text
            style={{
              fontSize: hp(2.3),
              fontWeight: '700',
              color: 'white',
              marginBottom: 8,
            }}>
            Top Searches
          </Text>

          <FlatList
            data={dummyData1}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainer}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.itemContainer} key={item.id}>
                <Image
                  source={require('../assets/Images/bg.jpeg')}
                  style={styles.image}
                />
                <View style={styles.infoContainer}>
                  <Text style={styles.titleText} numberOfLines={2}>
                    {item.title}
                  </Text>
                </View>

                <Image
                  source={require('../assets/Icons/play.png')}
                  style={{width: wp(7), height: wp(7), tintColor: 'white'}}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const dummyData1 = [
  {
    id: 1,
    title: 'Movie Funtush ',
    Episode: 'S1 Ep1',
    image: require('../assets/Images/bg.jpeg'),
  },
  {
    id: 452,
    title: 'Movie 2',
    Episode: 'S1 Ep1',
    image: require('../assets/Images/bg.jpeg'),
  },
  {
    id: 375,
    title: 'Movie 3',
    Episode: 'S1 Ep1',
    image: require('../assets/Images/bg.jpeg'),
  },
  {
    id: 477,
    title: 'Movie 4',
    Episode: 'S1 Ep1',
    image: require('../assets/Images/bg.jpeg'),
  },
];
export default Search;
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
    marginTop: hp(3),
    paddingHorizontal: hp(3),
    marginBottom: 8,
  },
  contentContainer: {
    paddingVertical: hp(1.5),

    paddingBottom: hp(6.5),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: wp(25),
    width: wp(30),
    resizeMode: 'cover',
    borderRadius: hp(2),
    marginBottom: 8,
  },
  infoContainer: {},
  titleText: {
    color: '#fff', // Change to your desired text color
    fontSize: hp(1.8),
    fontWeight: 'bold',
  },
});
