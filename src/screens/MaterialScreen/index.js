import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import { Actions } from 'react-native-router-flux';
import Ionicons from "react-native-vector-icons/Ionicons"
const MaterialScreen = () => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1.6, }}>
                <ImageBackground source={require("../../assets/drawable-xxxhdpi/header.png")}
                    resizeMode="cover"
                    style={{ height: "100%", width: "100%", }}
                >
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Ionicons name="chevron-back" style={{fontSize:30}} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: "white", }}>
                            Camera
                        </Text>
                        <View></View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ flex: 6.8, }}>
                <Image
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="stretch"
                    source={require('../../assets/drawable-xxxhdpi/FabricFrame.jpeg')}
                />
            </View>
            <View style={{ flex: 1.6, alignItems: "center", justifyContent: "space-between", backgroundColor: "#5e5e5e" }}>
                <ImageBackground
                    source={require("../../assets/drawable-xxxhdpi/tutorialbottum.png")}
                    style={styles.tutorialButtom}>
                    <Text style={{ fontSize: 20, color: "#b6c9d9", }}>Fabric Photo</Text>
                </ImageBackground>
                <View style={styles.nextBtnView}>
                    <TouchableOpacity
                        onPress={() => Actions.ClothSelection()}
                        style={styles.nextBtn}>
                        <Text style={{ fontSize: 25, color: "white" }}>Next </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
};
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        // padding: 10,
        paddingHorizontal:5,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cameraText: {
        fontSize: 20,
        color: "#bcbcbc",
        marginLeft: "40%",
        marginRight: "25%",
    },
    tutorialButtom: {
        height: 33,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    nextBtn: {
        elevation: 3,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#007db8",
        height: "100%",
        borderRadius: 25
    },

    nextBtnView: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        height: 45
    }
});
export default MaterialScreen;
