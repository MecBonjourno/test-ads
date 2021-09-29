import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Button, Text, View, StyleSheet, FlatList } from 'react-native';
import AdBanner from '../components/AdBanner';

export default function Loja({ navigation }) {
  const dataSource = [
    { id: 1, name: 'Temas' },
    { id: 2, name: 'Decks' },
    { id: 3, name: 'Loot Boxes' },
    { id: 4, name: 'RoadMap' },
  ];

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
              <Text>{item.name}</Text>
            </View>
          )}
          numColumns={2}
        />
        <View style={styles.AndMore}>
          <Text>And More to come</Text>
        </View>
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
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    fontSize: 70,
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
    backgroundColor: 'white',
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
  AndMore: {
    marginTop: '-5%',
    borderRadius: 25,
    width: 150,
    height: 30,
    backgroundColor: 'white',
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
});
