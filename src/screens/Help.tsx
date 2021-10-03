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
import AdBanner from '../components/AdBanner';
import Cards from '../../assets/cards.png';
import Drink from '../../assets/drink.png';

export default function Help() {
  const colorScheme = useColorScheme();
  const { width, height } = Dimensions.get('window');
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <LinearGradient colors={['#10700c', '#0a5a0e']} style={{ flex: 1 }}>
        <ScrollView horizontal={true} scrollEventThrottle={16} pagingEnabled={true}>
          <View
            style={{
              width,
              height,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image style={{ width: 200, height: 300 }} source={Drink} />
            <Text style={styles.underText}>
              Jogar Sueca é muito fácil, só precisa de dois itens: Álcool e o Sueca App.(É
              recomendado ter amigos para jogar, mas sabemos que é dificil ter vários 😥)
            </Text>
          </View>
          <View style={{ width, height }}>
            <Image style={{ width: 200, height: 300 }} source={Cards} />
            <Text style={styles.underText}>
              Com esses dois em mãos, "A Mesa", ou no caso o usuário do Sueca App puxa uma carta e
              lê a regra que corresponde ao número da carta. (Neste jogo o naipe não faz diferença!)
            </Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>
              Existem 13 regras diferentes para cada Set de Regras. Por enquanto temos somente o Set
              Regular, nas próximas atualizações traremos outros. Enquanto isso, aqui vão as 13
              regras regulares:
            </Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>1</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>2</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>3</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>4</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>5</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>6</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>7</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>8</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>9</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>10</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>11</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>12</Text>
          </View>
          <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.underText}>13</Text>
          </View>
        </ScrollView>
        <View style={styles.BannerFooter}>
          <AdBanner />
        </View>
      </LinearGradient>
    </View>
  );
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
