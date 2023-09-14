import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useLayoutEffect} from 'react';
import AllVdieos from '../../components/AllVdieos';
import Topics from '../../components/Topics';
import SliderImages from '../../components/SliderImages';
import {
  OnGetBanner,
  OnGetContinueWatching,
  onGetAllvideos,
  onGetTopicsList,
  onGetWatchList,
  onGetcategoriesList,
  onGetplaylist,
} from '../../services/API';
import {API_IMG} from '../../utils/BaseImg';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const [Allvideos, setAllVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [topics, setTopics] = useState([]);
  const [topicsImg, settopicsImg] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [Playlist, setPlayLists] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Continue, setContinue] = useState([]);

  useFocusEffect(
    useCallback(() => {
      GetAllVideos();
      GetAllCategoriesName();
      GetAllTopicsName();
      GetAllWatchLater();
      GetAllPlaylists();
      OnGetContinue();
    }, []),
  );
  const GetAllVideos = async () => {
    try {
      setLoading(true);
      const response = await onGetAllvideos();
      // console.log(response.data.Video);
      setAllVideos(response.data.Video);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const GetAllCategoriesName = async () => {
    try {
      setLoading(true);
      const response = await onGetcategoriesList();
      // console.log(response.data.category);
      setCategories(response.data.category);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const GetAllTopicsName = async () => {
    try {
      setLoading(true);
      const response = await onGetTopicsList();

      settopicsImg(response.data.poster_images);
      setTopics(response.data.Topics);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

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
  const OnGetContinue = async () => {
    try {
      const response = await OnGetContinueWatching();
      const data = response.data.todos;
      const reversedData = data.reverse().slice(0, 10);
      setContinue(reversedData);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#000',
        height: hp(2.6),
      },
    });
  }, [navigation]);

  const categories1 = [
    {id: '4', title: 'Watchlist', all: 'See All'},
    {id: '5', title: 'Playlist', all: 'See All'},
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const texts = ['Home', 'All Videos', 'Topics'];
  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image
        source={require('../../assets/Images/bg.jpeg')}
        style={styles.slideImage}
      />
    </View>
  );

  return (
    <>
      {activeIndex === 0 && (
        <View style={styles.container}>
          <SliderImages />
          {Loading ? (
            <ActivityIndicator
              size={30}
              color={'white'}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp(6),
              }}
            />
          ) : (
            <>
              <ScrollView
                style={{marginTop: hp(2)}}
                contentContainerStyle={{
                  paddingBottom: hp(10),
                  paddingHorizontal: hp(1.3),
                  paddingVertical: hp(1),
                }}
                showsVerticalScrollIndicator={false}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: hp(0.3),
                    }}>
                    <Text style={styles.categoryLabel}>Continue Watching</Text>
                    <Text style={styles.categoryLabel1}>See All </Text>
                  </View>

                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {Continue.map(item => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Watch', {item: item})
                        }
                        style={{
                          marginRight: 10,
                          position: 'relative',
                        }}
                        key={item.id}>
                        <Image
                          source={{uri: API_IMG + item?.poster_name}}
                          style={{
                            height: hp(12.5),
                            width: wp(40),
                            resizeMode: 'cover',
                            borderRadius: hp(1),
                          }}
                        />
                        <View
                          style={{
                            position: 'absolute',
                            right: hp(1),
                            bottom: hp(1.5),
                          }}>
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
                </View>
                {categories &&
                  Object.keys(categories).map(categoryName => (
                    <View key={categoryName}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingHorizontal: hp(0.3),
                        }}>
                        <Text style={styles.categoryLabel}>{categoryName}</Text>
                        <TouchableOpacity onPress={() => {}}>
                          <Text style={{color: '#fff'}}>See All</Text>
                        </TouchableOpacity>
                      </View>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        {categories[categoryName].map(item => (
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('Watch', {item: item})
                            }
                            style={{
                              marginRight: 10,
                              position: 'relative',
                            }}
                            key={item.id}>
                            <Image
                              source={{uri: API_IMG + item?.poster_name}}
                              style={{
                                height: hp(15),
                                width: wp(30),
                                resizeMode: 'cover',
                                borderRadius: hp(1),
                              }}
                            />
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  ))}
                {categories1.map(category => (
                  <View key={category.id}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: hp(0.3),
                      }}>
                      <Text style={styles.categoryLabel}>
                        {category?.title}
                      </Text>
                      <Text style={styles.categoryLabel1}>{category.all}</Text>
                    </View>
                    {category?.title === 'Watchlist' ? (
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        {watchLater.map(item => (
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('Watch', {item: item})
                            }
                            style={{
                              marginRight: 10,
                              position: 'relative',
                            }}
                            key={item.id}>
                            <Image
                              source={{uri: API_IMG + item?.poster_name}}
                              style={{
                                height: hp(11.5),
                                width: wp(32),
                                resizeMode: 'cover',
                                borderRadius: hp(1),
                              }}
                            />
                            <View
                              style={{
                                position: 'absolute',
                                right: hp(1),
                                bottom: hp(1.5),
                              }}>
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
                    {category?.title === 'Playlist' ? (
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        {Playlist.map(item => (
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('Watch', {item: item})
                            }
                            style={{
                              marginRight: 10,
                              position: 'relative',
                            }}
                            key={item.id}>
                            <Image
                              source={{uri: API_IMG + item?.poster_name}}
                              style={{
                                height: hp(11.5),
                                width: wp(32),
                                resizeMode: 'cover',
                                borderRadius: hp(1),
                              }}
                            />
                            <View
                              style={{
                                position: 'absolute',
                                right: hp(1),
                                bottom: hp(1.5),
                              }}>
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
                  </View>
                ))}
              </ScrollView>
            </>
          )}
        </View>
      )}
      {activeIndex === 1 && (
        <AllVdieos
          Allvideos={Allvideos}
          setLoading={setLoading}
          loading={Loading}
        />
      )}
      {activeIndex === 2 && (
        <Topics topics={topics} topicsImg={topicsImg} navigation={navigation} />
      )}

      <View style={styles.container1}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: wp(5),
            paddingVertical: wp(0.6),
            gap: wp(5),
          }}>
          {texts.map((item, index) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => setActiveIndex(index)}
                  activeOpacity={1}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 2,
                    marginTop: hp(1),
                  }}>
                  <Text
                    key={index}
                    style={[
                      {
                        fontSize: hp(1.8),
                        color: 'white',
                      },
                    ]}>
                    {item}
                  </Text>
                  <View
                    style={[
                      {
                        marginTop: wp(1),
                        borderBottomColor:
                          index === activeIndex ? '#D4AF37' : '',
                      },
                      {borderWidth: index === activeIndex ? 1.5 : 0},
                      {width: index === activeIndex ? wp(12) : 0},
                    ]}
                  />
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          zIndex: 44,
          left: wp(1.2),
          alignItems: 'center',
          top: wp(2),
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
    height: hp(55),
    resizeMode: 'cover',
  },

  movieInfoContainer: {
    position: 'absolute',
    top: hp(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  categoryLabel: {
    fontSize: hp(2.1),
    fontWeight: '700',
    color: '#fff',
    marginVertical: 10,
    backgroundColor: '#f57f01',
    padding: 2,
    paddingHorizontal: 15,
  },
  categoryLabel1: {
    fontSize: hp(1.6),
    fontWeight: '500',
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

  container1: {
    position: 'absolute',
    height: hp(5),
    zIndex: 4,
    backgroundColor: '#000',
    top: 0,
    width: wp(100),
  },
  slide: {
    width: Dimensions.get('window').width - 40,
    height: hp(33),
    marginRight: wp(4),
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default HomeScreen;

{
  /**      {category.title === 'Top Watches' ? (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {dummyData1.map(item => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Watch', {item: item})
                        }
                        style={{
                          marginRight: hp(1.5),
                          position: 'relative',
                        }}
                        key={item.id}>
                        <Image
                          source={require('../../assets/Images/bg.jpeg')}
                          style={{
                            height: hp(15),
                            width: wp(30),
                            resizeMode: 'cover',
                            borderRadius: hp(1),
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                ) : null}
                {category.title === 'Video List' ? (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {dummyData1.map(item => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Watch', {item: item})
                        }
                        style={{
                          marginRight: hp(1.5),
                          position: 'relative',
                        }}
                        key={item.id}>
                        <Image
                          source={require('../../assets/Images/bg.jpeg')}
                          style={{
                            height: hp(15),
                            width: wp(30),
                            resizeMode: 'cover',
                            borderRadius: hp(1),
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                ) : null}
                {category.title === 'Watch Later' ? (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {dummyData1.map(item => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Watch', {item: item})
                        }
                        style={{
                          marginRight: hp(1.5),
                          position: 'relative',
                        }}
                        key={item.id}>
                        <Image
                          source={require('../../assets/Images/bg.jpeg')}
                          style={{
                            height: hp(15),
                            width: wp(30),
                            resizeMode: 'cover',
                            borderRadius: hp(1),
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                ) : null}
                {category.title === 'Playlist' ? (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {dummyData1.map(item => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Watch', {item: item})
                        }
                        style={{
                          marginRight: hp(1.5),
                          position: 'relative',
                        }}
                        key={item.id}>
                        <Image
                          source={require('../../assets/Images/bg.jpeg')}
                          style={{
                            height: hp(15),
                            width: wp(30),
                            resizeMode: 'cover',
                            borderRadius: hp(1),
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                ) : null} */
}
