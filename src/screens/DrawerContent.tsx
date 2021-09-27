import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export function DrawerContent({ props, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>John Doe</Title>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="cards-playing-outline" size={size} color={color} />
              )}
              label="Jogo"
              onPress={() => {
                navigation.navigate('Jogo');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Ionicons name="person" color={color} size={size} />}
              label="Profile"
              onPress={() => {
                navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="bookmark-outline" color={color} size={size} />
              )}
              label="More +"
              onPress={() => {
                navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                navigation.navigate('Settings');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Ionicons name="cart" color={color} size={size} />}
              label="Loja"
              onPress={() => {
                navigation.navigate('Loja');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => console.log('Preferences')}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Ionicons name="log-out-outline" color="black" size={20} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => <Ionicons name="log-out-outline" color={color} size={size} />}
          label="Sign Out"
          onPress={() => console.log('pressed')}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
