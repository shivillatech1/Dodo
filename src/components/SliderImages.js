import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const SliderImages = () => {
  const [images] = useState([
    'data:image/jpeg;base64,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',

    'https://source.unsplash.com/1024x768/?man',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ]);
  return (
    <View style={{marginTop: hp(8)}}>
      <SliderBox
        images={images}
        circleLoop={true}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        sliderBoxHeight={hp(30)}
        dotColor="transparent"
        inactiveDotColor="transparent"
        paginationBoxVerticalPadding={hp(1)}
        resizeMode={'cover'}
        ImageComponentStyle={{
          width: wp(95),
          height: hp(28),

          borderRadius: hp(2),
        }}
      />
    </View>
  );
};

export default SliderImages;
