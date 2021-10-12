import React from 'react';
import { Button, Text, View, StyleSheet, useColorScheme } from 'react-native';
import AdBanner from '../components/AdBanner';

export default function Profile({ navigation }) {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={styles.LandingContainer}>
      <Text style={{}}>Perfil</Text>
      <Button title="Jogar!" onPress={() => navigation.navigate('App')} />
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
  BannerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '5%',
  },
});
