// @ts-ignore
//@ts-nocheck
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './src/screens/DrawerContent';

//ANDROID BANNER: ca-app-pub-6389475776142036/3825275035
//ANDROID INTER: ca-app-pub-6389475776142036/2512193368
//IOS BANNER: ca-app-pub-6389475776142036/7956091738
//IOS INTER: ca-app-pub-6389475776142036/1390683389
//TEST APP OPEN: ca-app-pub-3940256099942544/3419835294
//TEST BANNER: ca-app-pub-3940256099942544/6300978111

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

// function AppTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Ajustes') {
//             iconName = focused ? 'settings-sharp' : 'settings-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//         tabBarShowLabel: true,
//         tabBarActiveTintColor: '#000',
//         tabBarInactiveTintColor: '#a1a1a1',
//         tabBarStyle: {
//           position: 'absolute',
//           bottom: 25,
//           left: 20,
//           right: 20,
//           elevation: 0,
//           backgroundColor: '#f1f1f1',
//           borderRadius: 15,
//           height: 50,
//           paddingBottom: 0,
//           // padding: 20,
//           ...styles.shadow,
//         },
//       })}
//     >
//       <Tab.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="Home"
//         component={Jogo}
//       />
//       <Tab.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="Ajustes"
//         component={Settings}
//       />
//     </Tab.Navigator>
//   );
// }

// function DrawerTabs() {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//     </Drawer.Navigator>
//   );
// }

// function OpenDrawer({ navigation }) {
//   console.log('OpenDrawer');
//   navigation.toggleDrawer();
// }
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
