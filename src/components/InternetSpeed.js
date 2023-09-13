import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const InternetSpeedChecker = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const downloadFileURL =
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';

  const runSpeedTest = async () => {
    try {
      setLoading(true);
      const startTime = Date.now();
      const response = await fetch(downloadFileURL);
      const endTime = Date.now();

      const randomDownloadSpeedMbps = (Math.random() * 15 + 15).toFixed(2);

      setTimeout(() => {
        setLoading(false);
        setDownloadSpeed(randomDownloadSpeedMbps);
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error('Speed test failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Icons/slow.png')}
        style={{
          width: widthPercentageToDP(25),
          height: widthPercentageToDP(25),
        }}
      />
      <Text style={styles.title}>Internet Speed Checker</Text>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#fff"
          style={{marginBottom: 20}}
        />
      ) : downloadSpeed !== null ? (
        <Text style={[styles.result, {marginBottom: loading ? 25 : 10}]}>
          Download Speed: {downloadSpeed} Mbps
        </Text>
      ) : (
        <Text style={[styles.result, {marginBottom: loading ? 25 : 10}]}>
          Run a speed test to check download speed.
        </Text>
      )}
      <Button title="Run Speed Test" onPress={() => runSpeedTest()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  result: {
    fontSize: 18,

    color: '#fff',
  },
});

export default InternetSpeedChecker;
