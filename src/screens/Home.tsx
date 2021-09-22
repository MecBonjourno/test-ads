import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, useColorScheme, SafeAreaView } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AdBanner from '../components/AdBanner';
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
        <Text style={styles.Title}>Sueca!</Text>
        {carta && (
          <View>
            <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>{carta.name}</Text>
            <Text style={[styles.text, themeTextStyle]}>{carta.rule}</Text>
          </View>
        )}
        <Button title="Pick a Card" onPress={() => pickCard()} />
        <View style={styles.BannerFooter}>
          <AdBanner />
        </View>
      </SafeAreaView>
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
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
  Title: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 70,
  },
  BannerFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 80,
  },
});
