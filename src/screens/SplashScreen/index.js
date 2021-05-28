import {
  View, 
  Image,
  StyleSheet,
} from 'react-native';
import React, { useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
const SplashScreen = ({ }) => {
  setTimeout(() => {
    Actions.CustomizeScreen()
  }, 3000);

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: "100%", width: "100%" }}
        source={require("../../assets/drawable-xxxhdpi/Splash.png")}
      /> 
    </View>
  )
};
const styles = StyleSheet.create({

});
export default SplashScreen;
