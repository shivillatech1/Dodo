import React, {useEffect, useState} from 'react';
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
import {useLayoutEffect} from 'react';
import {SearchApi, onGetWatchList, onGetplaylist} from '../services/API';
import {API_IMG} from '../utils/BaseImg';

const Search = ({navigation}) => {
  const [watchLater, setWatchLater] = useState([]);
  const [Playlist, setPlayLists] = useState([]);
  // const [input, setInput] = useState([]);

  useEffect(() => {
    GetAllWatchLater();
    GetAllPlaylists();
  }, []);

  const GetAllWatchLater = async () => {
    try {
      const response = await onGetWatchList();
      // console.log(response.data.todos);
      setWatchLater(response.data.todos);
    } catch (error) {
      console.log(error);
    }
  };
  const GetAllPlaylists = async () => {
    try {
      const response = await onGetplaylist();
      // console.log(response.data.todos);
      setPlayLists(response.data.todos);
    } catch (error) {
      console.log(error);
    }
  };
  const Search = async () => {
    var raw = JSON.stringify({
      search: Input,
    });
    try {
      const response = await SearchApi(raw);
      console.log(response.data.Video);
      setSearch(response.data.Video);
      // ToastAndroid.showWithGravity(
      //   `${watchlist.message}`,
      //   ToastAndroid.SHORT,
      //   ToastAndroid.CENTER,
      // );
    } catch (error) {
      console.log(error);
    }
  };
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
            source={require('../assets/Icons/menu.png')}
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
      //       source={require('../assets/Icons/search.png')}
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

  const [Input, setInput] = useState('');
  const [search, setSearch] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp(96),
            height: hp(7),
            alignItems: 'center',

            backgroundColor: '#111010',
          }}>
          <TouchableOpacity onPress={() => Search()}>
            <Image
              source={require('../assets/Icons/search.png')}
              style={{
                height: wp(5.5),
                width: wp(5.5),
                resizeMode: 'contain',
                tintColor: 'white',
                marginLeft: 11,
              }}
            />
          </TouchableOpacity>
          <TextInput
            onChangeText={text => {
              setInput(text);
            }}
            value={Input}
            style={{
              width: wp(75),
              marginLeft: hp(1),
              borderRadius: 5,
            }}
            // placeholder="Search ..."
            placeholderTextColor="white"
          />
          <TouchableOpacity onPress={() => setInput('')}>
            <Image
              source={require('../assets/Icons/close.png')}
              style={{
                height: wp(4.5),
                width: wp(4.5),
                resizeMode: 'contain',
                tintColor: 'white',
                marginRight: 6,
              }}
            />
          </TouchableOpacity>
        </View>
        {Input.length === 0 && (
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
                  <View style={styles.infoContainer}>
                    <Image
                      source={require('../assets/Images/bg.jpeg')}
                      style={styles.image}
                    />
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
        )}
        {Input === 'Playlists' && (
          <View style={{marginTop: hp(4), paddingHorizontal: hp(1.6)}}>
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: '700',
                color: 'white',
                marginBottom: 8,
              }}>
              Playlists
            </Text>

            <FlatList
              data={Playlist}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.contentContainer}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.itemContainer}
                  key={item.id}
                  onPress={() => navigation.navigate('Watch', {item: item})}>
                  <Image
                    source={{uri: API_IMG + item?.poster_name}}
                    style={[styles.image1, {marginRight: hp(1)}]}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        {Input === 'Watch Later' && (
          <View style={{marginTop: hp(4), paddingHorizontal: hp(1.6)}}>
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: '700',
                color: 'white',
                marginBottom: 8,
              }}>
              Watch Later
            </Text>

            <FlatList
              data={watchLater}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.contentContainer}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.itemContainer}
                  key={item.id}
                  onPress={() => navigation.navigate('Watch', {item: item})}>
                  <Image
                    source={{uri: API_IMG + item?.poster_name}}
                    style={[styles.image1, {marginRight: hp(1)}]}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        {search.length > 0 && (
          <View style={{marginTop: hp(4), paddingHorizontal: hp(1.6)}}>
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: '700',
                color: 'white',
                marginBottom: 8,
              }}>
              Showing Result : {Input}
            </Text>

            <FlatList
              data={search}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.contentContainer}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.itemContainer}
                  key={item.id}
                  onPress={() => navigation.navigate('Watch', {item: item})}>
                  <Image
                    source={{uri: API_IMG + item?.poster_name}}
                    style={[styles.image1, {marginRight: hp(1)}]}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        )}
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
    paddingHorizontal: hp(1.2),
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
    height: wp(23),
    width: wp(35),
    resizeMode: 'cover',
    borderRadius: hp(1),
    marginBottom: wp(3),
  },
  image1: {
    height: wp(21),
    width: wp(28),
    resizeMode: 'cover',
    borderRadius: hp(0.8),
    marginBottom: wp(3),
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  titleText: {
    color: '#fff', // Change to your desired text color
    fontSize: hp(1.8),
    fontWeight: 'bold',
  },
});
