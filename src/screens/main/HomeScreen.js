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
import AllVdieos from '../../components/AllVdieos';
import Topics from '../../components/Topics';
const HomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Demo',
      headerStyle: {
        backgroundColor: '#2a3239',
        height: hp(10.3),
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

  const categories = [
    {id: '1', title: 'Continue Watching', all: 'See All'},
    {id: '2', title: 'Latest on Demo', all: 'See All'},
    {id: '3', title: 'Video List', all: 'See All'},
    {id: '4', title: 'Watch Later', all: 'See All'},
    {id: '5', title: 'Playlist', all: 'See All'},
  ];
  const [activeIndex, setActiveIndex] = useState(0); // Set initial active index

  const texts = ['Home', 'All Videos', 'Topics'];

  return (
    <>
      {activeIndex === 0 && (
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={{paddingHorizontal: wp(4)}}
            horizontal
            style={{
              flexDirection: 'row',
              marginTop: hp(8),
              marginBottom: hp(2),
            }}>
            <Image
              source={require('../../assets/Images/bg.jpeg')}
              style={{
                height: wp(50),
                width: wp(70),
                resizeMode: 'cover',
                borderRadius: hp(2),
              }}
            />
            <Image
              source={require('../../assets/Images/bg.jpeg')}
              style={{
                height: wp(50),
                width: wp(70),
                resizeMode: 'cover',
                borderRadius: hp(2),
              }}
            />
            <Image
              source={require('../../assets/Images/bg.jpeg')}
              style={{
                height: wp(50),
                width: wp(70),
                resizeMode: 'cover',
                borderRadius: hp(2),
              }}
            />
          </ScrollView>

          <ScrollView
            contentContainerStyle={{
              paddingBottom: hp(10),
              paddingHorizontal: hp(1.3),
              paddingVertical: hp(2),
            }}
            showsVerticalScrollIndicator={false}>
            {categories.map(category => (
              <View key={category.id}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.categoryLabel}>{category.title}</Text>
                  <Text style={styles.categoryLabel1}>{category.all}</Text>
                </View>
                {category.title === 'Continue Watching' ? (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {dummyData1.map(item => (
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
                          source={require('../../assets/Images/bg.jpeg')}
                          style={{
                            height: hp(12.5),
                            width: wp(36),
                            resizeMode: 'cover',
                            borderRadius: hp(2),
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
                {category.title === 'Latest on Demo' ? (
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
                ) : null}
              </View>
            ))}
          </ScrollView>
        </View>
      )}
      {activeIndex === 1 && <AllVdieos />}
      {activeIndex === 2 && <Topics />}

      <View style={styles.container1}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp(5),
            paddingVertical: wp(0.6),
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
                  }}>
                  <Text
                    key={index}
                    style={[
                      {
                        fontSize: hp(1.8),
                        marginBottom: index === activeIndex ? wp(1) : 0,
                      },
                    ]}>
                    {item}
                  </Text>
                  <View
                    style={[
                      {borderBottomColor: index === activeIndex ? 'white' : ''},
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

  movieInfoContainer: {
    position: 'absolute',
    top: hp(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  categoryLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#803109',
    marginVertical: 10,
  },
  categoryLabel1: {
    fontSize: 16,
    fontWeight: '800',
    color: '#803109',
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
    backgroundColor: '#2a3239',
    top: 0,
    width: wp(100),
  },
});

export default HomeScreen;
