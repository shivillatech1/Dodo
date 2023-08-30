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

const WatchVideo = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item);
  const categories = [
    {id: '1', title: 'Episodes'},
    {id: '2', title: 'Trailers'},
    {id: '3', title: 'More Like This'},
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCategoryPress = index => {
    setActiveIndex(index);
  };
  return (
    <>
      <View style={styles.container}>
        <Image
          source={item.image}
          style={[styles.moviePoster, {opacity: 0.7}]}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.8)']}
          style={[styles.gradient, {opacity: 0.9}]}>
          <View style={styles.movieInfoContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Video', {item: item})}
                style={[styles.button, {backgroundColor: '#4845f6'}]}>
                <Image
                  source={require('../../assets/Icons/play.png')}
                  style={{width: wp(5), height: wp(5), tintColor: '#fff'}}
                />
                <Text style={styles.buttonText}>Start Watching Now !</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: hp(1.3),
                position: 'absolute',
                top: hp(3.2),
                gap: hp(4.6),
              }}>
              <Text style={styles.buttonText}>
                {item.title.length > 10
                  ? item.title.slice(0, 10) + '...'
                  : item.title}
              </Text>
              <TouchableOpacity
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 5,

                  width: wp(50),

                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/Icons/add.png')}
                  style={{width: wp(5), height: wp(5), tintColor: '#fff'}}
                />
                <Text style={styles.buttonText}> Watch Later</Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontSize: hp(1.6),
                  fontWeight: 'bold',
                }}>
                {item.rating}
              </Text>
            </View>
            <Text
              numberOfLines={2}
              style={{
                width: wp(90),
                color: '#fff',
                fontSize: hp(1.6),
                fontWeight: '300',
                marginLeft: hp(1),
                position: 'absolute',
                top: hp(9),
              }}>
              {item.description}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                top: hp(16),
                left: hp(1),
                position: 'absolute',
              }}>
              <Text
                style={{
                  width: wp(90),
                  color: '#fff',
                  fontSize: hp(1.6),
                  fontWeight: '300',
                }}>
                {item.genres.join(', ')}
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: hp(2),
            marginTop: hp(3.6),
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              gap: hp(1),
            }}>
            <Image
              source={require('../../assets/Icons/heart.png')}
              style={{width: wp(5), height: wp(5), tintColor: 'white'}}
            />
            <Text
              style={{fontSize: hp(1.4), fontWeight: '300', color: 'white'}}>
              Favorite
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              gap: hp(1),
              marginLeft: hp(2),
            }}>
            <Image
              source={require('../../assets/Icons/share.png')}
              style={{width: wp(5), height: wp(5), tintColor: 'white'}}
            />
            <Text
              style={{fontSize: hp(1.4), fontWeight: '300', color: 'white'}}>
              Share
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              gap: hp(1),
              marginLeft: hp(2),
            }}>
            <Image
              source={require('../../assets/Icons/question.png')}
              style={{width: wp(5), height: wp(5), tintColor: 'white'}}
            />
            <Text
              style={{fontSize: hp(1.4), fontWeight: '300', color: 'white'}}>
              Report
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              gap: hp(1),
              marginLeft: hp(2),
            }}>
            <Image
              source={require('../../assets/Icons/download.png')}
              style={{width: wp(5), height: wp(5), tintColor: 'white'}}
            />
            <Text
              style={{fontSize: hp(1.4), fontWeight: '300', color: 'white'}}>
              Download
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: hp(2.5),
            marginLeft: hp(1.5),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleCategoryPress(index)}
              style={[
                styles.categoryButton,
                index === activeIndex && styles.activeCategoryButton,
              ]}>
              <Text style={styles.categoryText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: hp(2),
            paddingHorizontal: hp(1.5),
          }}>
          {activeIndex === 0 && (
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={item.image}
                style={{width: wp(30), height: wp(20), resizeMode: 'cover'}}
              />
              <Image
                source={require('../../assets/Icons/play.png')}
                style={{
                  width: wp(8),
                  height: wp(8),
                  resizeMode: 'cover',
                  position: 'absolute',
                  tintColor: 'white',
                  left: hp(4.8),
                }}
              />

              <View style={{marginLeft: 5}}>
                <Text style={styles.categoryText}>{item.title}</Text>
                <Text
                  numberOfLines={2}
                  style={{
                    color: '#fff',
                    fontSize: hp(1.5),
                    fontWeight: '300',
                    width: wp(60),
                  }}>
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
      <View style={{position: 'absolute', top: hp(2), left: hp(3), flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
            gap: 8,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: 'row',

              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/Icons/back.png')}
              style={{
                height: wp(5),
                width: wp(5),
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>
          <Text style={[styles.text, {color: '#14578b'}]}>
            DODO<Text style={[styles.text, {color: '#fff'}]}>FLIX</Text>
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Subscription')}>
            <Image
              source={require('../../assets/Icons/crown.png')}
              style={{height: wp(6.5), width: wp(6.5), resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

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
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  activeCategoryButton: {
    borderColor: '#3498db',
    borderBottomWidth: 1.5,
  },
  categoryText: {
    color: '#fff',
    fontSize: hp(1.8),
  },
});

export default WatchVideo;
