import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  useColorScheme,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AdBanner from '../components/AdBanner';
import Cards from '../../assets/cards.png';
import Drink from '../../assets/drink.png';
import Rule from '../../assets/rule.png';

export default function Help() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });
  const colorScheme = useColorScheme();
  const { width, height } = Dimensions.get('window');
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

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
          <ScrollView horizontal={true} scrollEventThrottle={16} pagingEnabled={true}>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingVertical: 25,
              }}
            >
              <Image
                style={{ width: 350, height: 300, borderRadius: 15, marginTop: '5%' }}
                source={Drink}
              />
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                Jogar Sueca é muito fácil, só precisa de dois itens: Álcool e o Sueca App. (É
                recomendado ter amigos para jogar, mas sabemos que é dificil ter vários 😥)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Image
                style={{ width: 350, height: 300, borderRadius: 15, marginTop: '12%' }}
                source={Cards}
              />
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                Com esses dois em mãos, "A Mesa", ou no caso o usuário do Sueca App puxa uma carta e
                lê a regra que corresponde ao número da carta. (Neste jogo o naipe não faz
                diferença!)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Image
                style={{ width: 350, height: 300, borderRadius: 15, marginTop: '12%' }}
                source={Rule}
              />
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                Existem 13 regras diferentes para cada Set de Regras. Por enquanto temos somente o
                Set Regular, nas próximas atualizações traremos outros. Enquanto isso, aqui vão as
                13 regras regulares:
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                1 - Distribua 1 (Um) Shot.
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                2 - Distribua 2 (Dois) Shots.
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                3
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                4
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                5
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                6
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                7
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                8
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                9
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                10
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                11
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                12
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View style={{ width, height, alignItems: 'center', paddingHorizontal: 15 }}>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                13
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                É meio auto explicativo né, mas segue o que tu deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
          </ScrollView>
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
  Title: {
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    fontSize: 50,
    color: '#fff',
  },
  Slide: {
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
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '18%',
  },
});
