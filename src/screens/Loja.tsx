import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Button, Text, View, StyleSheet, FlatList } from 'react-native';
import AdBanner from '../components/AdBanner';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

export default function Loja({ navigation }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  const dataSource = [
    { id: 1, name: 'Temas' },
    { id: 2, name: 'Decks' },
    { id: 3, name: 'Loot Boxes' },
    { id: 4, name: 'RoadMap' },
  ];
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#10700c', '#0a5a0e']}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={styles.Title}>Em Breve:</Text>
          <FlatList
            data={dataSource}
            renderItem={({ item }) => (
              <View style={styles.Card}>
                <Text style={styles.UpId}>{item.id}</Text>
                <Text style={styles.More}>{item.name}</Text>
                <Text style={styles.DownId}>{item.id}</Text>
              </View>
            )}
            numColumns={2}
          />
          <View>
            <Text style={styles.More}>E muito mais...</Text>
          </View>
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
  Title: {
    marginHorizontal: '2,5%',
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
    fontSize: 60,
    color: '#fff',
  },
  BannerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '5%',
  },
  Card: {
    marginHorizontal: '4%',
    marginVertical: '5%',
    borderRadius: 25,
    width: 150,
    height: 200,
    backgroundColor: '#1f1e1e',
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
  More: {
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    fontSize: 26,
    color: '#fff',
  },
  UpId: {
    position: 'absolute',
    top: 10,
    left: 15,
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
    color: '#fff',
  },
  DownId: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
    color: '#fff',
  },
});
