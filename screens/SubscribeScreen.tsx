import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../components/Button";
import { validateEmail } from "../utils";

export default function SubscribeScreen() {
  const [email, setEmail] = useState('');

  const isEmailValid = validateEmail(email);

  function onPress(){
    Alert.alert("Thanks for subscribing, stay tuned!");
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.title}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={"Type your email"}
      />
      <Button
        onPress={onPress}
        disabled={!isEmailValid}
      >
        Subscribe
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
  },
});