// @ts-ignore
//@ts-nocheck
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { AdMobInterstitial, AdMobBanner } from 'expo-ads-admob';

//ANDROID BANNER: ca-app-pub-7383631686274743/9539129543
//ANDROID INTER: ca-app-pub-7383631686274743/1637971684
//IOS BANNER: ca-app-pub-7383631686274743/7006133848
//IOS INTER: ca-app-pub-7383631686274743/8693145254
export default class App extends Component {
  constructor(props) {
    super(props);
    this.bannerAdId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-7383631686274743/7006133848'
        : 'ca-app-pub-7383631686274743/9539129543';
    this.insterstitialAdId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-7383631686274743/8693145254'
        : 'ca-app-pub-7383631686274743/1637971684';
  }

  async componentDidMount() {
    AdMobInterstitial.setAdUnitID(this.insterstitialAdId);
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
    await AdMobInterstitial.showAdAsync;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Truco</Text>
        <AdMobBanner bannerAdId="banner" adUnitID={this.bannerAdId} servePersonalizedAds={false} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
