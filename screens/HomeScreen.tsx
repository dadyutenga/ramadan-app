"use client"

import { useState, useEffect } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { Text, Card, Button } from "@rneui/themed"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = () => {
  const [countdown, setCountdown] = useState({ hours: 3, minutes: 16, seconds: 45 })
  const [showSalahTimes, setShowSalahTimes] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value) => value.toString().padStart(2, "0")

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card containerStyle={styles.card}>
          <Card.Title h4>Assalamu Alaikum!</Card.Title>
          <Text style={styles.date}>{new Date().toDateString()}</Text>
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title h4>Iftar Countdown</Card.Title>
          <View style={styles.countdownContainer}>
            <View style={styles.countdownItem}>
              <Text style={styles.countdownValue}>{formatTime(countdown.hours)}</Text>
              <Text style={styles.countdownLabel}>hours</Text>
            </View>
            <View style={styles.countdownItem}>
              <Text style={styles.countdownValue}>{formatTime(countdown.minutes)}</Text>
              <Text style={styles.countdownLabel}>minutes</Text>
            </View>
            <View style={styles.countdownItem}>
              <Text style={styles.countdownValue}>{formatTime(countdown.seconds)}</Text>
              <Text style={styles.countdownLabel}>seconds</Text>
            </View>
          </View>
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title h4>Today's Salah Times</Card.Title>
          <Button
            title={showSalahTimes ? "Hide Times" : "Show Times"}
            onPress={() => setShowSalahTimes(!showSalahTimes)}
            type="clear"
          />
          {showSalahTimes && (
            <View style={styles.salahTimesContainer}>
              {[
                { prayer: "Fajr", time: "04:45 AM" },
                { prayer: "Dhuhr", time: "12:30 PM" },
                { prayer: "Asr", time: "03:45 PM" },
                { prayer: "Maghrib", time: "06:15 PM" },
                { prayer: "Isha", time: "07:45 PM" },
                { prayer: "Taraweeh", time: "08:30 PM" },
              ].map((item, index) => (
                <View key={index} style={styles.salahTimeItem}>
                  <Text style={styles.salahTimePrayer}>{item.prayer}</Text>
                  <Text style={styles.salahTimeValue}>{item.time}</Text>
                </View>
              ))}
            </View>
          )}
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title h4>Daily Verse</Card.Title>
          <Text style={styles.verseArabic}>إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ</Text>
          <Text style={styles.verseTranslation}>"Indeed, as-Safa and al-Marwah are among the symbols of Allah..."</Text>
          <Text style={styles.verseReference}>Juz 2 • Page 24 • Al-Baqara (Verse 158)</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  scrollContent: {
    padding: 10,
  },
  card: {
    backgroundColor: "#1E293B",
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    marginBottom: 15,
  },
  date: {
    textAlign: "center",
    color: "#FFC107",
  },
  countdownContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  countdownItem: {
    alignItems: "center",
  },
  countdownValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFC107",
  },
  countdownLabel: {
    color: "#fff",
  },
  salahTimesContainer: {
    marginTop: 10,
  },
  salahTimeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  salahTimePrayer: {
    color: "#fff",
  },
  salahTimeValue: {
    color: "#FFC107",
  },
  verseArabic: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
    color: "#FFC107",
  },
  verseTranslation: {
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 10,
    color: "#fff",
  },
  verseReference: {
    textAlign: "center",
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.7)",
  },
})

export default HomeScreen

