import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, useColorScheme } from 'react-native';
import AdBanner from '../components/AdBanner';

interface Carta {
  card: string;
  name: string;
}

export default function Settings({ navigation }) {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  return (
    <View style={[styles.LandingContainer, themeContainerStyle]}>
      <Text style={[styles.text, themeTextStyle]}>Settings Screen</Text>
      <View style={styles.BannerFooter}>
        <AdBanner />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LandingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
  BannerFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 80,
  },
});
