import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  useColorScheme,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import AdBanner from '../components/AdBanner';

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
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.underText}>
              Jogar Sueca é muito fácil, só precisa de dois itens: Álcool e o Sueca App.(É
              recomendado ter amigos para jogar, mas sabemos que é dificil ter vários 😥)
            </Text>
          </View>
          <View style={{ width, height }}>
            <Text style={styles.underText}>
              Com esses dois em mãos, "A Mesa", ou no caso o usuário do Sueca App puxa uma carta e
              lê a regra que corresponde ao número da carta. (Neste jogo o naipe não faz diferença!)
            </Text>
          </View>
          <View style={{ width, height }}>
            <Text style={styles.underText}>
              Jogar Sueca é muito fácil, só precisa de dois itens: Álcool e o Sueca App.(É
              recomendado ter amigos para jogar, mas sabemos que é dificil ter vários 😥) Com esses
              dois em mãos, "A Mesa", ou no caso o usuário do Sueca App puxa uma carta e lê a regra
              que corresponde ao número da carta. (Neste jogo o naipe não faz diferença!)
            </Text>
          </View>
          <View style={{ width, height }}>
            <Text style={styles.underText}>
              Jogar Sueca é muito fácil, só precisa de dois itens: Álcool e o Sueca App.(É
              recomendado ter amigos para jogar, mas sabemos que é dificil ter vários 😥) Com esses
              dois em mãos, "A Mesa", ou no caso o usuário do Sueca App puxa uma carta e lê a regra
              que corresponde ao número da carta. (Neste jogo o naipe não faz diferença!)
            </Text>
          </View>
          <View style={{ width, height }}>
            <Text style={styles.underText}>
              Jogar Sueca é muito fácil, só precisa de dois itens: Álcool e o Sueca App.(É
              recomendado ter amigos para jogar, mas sabemos que é dificil ter vários 😥) Com esses
              dois em mãos, "A Mesa", ou no caso o usuário do Sueca App puxa uma carta e lê a regra
              que corresponde ao número da carta. (Neste jogo o naipe não faz diferença!)
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
  Image: {},
  underText: {},
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
