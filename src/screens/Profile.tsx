import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import AdBanner from '../components/AdBanner'
import { Avatar, Title } from 'react-native-paper'
import icon from '../../assets/icon.png'
import { LinearGradient } from 'expo-linear-gradient'

export default function Profile({ navigation }) {
  return (
    <View style={styles.LandingContainer}>
      <LinearGradient colors={['#10700c', '#0a5a0e']} style={{ flex: 1 }}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Avatar.Image source={icon} size={70} />
            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
              <Title style={styles.title}>Beta Tester</Title>
            </View>
          </View>
        </View>
        <View style={styles.MiniSpacer} />
        <View style={styles.Stats}>
          <Text style={styles.Title}>Obrigado por baixar e jogar Sueca!</Text>
          <Text style={styles.subTitle}>
            Em breve aqui estarão suas estatísticas de jogo
          </Text>
        </View>
        <View style={styles.BannerFooter}>
          <AdBanner />
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  LandingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MiniSpacer: {
    height: '3%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  Title: {
    marginHorizontal: '1%',
    marginBottom: '5%',
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
    color: '#1b1b1b',
  },
  subTitle: {
    marginHorizontal: '2,5%',
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    color: '#1b1b1b',
  },
  BannerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '5%',
  },
  userInfoSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: '15%',
    color: 'white',
  },
  Stats: {
    borderRadius: 25,
    backgroundColor: 'white',
    marginVertical: '6%',
    marginHorizontal: '4%',
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
})
