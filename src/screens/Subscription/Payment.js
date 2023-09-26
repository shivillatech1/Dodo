import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useMemo, useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RadioGroup} from 'react-native-radio-buttons-group';

const Payment = ({route, navigation}) => {
  const {price} = route.params;
  // console.log(price);
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Gateway CCavance',
        value: 'option1',
        borderColor: '#fff',
        color: '#d4af37',
        borderSize: 2,
        labelStyle: {
          borderWidth: 1,
          borderColor: '#fff',
          padding: 5,
          width: widthPercentageToDP(45),
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          fontSize: heightPercentageToDP(1.8),
          fontWeight: '900',
        },
      },
      //   {
      //     id: '2',
      //     label: 'Option 2',
      //     value: 'option2',
      //     borderColor: '#fff',
      //     color: '#d4af37',
      //     borderSize: 2,
      //     labelStyle: {
      //       borderWidth: 1,
      //       borderColor: '#fff',
      //       padding: 5,
      //       width: widthPercentageToDP(45),
      //       alignSelf: 'center',
      //       alignItems: 'center',
      //       justifyContent: 'center',
      //       textAlign: 'center',
      //       color: '#fff',
      //       fontSize: heightPercentageToDP(2),
      //       fontWeight: '900',
      //     },
      //   },
    ],
    [],
  );
  const [selectedId, setSelectedId] = useState();
  //   console.log(selectedId);
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          top: heightPercentageToDP(30),
          left: heightPercentageToDP(12.5),
        }}>
        <Text style={styles.text}>Choose Payment Methods</Text>
      </View>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
      />
      <View style={styles.confirm}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => navigation.goBack()}>
          <Text style={styles.text1}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn1, {backgroundColor: '#d4af37', borderWidth: 0}]}>
          <Text style={styles.text1}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: heightPercentageToDP(2.2),
    color: '#fff',
    fontWeight: '600',
  },
  Pbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: heightPercentageToDP(1.2),
    marginBottom: 8,
  },
  btn: {
    padding: 8,
    width: widthPercentageToDP(50),
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: heightPercentageToDP(2),
    color: '#fff',
    fontWeight: '900',
  },
  confirm: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: heightPercentageToDP(1.2),
    marginBottom: 8,
    top: heightPercentageToDP(12),
  },
  btn1: {
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 4,
    width: widthPercentageToDP(25),
  },
});
