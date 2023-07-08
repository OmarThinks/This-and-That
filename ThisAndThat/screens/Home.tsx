import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeFlexBox]}>
      <View style={[styles.buttonParent, styles.appbarFlexBox]}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("This")}
        >
          <Text style={styles.this}>{`This `}</Text>
        </Pressable>
        <Pressable
          style={[styles.button1, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("That")}
        >
          <Text style={styles.this}>{`That `}</Text>
        </Pressable>
        <Container />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  appbarFlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  vectorIcon: {
    width: 30,
    height: 30,
  },
  appbar: {
    backgroundColor: Color.lightgray,
    padding: Padding.p_3xs,
    alignItems: "flex-end",
  },
  this: {
    fontSize: FontSize.thisThatText_size,
    fontWeight: "700",
    fontFamily: FontFamily.thisThatText,
    color: Color.black,
    textAlign: "left",
  },
  button: {
    backgroundColor: Color.palegreen,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_21xl,
  },
  button1: {
    backgroundColor: Color.mediumslateblue,
    padding: Padding.p_6xl,
    marginTop: 30,
  },
  buttonParent: {
    padding: Padding.p_xl,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  home: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
  },
});

export default Home;
