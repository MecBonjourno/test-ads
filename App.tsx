// @ts-ignore
//@ts-nocheck
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded, PublisherBanner } from 'expo-ads-admob';
import Home from './src/screens/Home';
import Ads from './src/screens/Ads';
import Finance from './src/screens/Finance';
import Settings from './src/screens/Settings';
import DarkMode from './src/screens/DarkMode';
import Landing from './src/screens/Landing';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//ANDROID BANNER: ca-app-pub-6389475776142036/3825275035
//ANDROID INTER: ca-app-pub-6389475776142036/2512193368
//IOS BANNER: ca-app-pub-6389475776142036/7956091738
//IOS INTER: ca-app-pub-6389475776142036/1390683389
//TEST APP OPEN: ca-app-pub-3940256099942544/3419835294
//TEST BANNER: ca-app-pub-3940256099942544/6300978111

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#a1a1a1',
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#f1f1f1',
          borderRadius: 15,
          height: 50,
          paddingBottom: 0,
          // padding: 20,
          ...styles.shadow,
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
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
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Landing" component={Landing} />
          <Stack.Screen
            options={{
              headerTitle: () => <Text>Sueca!</Text>,
              headerRight: () => (
                <Button onPress={() => alert('This is a button!')} title="Info" color="#00cc00" />
              ),
            }}
            name="App"
            component={AppTabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
  shadow: {
    shadowColor: '#302b3f',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
  },
});
