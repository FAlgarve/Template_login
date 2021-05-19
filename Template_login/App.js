import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Image, TouchableOpacity, CheckBox } from 'react-native';
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
      <View style={{flex:1}}>
        <Text style={styles.logo}>Your Logo</Text>

          <View style={styles.sectionStyle}>
          <Image
            source={{
              uri:
                'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
            }}
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="Username"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.sectionStyle}>
          <Image
            source={{
              uri:
                'https://cdn.icon-icons.com/icons2/2440/PNG/512/lock_icon_148524.png',
            }}
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="Password"
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity style={styles.singinbtn}>
        <Text style={styles.singintext}>Sing in</Text>
      </TouchableOpacity>
      <View style={styles.forgotpassword}>
        <Text>Forgot Password</Text>
        <Text><CheckBox
          style={styles.checkbox}
        />Remember Me</Text>
      </View>
            <Text style={styles.singinwith}>or sing in with</Text>
            <TouchableOpacity style={styles.facebook}>
            <Text style={styles.singintext}>Facebook</Text>
            </TouchableOpacity>
      </View>
      <Text style={styles.createone}>dont have an account yet <Text style={styles.createoneaccount}>Creat one</Text></Text>
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
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 160,
    marginTop: 60,
  },
  
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  forgotpassword:{
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  createone:{
    justifyContent: 'center',
    alignSelf:'center',
    fontSize: 16,
    color: 'white',
    marginBottom: 22,
  },

  createoneaccount:{
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  singinwith:{
    justifyContent: 'center',
    alignSelf:'center',
    fontSize: 24,
    marginTop: 60,
  },

  checkbox: {
    alignSelf: "center",
    backgroundColor: 'transparent',
  },

  singintext:{
    color: 'white',
    fontSize: 26,
  },

  facebook:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    height: 60,
    borderRadius: 5,
    margin: 10,
    color: 'white'
  },

  singinbtn:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 60,
    borderRadius: 5,
    margin: 10,
    color: 'white'
  },

 sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
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