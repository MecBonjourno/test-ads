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
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AdBanner from '../components/AdBanner';
import Cards from '../../assets/cards.png';
import Drink from '../../assets/drink.png';
import Rule from '../../assets/rule.png';

export default function Help() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_500Medium_Italic,
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
                  textAlign: 'center',
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
                  textAlign: 'center',
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
                  textAlign: 'center',
                }}
              >
                Existem 13 regras diferentes para cada Set de Regras. Por enquanto temos somente o
                Set Regular, nas próximas atualizações traremos outros. Enquanto isso, aqui vão as
                13 regras regulares:
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                }}
              >
                1 - Distribua 1 Shot.
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                É meio auto explicativo né, mas segue o que você deve fazer: Manda alguém tomar um
                único shot. (Pode ser quem tirou a carta também, o objetivo é beber)
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                2 - Distribua 2 Shots.
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                É meio auto explicativo também, mas: Manda duas pessoas beberem shot. Pode mandar 2
                shots para uma única pessoa também, ta na regra!
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                3 - Distribua 3 shots
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                Acho que você ja pegou á ideia né: Manda 3 pessoas beberem shots. Ou pode distribuir
                de maneira que achar melhor, 2 pra um, 1 pra cada jogador, 3 pra um e assim vai.
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                4 - Jogo: Eu nunca
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                O jogo do Eu Nunca é básico e muito bom pra cusar intriga, o jogador que tirou a
                carta fala algo que ele nunca tenha feito, se alguém do jogo ja tiver feito, essa
                pessoa bebe um shot. {'\n'}
                {'\n'} Ex.: Eu nunca visitei o Rio de Janeiro. (Quem já visitou bebe!)
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                5 - Jogo: C ou S
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                O Jogo do C ou S é fácil e rápido, o jogador que tirou a carta começa falando um
                palavra qualquer e o jogador a direita tem que falar uma palavra que tenha sentindo
                e concordância com o que foi dito. O único detalhe é: as palavras não podem começar
                com as letras C ou S. Quem falar alguma palavra assim, bebe o shot da rodada.
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                6 - Passe para o banheiro
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                A carta dá o poder de ir ao banheiro quando quiser, para o jogador que retira-la
                óbvio. Os jogadores não podem ir ao banheiro durante o jogo, se for, já sabe né?!
                Shot!
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                7 - Jogo: Pi
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 26,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                O jogo do Pi serve pra pegar os jogadores mais desavisados. O jogador que tirou a
                carta escolhe um número de 2 á 9, e começa falando o número 1. O jogador seguinte a
                direita fala o próxima número, ou seja, número 2. Caso o número da vez seja o número
                que foi escolhido pelo jogador que tirou a carta, no lugar do número deve ser dito a
                palavra: "Pi". {'\n'}
                {'\n'}Ex.: Número 3: 1, 2, "pi", 4, 5, "pi", 7, 8, "pi", 10, 11, "pi", "pi", 14
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                8 - Invente uma regra
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                O jogador que tirar esta carta pode inventar uma regra que será válida até a próxima
                carta 8 ser tirada. As regras podem ser qualquer coisa e totalmente autoritárias se
                quiser.{'\n'}
                {'\n'} Ex.: A partir de agora quem tomar um shot com a mão esquerda vai ter que
                tomar outro.
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                9 - Jogo: Dedinho
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                O Jogo do dedinho é similar ao dorminhoco, quem tirar a carta 9 terá a oportunidade
                de colocar o dedo mindinho parado na mesa (Caso estajam jogando sem uma mesa, o
                local é no ombro ou coxa), e os outros jogadores devem fazer o mesmo, o ultimo
                jogador que colocar o dedinho toma o shot da rodada.
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                10 - Palavra Proibida
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                O jogador que tirar esta carta pode escolher a palavra proibida, toda a vez que a
                palavra for dita por um jogador, este jogador bebe um shot. A palavra proibida é
                valida até que a próxima carta 10 seja tirada.
                {'\n'}
                Ex.: A palavra é "Toma", quando alguém falar a palavra independente do momento, toma
                shot.
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                11 - Homens bebem
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                Todos os homens jogando bebem um shot essa rodada.
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                12 - Mulheres bebem
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                Todas as mulheres jogando bebem um shot essa rodada.
              </Text>
            </View>
            <View
              style={{
                width,
                height,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-1%',
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium_Italic',
                  fontSize: 32,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                13 - Todos os jogadores bebem
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 30,
                  marginTop: '3%',
                  color: '#f0efef',
                  textAlign: 'center',
                }}
              >
                Todos os jogadores bebem esta rodada.
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
