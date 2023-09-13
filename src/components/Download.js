import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob';
import {API_IMG} from '../utils/BaseImg';

export const requestStoragePermission = async (
  video_name,
  {setLoading, loading},
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Downloader App Storage Permission',
        message:
          'Downloader App needs access to your storage ' +
          'so you can download files',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      downloadFile(video_name, {setLoading, loading});
    } else {
      console.log('storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const downloadFile = (video_name, {setLoading, loading}) => {
  const {config, fs} = RNFetchBlob;
  const date = new Date();
  const rootDir = fs.dirs.DownloadDir;
  const mediaCliniqueDir = 'Media Clinique';

  const fileDir = `${rootDir}/${mediaCliniqueDir}`;

  fs.exists(fileDir)
    .then(exists => {
      if (!exists) {
        return fs.mkdir(fileDir);
      }
      return Promise.resolve(fileDir);
    })
    .then(() => {
      setLoading(true)
      config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path:
            fileDir +
            '/download_' +
            Math.floor(date.getDate() + date.getSeconds() / 2) +
            '.mp4',
          description: 'file download',
        },
      })
        .fetch('GET', API_IMG + `${video_name}`, {})

        .then(res => {
         
          console.log('The file saved to ', res.path());
          alert('File downloaded successfully');
          setLoading(false);
        })
        .catch(error => {
          console.error('Error downloading file:', error);
          alert('File download failed');
        });
    })
    .catch(error => {
      console.error('Error creating directory:', error);
      alert('Directory creation failed');
    });
};
