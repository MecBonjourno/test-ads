import React, { useEffect, useState } from 'react';
import {
  Button,
  Image,
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AdBanner from '../components/AdBanner';
import { LinearGradient } from 'expo-linear-gradient';
import title from '../../assets/title.jpg';
import { CARDS } from '../utils/CARDS';
import { RULES } from '../utils/RULES';

interface Carta {
  id: number;
  value: number;
  suit: string;
  name: string;
  rule: string;
}

export default function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  const [carta, setCarta] = useState<Carta>();
  const [deck, setDeck] = useState(CARDS.map((card: any) => card));

  function removeCard() {
    const index = deck.indexOf(carta);
    if (index > -1) {
      deck.splice(index, 1);
    }
  }

  function pickCard() {
    const getOneCard = deck[Math.floor(Math.random() * deck.length)];
    setCarta(getOneCard);
    removeCard();
  }

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.container, themeContainerStyle]}>
        <LinearGradient colors={['#10700c', '#0a5a0e']} style={{ flex: 1 }}>
          <Image style={styles.logo} source={title} />
          {/* <Text style={styles.Title}>Sueca!</Text> */}
          {carta && (
            <View style={styles.Card}>
              <Pressable onPress={() => pickCard()}>
                <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>{carta.name}</Text>
                <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 40 }}>{carta.rule}</Text>
              </Pressable>
            </View>
          )}
          {!carta && (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Pressable style={styles.Button} onPress={() => pickCard()}>
                <Text style={styles.ButtonText}>Começar!</Text>
              </Pressable>
            </View>
          )}
          {carta && (
            <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 26 }}>{carta.rule}</Text>
          )}
          <View style={styles.BannerFooter}>
            <AdBanner />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingBottom: '5%',
  },
  logo: {
    marginVertical: '2,5%',
    height: 80,
    width: 200,
    alignSelf: 'center',
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'white',
    width: '50%',
    shadowColor: '#002004',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
  },
  ButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  Card: {
    borderRadius: 25,
    marginHorizontal: '3%',
    marginBottom: '4%',
    marginTop: '2,5%',
    height: '65%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#002004',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
  },
});
