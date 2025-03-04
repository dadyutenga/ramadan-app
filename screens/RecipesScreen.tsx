import { View, StyleSheet } from "react-native"
import { Text } from "@rneui/themed"
import { SafeAreaView } from "react-native-safe-area-context"

const RecipesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text h4 style={styles.text}>
          Recipes Screen
        </Text>
        <Text style={styles.text}>Coming soon...</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
})

export default RecipesScreen

