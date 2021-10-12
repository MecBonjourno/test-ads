import React from 'react';
import { Text, StyleSheet, View, useColorScheme, Image, Pressable, Alert } from 'react-native';
// import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!
import AdBanner from '../components/AdBanner';
import logo from '../../assets/LogoWhite.png';
import blur from '../../assets/download.jpeg';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { LinearGradient } from 'expo-linear-gradient';

export default function More() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_500Medium_Italic,
  });
  function easterEgg() {
    Alert.alert('Digitally Signed By мєc bσиjσυяиσ', 'Thanks for downloading this app');
  }

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Pressable onPress={() => easterEgg()}>
          <LinearGradient colors={['#10700c', '#0a5a0e']} style={{ flex: 1 }}>
            <View style={styles.subView}>
              <Image style={styles.logo} source={logo} />
              <Text style={styles.Title}>
                O Sueca App é desenvolvido pela equipe da Simple Life ® em parceira com a QueRy ®,
                sob o domínio da Za Co ©.
              </Text>
              <Text style={styles.Know}>Conheça outros Apps desenvolvidos pela Simple Life ®:</Text>
              <View style={styles.Icons}>
                <View style={styles.Icon}>
                  <Image style={styles.ImageIcon} source={blur} />
                  <Text style={styles.AppName}>Contador de Truco</Text>
                </View>
                <View style={styles.Icon}>
                  <Image style={styles.ImageIcon} source={blur} />

                  <Text style={styles.AppName}>Contador de Truco</Text>
                </View>
                <View style={styles.Icon}>
                  <Image style={styles.ImageIcon} source={blur} />

                  <Text style={styles.AppName}>Contador de Truco</Text>
                </View>
              </View>
            </View>
            <View style={styles.BannerFooter}>
              <AdBanner />
            </View>
          </LinearGradient>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    marginHorizontal: '2,5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    marginVertical: '10%',
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
    fontSize: 38,
    color: '#fff',
  },
  AppName: {
    marginTop: '4%',
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    color: '#fff',
  },
  ImageIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  Know: {
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
    fontSize: 28,
    color: '#fff',
    marginBottom: '7%',
  },
  Icon: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: 'white',
    marginHorizontal: '5%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
  },
  Icons: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    height: 80,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  BannerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '5%',
  },
});
