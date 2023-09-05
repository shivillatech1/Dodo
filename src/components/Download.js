import {PermissionsAndroid, Platform} from 'react-native';
import RNFS from 'react-native-fs';

const downloadVideo = async videourl => {
  try {
    // Define the video URL and destination path
    const videoUrl =
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    const destinationPath = `${RNFS.ExternalDirectoryPath}/downloaded_video.mp4`;

    // Request permission to write to external storage on Android
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to storage to download the video.',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.error('Permission denied');
        return;
      }
    }

    // Download the video using the fetch API
    const response = await fetch(videoUrl);
    const videoBuffer = await response.arrayBuffer();
    const videoBase64 = Buffer.from(videoBuffer).toString('base64');
    console.log(videoBase64);
    // Ensure the directory exists
    await RNFS.mkdir(RNFS.ExternalDirectoryPath);

    // Write the video to the destination path
    await RNFS.writeFile(destinationPath, videoBase64, 'base64');

    console.log('Video downloaded successfully at:', destinationPath);
  } catch (error) {
    console.error('Error downloading video:', error);
  }
};

export default downloadVideo;
