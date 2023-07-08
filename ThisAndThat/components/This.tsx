import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const This = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.this, styles.thisFlexBox]}>
      <View style={styles.appbar}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.buttonParent, styles.thisFlexBox]}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.this1}>{`This `}</Text>
        </Pressable>
        <View style={[styles.bottom, styles.buttonFlexBox]}>
          <Pressable
            style={[styles.button1, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.this1}>{`This `}</Text>
          </Pressable>
          <Pressable
            style={[styles.button2, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("That")}
          >
            <Text style={styles.this1}>{`That `}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thisFlexBox: {
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
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
    alignSelf: "stretch",
    overflow: "hidden",
  },
  this1: {
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
    backgroundColor: Color.palegreen,
    alignSelf: "stretch",
  },
  button1: {
    paddingVertical: Padding.p_21xl,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.palegreen,
  },
  button2: {
    backgroundColor: Color.mediumslateblue,
    marginLeft: 30,
    paddingVertical: Padding.p_21xl,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
  bottom: {
    marginTop: 30,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonParent: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
  },
  this: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
  },
});

export default This;
