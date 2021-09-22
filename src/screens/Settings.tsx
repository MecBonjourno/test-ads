import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  Pressable,
} from 'react-native';
import AdBanner from '../components/AdBanner';

export default function Settings({ navigation }) {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <SafeAreaView style={[styles.container, themeContainerStyle]}>
      <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>Settings</Text>
      <View style={styles.BannerFooter}>
        <AdBanner />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#332d2d',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d3d3d2',
  },
  Title: {
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    fontSize: 70,
    color: '#fff',
  },
  BannerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '10%',
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'black',
    width: '50%',
  },
  ButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
