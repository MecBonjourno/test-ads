// @ts-ignore
//@ts-nocheck
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded, PublisherBanner } from 'expo-ads-admob';

//ANDROID BANNER: ca-app-pub-6389475776142036/3825275035
//ANDROID INTER: ca-app-pub-6389475776142036/2512193368
//IOS BANNER: ca-app-pub-6389475776142036/7956091738
//IOS INTER: ca-app-pub-6389475776142036/1390683389
//TEST APP OPEN: ca-app-pub-3940256099942544/3419835294
//TEST BANNER: ca-app-pub-3940256099942544/6300978111

// AdMobInterstitial.setAdUnitID(INTERSTITIAL_ID);
// AdMobInterstitial.setTestDeviceID('EMULATOR');
// AdMobRewarded.setTestDeviceID('EMULATOR');

export default class App extends Component {
  state = {
    disableInterstitialBtn: false,
    disableRewardedBtn: false,
  };

  constructor(props) {
    super(props);
    this.bannerAdId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-3940256099942544/2934735716'
        : 'ca-app-pub-3940256099942544/2934735716';
    this.insterstitialAdId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-3940256099942544/4411468910'
        : 'ca-app-pub-3940256099942544/4411468910';
    this.rewardedAdId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-3940256099942544/5224354917'
        : 'ca-app-pub-3940256099942544/5224354917';
  }
  // async componentDidMount() {
  //   AdMobInterstitial.setAdUnitID(this.insterstitialAdId);
  //   await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
  //   await AdMobInterstitial.showAdAsync;
  //   await AdMobRewarded.setAdUnitID(this.rewardedAdId);
  // }

  _openInterstitial = async () => {
    try {
      this.setState({ disableInterstitialBtn: true });
      // await AdMobInterstitial.requestAdAsync();
      // await AdMobInterstitial.showAdAsync();
      AdMobInterstitial.setAdUnitID(this.insterstitialAdId);
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
      await AdMobInterstitial.showAdAsync;
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ disableInterstitialBtn: false });
    }
  };

  _openRewarded = async () => {
    try {
      this.setState({ disableRewardedBtn: true });
      AdMobRewarded.setAdUnitID(this.rewardedAdId);
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ disableRewardedBtn: false });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Truco</Text>
        <AdMobBanner bannerAdId="banner" adUnitID={this.bannerAdId} servePersonalizedAds={false} />
        <StatusBar style="auto" />
        <Text h2>GOOGLE ADMOB DEMO</Text>
        <Text>
          Set Ad Unit Id, Interstitial Id & Rewarded Id only on the top level component once.
        </Text>
        <Text h4>Banner Ad</Text>
        <AdMobBanner bannerSize="mediumRectangle" adUnitID={this.bannerAdId} />
        <Text h4>Publisher Banner</Text>
        <PublisherBanner bannerSize="banner" adUnitID={this.bannerAdId} />
        <Text h4>Interstitial Ad</Text>
        <Button
          title="Open"
          type="outline"
          disabled={this.disableInterstitialBtn}
          onPress={this._openInterstitial}
        />
        <Text h4>Rewarded Ad</Text>
        <Button
          title="Open"
          type="outline"
          disabled={this.disableRewardedBtn}
          onPress={this._openRewarded}
        />
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
