import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, useColorScheme, ToastAndroid } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = ({ navigation }) => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const showToastWithGravityAndOffset = () => {

    navigation.navigate('Login')

    ToastAndroid.showWithGravityAndOffset(
      "A wild toast appeared! emoji 😀🎉",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ marginTop: 20, marginBottom: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[{ color: 'black', fontSize: 20 }]}>Welcome to React Native</Text>
        <TouchableOpacity
          onPress={() => showToastWithGravityAndOffset()}
          style={styles.roundButton}>
          <Text style={[{ color: 'white', fontSize: 18 }]}>Click Me 😋</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  roundButton: {
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#37B24D',
  },
});


export default Home;