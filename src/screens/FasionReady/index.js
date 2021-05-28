import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import React from 'react';
import { Actions } from 'react-native-router-flux';
const FasionReady = () => {
    return (
        <View style={{ flex: 1 ,backgroundColor:"white"}}>
            <View style={{ flex: 1.8, backgroundColor: "red" }}>
                <ImageBackground source={require("../../assets/drawable-xxxhdpi/header.png")}
                    resizeMode="cover"
                    style={{ height: "100%", width: "100%", }}
                >
                    <View style={{ flex: 1, }}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                            <Ionicons name="chevron-back" style={styles.backBtn} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.Options}>You'll look like this</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ flex: 7.4,  justifyContent:"center" }}>
                <Image style={{ height: "95%", width: "100%" }}
                    resizeMode="contain"
                    source={require("../../assets/drawable-xxxhdpi/FasionReady.png")}></Image>
            </View>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={styles.nextBtnView}>
                    <TouchableOpacity
                        onPress={() => Actions.CustomizeScreen()}
                        style={styles.nextBtn}>
                        <Text style={{ fontSize: 20, color: "white" }}>Customize Another Outfit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    backBtn: {
        fontSize: 30,
        marginTop: 10,
        marginLeft: 10
    },
    Options: {
        fontSize: 32,
        letterSpacing: 1.5,
        textAlign: "center",
    },
    nextBtn: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#007db8",
        height: "100%",
        borderRadius: 25,
        elevation: 3
    },
    nextBtnView: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 45
    },
});
export default FasionReady;
