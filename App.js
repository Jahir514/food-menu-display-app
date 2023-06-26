import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  View,
  Text,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverViewScreen from './screens/MealsOverViewScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealsOverview' component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <CategoriesScreen /> */}
    </>
  )
}

const styles = StyleSheet.create({})
