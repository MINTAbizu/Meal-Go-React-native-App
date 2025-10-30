import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

export default function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    photos = [
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
    ],
    address = "Shashamane, Ethiopia",
    rating = 5,
    isClosedTemporarily = true,
    isOpenNow = true,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>

        <View style={styles.statusRow}>
          {isClosedTemporarily && (
            <Text style={styles.closed}>CLOSED TEMPORARILY</Text>
          )}
          {isOpenNow && <Text style={styles.open}>OPEN NOW</Text>}
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cover: {
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    margin:10
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  closed: {
    color: "red",
    fontWeight: "bold",
  },
  open: {
    color: "green",
    fontWeight: "bold",
  },
});
