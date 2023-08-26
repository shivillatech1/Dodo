import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import {LogBox} from 'react-native';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return <Navigation />;
};

export default App;
