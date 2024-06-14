import useFetchPokemon from "@/hooks/useFetchPokemon";
import { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Details({ navigation, route }) {
  const { info, loading, error } = useFetchPokemon(route.params.name);

  useEffect(() => {
    console.log(info, loading, error?.message);
  }, [loading]);

  function handleClick() {
    navigation.navigate("Home");
  }

  return (
    <TouchableOpacity onPress={handleClick} style={styles.button}>
      <View style={styles.container}>
        <Text style={styles.text}>{info?.name}</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: info?.sprites.front_default,
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Weight: {info?.weight}</Text>
        <Text style={styles.text}>Height: {info?.height}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#123456",
    borderRadius: 10,
    margin: 10,
    height: 800,
    paddingBottom: 300,
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    textAlign: "center",
    textTransform: "uppercase",
    padding: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
