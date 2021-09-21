// @ts-ignore
//@ts-nocheck
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';

export default class AdBanner extends Component {
  constructor(props) {
    super(props);
    this.bannerAdId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-3940256099942544/2934735716'
        : 'ca-app-pub-3940256099942544/2934735716';
  }

  render() {
    return (
      <AdMobBanner bannerAdId="banner" adUnitID={this.bannerAdId} servePersonalizedAds={false} />
    );
  }
}
