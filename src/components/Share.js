import {Share} from 'react-native';

export const shareContent = async message => {
  try {
    const result = await Share.share({
      message: 'Media Clinique | Watch The Movie ' + message,
      title: 'Media Clinique',
      url: 'https://www.mediaclinique.com',
    });
  } catch (error) {
    console.error('Error sharing:', error.message);
  }
};
