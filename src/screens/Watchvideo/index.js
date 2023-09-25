import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useLayoutEffect} from 'react';
import {requestStoragePermission} from '../../components/Download';
import {API_IMG} from '../../utils/BaseImg';
import {
  PlayListSave,
  WatchListSave,
  AddContinueWatching,
  OnGetContinueWatching,
} from '../../services/API';

import {shareContent} from '../../components/Share';
import CustomDropdown from '../../components/DropDown';
import {useDownloadedVideos} from '../../Hooks/Download';

const WatchVideo = ({navigation, route}) => {
  const {item} = route.params;
  // console.log(item?.id);
  const {downloadedVideos} = useDownloadedVideos();
  const [watchlist, setWatchlist] = useState('');
  const [playList, setPlaylist] = useState('');
  const [Loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('Download');
  const SaveWatchLater = async itemid => {
    var raw = JSON.stringify({
      user_id: 1,
      video_id: itemid,
    });
    try {
      const response = await WatchListSave(raw);
      console.log(response.data);
      setWatchlist(response.data);
      ToastAndroid.showWithGravity(
        `${watchlist.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } catch (error) {
      console.log(error);
    }
  };

  const SavePlayList = async itemid => {
    var raw = JSON.stringify({
      user_id: 1,
      video_id: 1,
    });
    try {
      const response = await PlayListSave(raw);
      console.log(response.data);
      setPlaylist(response.data);
      ToastAndroid.showWithGravity(
        `${playList?.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } catch (error) {
      console.log(error);
    }
  };
  const AddWatching = async itemid => {
    var raw = JSON.stringify({
      video_id: itemid,
      user_id: 1,
    });
    try {
      const response = await AddContinueWatching(raw);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const options = [item?.season];

  const handlePress = () => {
    const isVideoDownloaded = downloadedVideos.some(downloadedVideo => {
      const parts = downloadedVideo.split('/');
      const filename = parts[parts.length - 1];
      let video = filename.split('_');
      let desiredFilename = video[0] + '.mp4';
      return desiredFilename.toLowerCase() === item?.video_name.toLowerCase();
    });

    if (isVideoDownloaded) {
      console.log('Downloeade');
      setDownloadStatus('Downloaded');
    } else {
      requestStoragePermission(item?.video_name, {
        loading: Loading,
        setLoading: setLoading,
      });
      setIsDownloaded(true);
      setDownloadStatus('Download');
    }
  };

  const CheckStatus = () => {
    const isVideoDownloaded = downloadedVideos.some(downloadedVideo => {
      const parts = downloadedVideo.split('/');
      const filename = parts[parts.length - 1];
      let video = filename.split('_');
      let desiredFilename = video[0] + '.mp4';
      return desiredFilename.toLowerCase() === item?.video_name.toLowerCase();
    });

    if (isVideoDownloaded) {
      console.log('Downloeade');
      setDownloadStatus('Downloaded');
    } else {
      setDownloadStatus('Download');
    }
  };
  useEffect(() => {
    CheckStatus();
  }, [item, downloadedVideos]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => console.log('Left Icon Pressed')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: wp(3),
            flexDirection: 'row',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Icons/menu.png')}
              style={{
                width: wp(8),
                height: wp(8),
                right: wp(3),
                tintColor: '#D4af37',
              }}
            />
          </View>
          {/**<TouchableOpacity
            onPress={() => navigation.navigate('Subscription')}
            style={{left: wp(1)}}>
            <Image
              style={{width: wp(5), height: wp(5), resizeMode: 'cover'}}
              source={require('../../assets/Icons/crown.png')}
            />
          </TouchableOpacity> */}
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
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: API_IMG + `${item?.poster_name}`,
          }}
          style={[styles.moviePoster]}
        />
        <View
          style={{
            flexDirection: 'Column',
            alignItems: 'center',

            marginTop: hp(1),
            marginBottom: hp(0.6),
          }}>
          <Text style={styles.text}>{item?.title}</Text>
          <Text style={styles.text1}>{item?.name}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: hp(1),
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Video', {item: item});
              AddWatching(item?.id);
            }}
            style={{
              width: wp(35),
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 5,
              padding: wp(2),
              backgroundColor: '#fe6a1f',
              borderRadius: wp(1.5),
            }}>
            <Image
              source={require('../../assets/Icons/play-button.png')}
              style={{width: wp(5), height: wp(5), resizeMode: 'contain'}}
            />
            <Text
              style={{fontSize: hp(1.8), fontWeight: '600', color: 'black'}}>
              Play
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePress}
            style={{
              width: wp(35),
              alignItems: 'center',
              flexDirection: 'row',
              gap: 5,
              justifyContent: 'center',
              padding: wp(2),
              backgroundColor: '#fff',
              borderRadius: wp(1.5),
            }}>
            {Loading ? (
              <>
                <ActivityIndicator size="small" color="#000" />
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  Downloading...
                </Text>
              </>
            ) : (
              <>
                <Image
                  source={
                    downloadStatus === 'Downloaded' || isDownloaded
                      ? {
                          uri: 'https://cdn-icons-png.flaticon.com/128/709/709510.png',
                        }
                      : require('../../assets/Icons/download.png')
                  }
                  style={{width: wp(5), height: wp(5), resizeMode: 'contain'}}
                />
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  {downloadStatus || isDownloaded ? 'Downloaded' : 'Download'}
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: hp(2),
            marginTop: hp(3.6),
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              gap: hp(1),
            }}
            onPress={() => SaveWatchLater(item?.id)}>
            <Image
              source={require('../../assets/Icons/add.png')}
              style={{width: wp(6.8), height: wp(6.8), tintColor: 'white'}}
            />
            <Text
              style={{fontSize: hp(1.8), fontWeight: '300', color: 'white'}}>
              Wishlist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              gap: hp(1),
              marginLeft: hp(3),
            }}
            onPress={() => SavePlayList()}>
            <Image
              source={require('../../assets/Icons/media-player.png')}
              style={{width: wp(6.5), height: wp(6.5), tintColor: 'white'}}
            />
            <Text
              style={{fontSize: hp(1.8), fontWeight: '300', color: 'white'}}>
              Playlist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              gap: hp(1),
              marginLeft: hp(3),
            }}
            onPress={() => shareContent(item?.title)}>
            <Image
              source={require('../../assets/Icons/share1.png')}
              style={{width: wp(6.8), height: wp(6.8), tintColor: 'white'}}
            />
            <Text
              style={{fontSize: hp(1.8), fontWeight: '300', color: 'white'}}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: hp(1.5),
            marginLeft: hp(1.5),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.text2} numberOfLines={3}>
            {item?.description}
          </Text>
        </View>
        <View
          style={{
            width: wp(85),
            marginLeft: wp(8),
            borderColor: 'white',
            borderBottomWidth: 1.5,
            marginTop: hp(1),
          }}
        />
        {item?.season ? (
          <>
            <View
              style={{
                marginLeft: hp(1.5),
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp(2),
                marginBottom: 8,
              }}>
              <TouchableOpacity
                style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}
                onPress={() => setShowDropdown(!showDropdown)}>
                <CustomDropdown
                  setShowDropdown={setShowDropdown}
                  showDropdown={showDropdown}
                  options={options}
                />
                <Image
                  source={require('../../assets/Icons/down-arrow.png')}
                  style={{width: wp(4), height: wp(4), tintColor: '#fe6a1f'}}
                />
              </TouchableOpacity>
              <View
                style={{
                  height: hp(2.6),
                  borderColor: 'white',
                  borderWidth: 0.8,
                  marginLeft: hp(1),
                }}
              />
              <Text
                style={{
                  fontSize: hp(1.6),
                  fontWeight: '900',
                  color: 'white',
                  marginLeft: wp(2),
                }}>
                Episode 3
              </Text>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: hp(2),
                paddingHorizontal: hp(1.5),
              }}>
              {dummyData1.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: wp(2.3),
                      gap: 8,
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        width: wp(30),
                        height: wp(20),
                        borderRadius: wp(1),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: hp(1.3),
                        fontWeight: '600',
                        width: wp(54),
                        color: 'white',
                      }}
                      numberOfLines={3}>
                      {item.description}
                    </Text>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/Icons/download.png')}
                        style={{
                          width: wp(6.8),
                          height: wp(6.8),
                          borderRadius: wp(1),
                          tintColor: '#fff',
                          marginRight: wp(2),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </>
        ) : null}
      </View>
    </>
  );
};
const dummyData1 = [
  {
    id: 1,
    title: 'Movie Funtush',
    image: require('../../assets/Images/bg.jpeg'),
    description:
      'A hilarious comedy that will keep you laughing,A hilarious comedy that will keep you laughingA hilarious comedy that will keep you laughing,A hilarious comedy that will keep you laughing,A hilarious comedy that will keep you laughing,A hilarious comedy that will keep you laughing,A hilarious comedy that will keep you laughing,A hilarious comedy that will keep you laughing,A hilarious comedy that will keep you laughing,A hilarious comedy that will keep you laughing.',
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
    height: hp(25),
    resizeMode: 'cover',
    marginTop: hp(3),
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
    top: hp(9),
  },

  buttonContainer: {
    flexDirection: 'row',
    left: hp(11),
  },
  button: {
    backgroundColor: '#e50914',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginRight: hp(8),
    left: hp(1.2),
    width: wp(52),
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: wp(1.5),
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
    color: 'white',
  },
  text1: {
    fontSize: hp(1.4),
    fontWeight: '600',
    color: 'white',
  },
  text2: {
    fontSize: hp(1.4),
    fontWeight: '400',
    width: wp(93),
    color: 'white',
    lineHeight: hp(2.2),
    marginBottom: 8,
    marginLeft: wp(1.5),
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

export default WatchVideo;
