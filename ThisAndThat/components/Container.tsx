import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Container = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottom}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingVertical: Padding.p_21xl,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_11xl,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
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
  },
  button1: {
    backgroundColor: Color.mediumslateblue,
    marginLeft: 30,
  },
  bottom: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default Container;
