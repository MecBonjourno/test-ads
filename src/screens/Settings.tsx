import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, useColorScheme, Pressable, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AdBanner from '../components/AdBanner';
import { Entypo } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import icon from '../../assets/icon.png';

export default function Settings({ navigation }) {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={styles.MiniSpacer} />
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image source={icon} size={50} />
          <View style={{ marginLeft: 15, flexDirection: 'column' }}>
            <Text style={styles.Name}>Beta Tester</Text>
          </View>
        </View>
      </View>
      <View style={styles.MiniSpacer} />
      <ScrollView>
        <View style={styles.Spacer}></View>
        <Pressable style={styles.Line} onPress={() => alert('Próxima Atualização!')}>
          <Text
            style={{ fontFamily: 'Roboto_500Medium', fontSize: 40, position: 'absolute', left: 20 }}
          >
            Conta
          </Text>
          <Entypo
            style={{ position: 'absolute', right: 20 }}
            name="chevron-right"
            size={24}
            color="black"
          />
          <Entypo
            style={{ position: 'absolute', right: 20 }}
            name="chevron-right"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable style={styles.Line} onPress={() => alert('Próxima Atualização!')}>
          <Text
            style={{ fontFamily: 'Roboto_500Medium', fontSize: 40, position: 'absolute', left: 20 }}
          >
            Cor de Fundo
          </Text>
          <Entypo
            style={{ position: 'absolute', right: 20 }}
            name="chevron-right"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable style={styles.Line} onPress={() => alert('Próxima Atualização!')}>
          <Text
            style={{ fontFamily: 'Roboto_500Medium', fontSize: 40, position: 'absolute', left: 20 }}
          >
            Deck
          </Text>
          <Entypo
            style={{ position: 'absolute', right: 20 }}
            name="chevron-right"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable style={styles.Line} onPress={() => alert('Próxima Atualização!')}>
          <Text
            style={{ fontFamily: 'Roboto_500Medium', fontSize: 40, position: 'absolute', left: 20 }}
          >
            Assinatura
          </Text>
          <Entypo
            style={{ position: 'absolute', right: 20 }}
            name="chevron-right"
            size={24}
            color="black"
          />
        </Pressable>
      </ScrollView>
      <View style={styles.BannerFooter}>
        <AdBanner />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#e9e9e9',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d3d3d2',
  },
  Spacer: {
    height: '10%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  MiniSpacer: {
    height: '3%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  Name: {
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    color: '#000000',
    marginTop: '15%',
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
  BannerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '5%',
  },
  Line: {
    height: 54,
    padding: 6,
    backgroundColor: '#e9e9e9',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
