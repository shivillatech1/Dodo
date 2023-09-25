import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import {LogBox} from 'react-native';
import {DownloadedVideosProvider} from './src/Hooks/Download';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <DownloadedVideosProvider>
      <Navigation />
    </DownloadedVideosProvider>
  );
};

export default App;
