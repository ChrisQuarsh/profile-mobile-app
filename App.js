import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/landscape.jpg")} style={styles.image} />

      <View style={styles.iconContainer}>
        <SimpleLineIcons
          name="camera"
          size={20}
          color="white"
          style={styles.icon}
        />
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>School</Text>
        <Text style={styles.info}>Codetrain Ghana</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email Address</Text>
        <Text style={styles.info}>chisquarshie57@gmail.com</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.blueLabel}>Name</Text>
        <Text style={styles.info}>Chris Quarshie</Text>
        <View style={styles.hrLine}></View>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.blueLabel}>Nick Name</Text>
        <Text style={styles.info}>Eye Man</Text>
        <View style={styles.hrLine}></View>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.blueLabel}>Emergency Contact</Text>
        <Text style={styles.info}>+233 501 222 372</Text>
        <View style={styles.hrLine}></View>
      </View>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.buttonText}>UPDATE PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
  },

  image: {
    height: 130,
    width: 130,
    marginTop: 50,
    alignSelf: "center",
    borderRadius: 75,
  },

  icon: {
    alignSelf: "center",
    paddingVertical: 6,
  },

  iconContainer: {
    alignSelf: "center",
    height: 35,
    width: 35,
    borderRadius: 20,
    position: "relative",
    top: -45,
    left: 47,
    backgroundColor: "deepskyblue",
  },

  detailContainer: {
    marginVertical: 5,
  },

  label: {
    color: "grey",
  },

  info: {
    fontSize: 15,
  },

  blueLabel: {
    color: "deepskyblue",
  },

  hrLine: {
    height: 1,
    backgroundColor: "lightgrey",
    marginTop: 3,
  },

  updateButton: {
    alignSelf: "center",
    backgroundColor: "deepskyblue",

    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 50,
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    alignItems: "center",
  },
});

export default App;
