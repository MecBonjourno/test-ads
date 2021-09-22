import React, { useEffect, useState } from 'react';
import {
  Button,
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
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <LinearGradient colors={['#10700c', '#332d2d']} style={{ flex: 1 }}>
          <Text style={styles.Title}>Sueca!</Text>
          {carta && (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>{carta.name}</Text>
              <Text style={[styles.text, themeTextStyle]}>{carta.rule}</Text>
            </View>
          )}
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Pressable style={styles.Button} onPress={() => pickCard()}>
              <Text style={styles.ButtonText}>Pick a Card</Text>
            </Pressable>
          </View>
          <View style={styles.BannerFooter}>
            <AdBanner />
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#332d2d',
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
});
