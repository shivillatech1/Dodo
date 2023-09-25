import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const CustomDropdown = ({setShowDropdown, showDropdown, options}) => {
  const [selectedOption, setSelectedOption] = useState(options);

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  // console.log(options);

  return (
    <View>
      <TouchableOpacity>
        <View style={styles.dropdownButton}>
          <Text
            style={{
              fontSize: heightPercentageToDP(1.6),
              fontWeight: '800',
              color: 'white',
            }}>
            {selectedOption}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={showDropdown}
        animationType="slide"
        onRequestClose={() => setShowDropdown(false)}>
        <View style={styles.modalContainer}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              onPress={() => handleOptionSelect(option)}>
              <View style={styles.dropdownItem}>
                <Text
                  style={{
                    fontSize: heightPercentageToDP(1.6),
                    fontWeight: '600',
                    color: 'white',
                  }}>
                  {option}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = {
  dropdownButton: {
    padding: 10,

    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownItem: {
    padding: 10,

    width: widthPercentageToDP(20),
  },
};

export default CustomDropdown;
