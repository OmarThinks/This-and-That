import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const That = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.that, styles.thatFlexBox]}>
      <View style={[styles.buttonParent, styles.appbarFlexBox]}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.that1}>That</Text>
        </Pressable>
        <View style={[styles.bottom, styles.buttonFlexBox]}>
          <Pressable
            style={[styles.button1, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("This")}
          >
            <Text style={styles.that1}>{`This `}</Text>
          </Pressable>
          <Pressable
            style={[styles.button2, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.that1}>That</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thatFlexBox: {
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
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
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
  that1: {
    fontSize: FontSize.thisThatText_size,
    fontWeight: "700",
    fontFamily: FontFamily.thisThatText,
    color: Color.black,
    textAlign: "left",
  },
  button: {
    paddingVertical: Padding.p_21xl,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.mediumslateblue,
  },
  button1: {
    backgroundColor: Color.palegreen,
    paddingVertical: Padding.p_21xl,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  button2: {
    marginLeft: 30,
    paddingVertical: Padding.p_21xl,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.mediumslateblue,
  },
  bottom: {
    marginTop: 30,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonParent: {
    padding: Padding.p_xl,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  that: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
  },
});

export default That;
