import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const image = {uri: 'https://blogmaladeviagem.com.br/wp-content/uploads/2018/12/portugal-roteiro-completo.jpg'}

  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image} blurRadius={6}>
        <Text style={styles.logo}>Your Logo</Text>

          <View style={styles.sectionStyle}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
            }}
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Name Here"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.sectionStyle}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',
            }}
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Mobile No Here"
            underlineColorAndroid="transparent"
          />
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

 sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
 
});
