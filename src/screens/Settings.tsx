import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, useColorScheme, Pressable, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AdBanner from '../components/AdBanner';
import { Entypo } from '@expo/vector-icons';

export default function Settings({ navigation }) {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Spacer}></View>
        <Pressable style={styles.Line} onPress={() => alert('Próxima Atualização!')}>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>Conta</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.Line} onPress={() => alert('Próxima Atualização!')}>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>Cor de Fundo</Text>
        </Pressable>
        <Pressable style={styles.Line} onPress={() => alert('Próxima Atualização!')}>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>Deck</Text>
        </Pressable>
        <Pressable style={styles.Line} onPress={() => alert('Próxima Atualização!')}>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 40 }}>Assinatura</Text>
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
    padding: 6,
    backgroundColor: '#e9e9e9',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
