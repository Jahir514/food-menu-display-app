import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import CategoriesScreen from './screens/CategoriesScreen';
export default function App() {
  return (
    <>
      <CategoriesScreen />
      {/* <View>
        <Text>sfddsf</Text>
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({});
