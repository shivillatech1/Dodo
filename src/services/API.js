import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default class Api {
  static baseUrl = 'https://shivila.online/videoapp/public/';
}
export const onGetAllvideos = async () => {
  //   const id = await AsyncStorage.getItem('token');
  const url = Api.baseUrl + `api/videos`;

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
export const onGetcategoriesList = async () => {
  //   const id = await AsyncStorage.getItem('token');
  const url = Api.baseUrl + `api/categorieslist`;

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
export const onGetTopicsList = async () => {
  //   const id = await AsyncStorage.getItem('token');
  const url = Api.baseUrl + `api/topics`;

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const WatchListSave = async responseData => {
  const url = Api.baseUrl + `api/watchLaterSave`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, responseData, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const onGetWatchList = async () => {
  //   const id = await AsyncStorage.getItem('token');
  const url = Api.baseUrl + `api/watchLaters/${1}`;

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const PlayListSave = async responseData => {
  const url = Api.baseUrl + `api/playlistSave`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, responseData, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const onGetplaylist = async () => {
  //   const id = await AsyncStorage.getItem('token');
  const url = Api.baseUrl + `api/playlists/${1}`;

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const OnGetBanner = async () => {
  //   const id = await AsyncStorage.getItem('token');
  const url = Api.baseUrl + `api/banner`;

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
