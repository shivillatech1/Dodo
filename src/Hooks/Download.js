// DownloadedVideosContext.js

import React, {createContext, useContext, useState, useEffect} from 'react';
import RNFetchBlob from 'rn-fetch-blob';

const DownloadedVideosContext = createContext();

export const useDownloadedVideos = () => {
  return useContext(DownloadedVideosContext);
};

export const DownloadedVideosProvider = ({children}) => {
  const [downloadedVideos, setDownloadedVideos] = useState([]);

  useEffect(() => {
    loadDownloadedVideos();
  }, []);

  const loadDownloadedVideos = () => {
    const downloadDir = RNFetchBlob.fs.dirs.DownloadDir;
    const mediaCliniqueDir = 'Media Clinique';

    RNFetchBlob.fs
      .ls(`${downloadDir}/${mediaCliniqueDir}`)
      .then(files => {
        const videoFiles = files.filter(file => file.endsWith('.mp4'));
        const videoFileURIs = videoFiles.map(
          file => `file://${downloadDir}/${mediaCliniqueDir}/${file}`,
        );

        setDownloadedVideos(videoFileURIs);
      })
      .catch(error => {
        console.error('Error reading directory:', error);
      });
  };

  return (
    <DownloadedVideosContext.Provider
      value={{downloadedVideos, loadDownloadedVideos}}>
      {children}
    </DownloadedVideosContext.Provider>
  );
};
