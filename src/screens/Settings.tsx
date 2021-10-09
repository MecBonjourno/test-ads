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
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AdBanner from '../components/AdBanner';

export default function Settings({ navigation }) {
  const colorScheme = useColorScheme();
  const { width, height } = Dimensions.get('window');

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <LinearGradient colors={['#10700c', '#0a5a0e']} style={{ flex: 1 }}>
        <ScrollView>
          <Pressable style={styles.Line} onPress={() => alert('')}>
            <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>Account</Text>
          </Pressable>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>Color</Text>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>Deck</Text>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>Subscription</Text>
        </ScrollView>
        <View style={styles.BannerFooter}>
          <AdBanner />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#0a5a0e',
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
  BannerFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  Line: {
    backgroundColor: '#bebebe',
    // transparency: 0.8,
  },
});
