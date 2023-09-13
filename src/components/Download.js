import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import {API_IMG} from '../utils/BaseImg';

const REMOTE_IMAGE_PATH =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
export const requestStoragePermission = async video_name => {
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
      downloadFile(video_name);
    } else {
      console.log('storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const downloadFile = video_name => {
  const {config, fs} = RNFetchBlob;
  const date = new Date();
  const fileDir = fs.dirs.DownloadDir;
  config({
    // add this option that makes response data to be stored as a file,
    // this is much more performant.
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
      alert('file downloaded successfully ');
    });
};
