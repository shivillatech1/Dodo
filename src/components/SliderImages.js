import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {API_IMG} from '../utils/BaseImg';
import {OnGetBanner} from '../services/API';
const SliderImages = () => {
  const [Banner, setBanner] = useState([]);
  useEffect(() => {
    getBanner();
  }, []);

  const getBanner = async () => {
    try {
      const response = await OnGetBanner();
      // console.log(response.data.banner);
      setBanner(response.data.banner);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(Banner);
  return (
    <View style={{marginTop: hp(8)}}>
      <SliderBox
        images={Banner.map(item => API_IMG + item.image_name)}
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
        imageLoadingColor="#fff"
      />
    </View>
  );
};

export default SliderImages;
