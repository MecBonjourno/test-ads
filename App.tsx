// @ts-ignore
//@ts-nocheck
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Button, Pressable } from 'react-native';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded, PublisherBanner } from 'expo-ads-admob';
import Jogo from './src/screens/Home';
import Loja from './src/screens/Loja';
import Help from './src/screens/Help';
import Settings from './src/screens/Settings';
import More from './src/screens/More';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './src/screens/DrawerContent';

//ANDROID BANNER: ca-app-pub-6389475776142036/3825275035
//ANDROID INTER: ca-app-pub-6389475776142036/2512193368
//IOS BANNER: ca-app-pub-6389475776142036/7956091738
//IOS INTER: ca-app-pub-6389475776142036/1390683389
//TEST APP OPEN: ca-app-pub-3940256099942544/3419835294
//TEST BANNER: ca-app-pub-3940256099942544/6300978111

const Drawer = createDrawerNavigator();

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

  _openInterstitial = async () => {
    try {
      this.setState({ disableInterstitialBtn: true });
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
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Jogo" component={Jogo} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="More" component={More} />
          <Drawer.Screen name="Help" component={Help} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Loja" component={Loja} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
