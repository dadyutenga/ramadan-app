"use client"

import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Button, Input, Text } from "@rneui/themed"
import { SafeAreaView } from "react-native-safe-area-context"

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text h3 style={styles.title}>
          Create an Account
        </Text>
        <Input
          placeholder="Full Name"
          leftIcon={{ type: "ionicon", name: "person-outline" }}
          onChangeText={setName}
          value={name}
        />
        <Input
          placeholder="Email"
          leftIcon={{ type: "ionicon", name: "mail-outline" }}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: "ionicon", name: "lock-closed-outline" }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button title="Register" containerStyle={styles.buttonContainer} buttonStyle={styles.button} />
        <Button title="Already have an account? Login" type="clear" onPress={() => navigation.navigate("Login")} />
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
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#FFC107",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#FFC107",
  },
})

export default RegisterScreen

