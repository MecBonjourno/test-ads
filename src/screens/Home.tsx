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
  const [deck, setDeck] = useState(CARDS.map((card: any) => card));

  function removeCard() {
    console.log('Index da carta selecionada: ' + deck.indexOf(carta));

    const index = deck.indexOf(carta);
    if (index > -1) {
      deck.splice(index, 1);
      // setDeck(
      //   deck.filter(item => {
      //     return item !== carta;
      //   })
      // );
      console.log('Quantidade de cartas pós pick: ' + deck.length);
    }
  }

  function pickCard() {
    console.log('\nQuantidade de cartas pré pick: ' + deck.length);
    const getOneCard = deck[Math.floor(Math.random() * deck.length)];
    setCarta(getOneCard);
    removeCard();
  }

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
