"use client"

import { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ThemeProvider, createTheme } from "@rneui/themed"
import Icon from "react-native-vector-icons/Ionicons"

import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import HomeScreen from "./screens/HomeScreen"
import ChallengesScreen from "./screens/ChallengesScreen"
import RecipesScreen from "./screens/RecipesScreen"
import QuranScreen from "./screens/QuranScreen"
import SettingsScreen from "./screens/SettingsScreen"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const theme = createTheme({
  lightColors: {
    primary: "#FFC107",
    secondary: "#1E293B",
    background: "#0F172A",
  },
  darkColors: {
    primary: "#FFC107",
    secondary: "#1E293B",
    background: "#0F172A",
  },
  mode: "dark",
})

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "Challenges") {
            iconName = focused ? "trophy" : "trophy-outline"
          } else if (route.name === "Recipes") {
            iconName = focused ? "restaurant" : "restaurant-outline"
          } else if (route.name === "Quran") {
            iconName = focused ? "book" : "book-outline"
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline"
          }

          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: theme.lightColors.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: theme.lightColors.secondary,
          borderTopColor: "rgba(255, 255, 255, 0.1)",
        },
        headerStyle: {
          backgroundColor: theme.lightColors.secondary,
        },
        headerTintColor: "#fff",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Challenges" component={ChallengesScreen} />
      <Tab.Screen name="Recipes" component={RecipesScreen} />
      <Tab.Screen name="Quran" component={QuranScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
              <Stack.Screen name="MainTabs" component={MainTabs} />
            ) : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

