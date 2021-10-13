import React, { useEffect, useState } from 'react'
import {
  Image,
  Text,
  View,
  StyleSheet,
  useColorScheme,
  Pressable,
  Dimensions,
} from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import AdBanner from '../components/AdBanner'
import { LinearGradient } from 'expo-linear-gradient'
import logo from '../../assets/LogoWhite.png'
import { CARDS } from '../utils/CARDS'

interface Carta {
  id: number
  value: number
  suit: string
  name: string
  rule: string
  imgURL: string
}

export default function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })
  const colorScheme = useColorScheme()
  const { width, height } = Dimensions.get('window')
  const themeTextStyle =
    colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer

  const [carta, setCarta] = useState<Carta>()
  const [deck, setDeck] = useState(CARDS.map((card: any) => card))

  function removeCard() {
    const index = deck.indexOf(carta)
    if (index > -1) {
      deck.splice(index, 1)
    }
  }

  function pickCard() {
    const getOneCard = deck[Math.floor(Math.random() * deck.length)]
    setCarta(getOneCard)
    removeCard()
    if (deck.length === 0) {
      console.log('é isso memo')
    }
  }

  function restartGame() {
    setDeck(CARDS.map((card: any) => card))
  }

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  } else {
    return (
      <View style={[styles.container, themeContainerStyle]}>
        <LinearGradient colors={['#10700c', '#0a5a0e']} style={{ flex: 1 }}>
          <Image style={styles.logo} source={logo} />
          {carta && (
            <View style={styles.Card}>
              <Text style={styles.NumberOfCards}>{deck.length}</Text>
              <Pressable onPress={() => pickCard()}>
                <Image
                  style={{ flex: 1, width, height, resizeMode: 'contain' }}
                  source={carta.imgURL}
                />
              </Pressable>
            </View>
          )}
          {!carta && deck.length > 0 && (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '30%',
              }}>
              <Pressable style={styles.Button} onPress={() => pickCard()}>
                <Text style={styles.ButtonText}>Começar!</Text>
              </Pressable>
            </View>
          )}
          {deck.length === 0 && (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '30%',
              }}>
              <Pressable style={styles.Button} onPress={() => restartGame()}>
                <Text style={styles.ButtonText}>Reiniciar o Jogo!</Text>
              </Pressable>
            </View>
          )}
          {carta && (
            <Text
              style={{
                fontFamily: 'Roboto_500Medium',
                fontSize: 26,
                textAlign: 'center',
                marginTop: '2%',
                color: 'white',
              }}>
              {carta.rule}
            </Text>
          )}
          <View style={styles.BannerFooter}>
            <AdBanner />
          </View>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    fontSize: 70,
    color: '#fff',
  },
  BannerFooter: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: '6%',
  },
  logo: {
    marginVertical: '2,5%',
    height: 80,
    width: 200,
    alignSelf: 'center',
  },
  Button: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
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
    textAlign: 'center',
  },
  Card: {
    borderRadius: 25,
    marginBottom: '4%',
    marginTop: '2,5%',
    height: '65%',
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
  NumberOfCards: {
    marginBottom: '1%',
    color: 'white',
    justifyContent: 'flex-end',
  },
})
