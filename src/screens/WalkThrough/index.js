import {
  View,
  Text,
  Image,
  StyleSheet, ImageBackground, Dimensions, TouchableOpacity
} from 'react-native';
import React from 'react';
import ImageSlider from 'react-native-image-slider';
import { Actions } from 'react-native-router-flux';

const WalkThrough = ({ }) => {
  const slides = [
    {
      key: 1,
      image: require('../../assets/drawable-xxxhdpi/manCartoon.png'),
      txt1: "Tutorial",
      txt2: "Skip",
      pose: "Front"
    },
    {
      key: 2,
      image: require('../../assets/drawable-xxxhdpi/manCartoonRR.png'),
      txt1: "Tutorial",
      txt2: "Skip",
      pose: "Right Side Photo"
    },
    {
      key: 3,
      image: require('../../assets/drawable-xxxhdpi/manCartoonBB.png'),
      txt1: "Tutorial",
      txt2: "Done",
      pose: "Back photo"
    },
  ];
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={{ flex: 1 }}>
      <ImageSlider
        style={{ backgroundColor: 'none', }}
        loop
        autoPlayWithInterval={3000}
        images={slides}
        customSlide={({ index, item, style, }) => (
          <View key={index} style={[style, { flex: 1, justifyContent: "flex-end", alignItems: "center" }]}>
            <View style={{ flex: 1.8, }}>
              <ImageBackground source={require("../../assets/drawable-xxxhdpi/header.png")}
                resizeMode="cover"
                style={{ height: "100%", width: windowWidth, }}
              >
                <View style={styles.header}>
                  <View></View>
                  <Text style={{ fontSize: 20, color: "white", }}>
                    {item.txt1}
                  </Text>
                  <TouchableOpacity
                    onPress={() => { Actions.TutorialFront() }}>
                    <Text style={{ color: "white", }}>{item.txt2}</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <View style={{ flex: 6.4 }}>
              <Image
                style={{ height: "100%" }}
                resizeMode={"contain"}
                source={item.image}
              />
            </View>
            <View style={{ flex: 1.8, alignItems: "center", width: windowWidth, backgroundColor: "#008ec6" }}>
              <Text style={{ marginTop: 10 }}>{item.pose}</Text>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View style={[styles.dot, { backgroundColor: item.key >= 1 ? "black" : "#60b9d4" }]}></View>
                <View style={[styles.dot, { backgroundColor: item.key >= 2 ? "black" : "#60b9d4" }]}></View>
                <View style={[styles.dot, { backgroundColor: item.key >= 3 ? "black" : "#60b9d4" }]}></View>
              </View>
            </View>
          </View>
        )}

        customButtons={(position, move) => (
          <View  >
          </View>
        )}
      />
    </View>
  )
};
const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    marginHorizontal: 4,
    borderRadius: 5
  },
  header: {
    flexDirection: "row",
    padding:10,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent:"space-between"
  }
});
export default WalkThrough;
