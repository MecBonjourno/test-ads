import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, useColorScheme } from 'react-native';
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
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  const [carta, setCarta] = useState<Carta>();

  let arrayOfCards = CARDS.map((card: any) => card);

  function removeCard() {
    for (let i = 0; (i = arrayOfCards.length); i++) {
      console.log('Index da carta selecionada: ' + arrayOfCards.indexOf(carta));
      const index = arrayOfCards.indexOf(carta);
      if (index > -1) {
        arrayOfCards.splice(index, 1);
        console.log('Quantidade de cartas pós pick: ' + arrayOfCards.length);
      }
    }
  }

  function pickCard() {
    console.log('\nQuantidade de cartas pré pick: ' + arrayOfCards.length);
    const getOneCard = arrayOfCards[Math.floor(Math.random() * arrayOfCards.length)];
    setCarta(getOneCard);
  }

  useEffect(() => {
    pickCard();
  }, []);

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.text, themeTextStyle]}>Sueca!</Text>
      {carta && (
        <View>
          <Text style={[styles.text, themeTextStyle]}>{carta.name}</Text>
          <Text style={[styles.text, themeTextStyle]}>{carta.rule}</Text>
        </View>
      )}
      <Button title="Pick a Card" onPress={() => pickCard()} />
      <View style={styles.BannerFooter}>
        <AdBanner />
      </View>
    </View>
  );
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
  BannerFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 80,
  },
});
