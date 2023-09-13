import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';

function MyDropdown() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionSelect = option => {
    setSelectedValue(option);
    toggleModal();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Text>{selectedValue || 'Select an option'}</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true}>
        <View>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(option)}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={toggleModal}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default MyDropdown;
