import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Button = ({title, imageSource, onPress, clear}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress()}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={imageSource} style={styles.buttonImage} />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
      <Text style={{fontSize: hp(1.8), fontWeight: '700', color: 'blue'}}>
        {clear}
      </Text>
      <Image
        source={require('../assets/Icons/chevron.png')}
        style={styles.buttonImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
    backgroundColor: '#161616',
    padding: hp(2),
    justifyContent: 'space-between',
  },
  buttonImage: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
    marginRight: hp(2),
    tintColor: 'white',
  },
  buttonText: {
    color: '#fff',
    fontSize: hp(2),
    fontWeight: '700',
    marginLeft: hp(2.5),
  },
});

export default Button;
