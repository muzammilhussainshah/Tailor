import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Actions } from 'react-native-router-flux';
const TutorialBack = () => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1.6, }}>
                <Image source={require("../../assets/drawable-xxxhdpi/tutorialheader.png")}
                    style={{ height: "100%", position: "absolute", width: "100%", }}
                />
                <View style={{ flex: 4.5, alignItems: "flex-end" }}>
                    <Image source={require("../../assets/drawable-xxxhdpi/Title.png")}
                        style={{ height: "40%", width: "90%", }}
                        resizeMode="stretch"
                    />
                </View>
                <View style={styles.header}>
                <TouchableOpacity onPress={() => Actions.pop()}>
                        <Ionicons name="chevron-back" style={styles.backBtn} />
                    </TouchableOpacity>
                    <Text style={styles.cameraText}>
                        Camera
                        </Text>
                    <TouchableOpacity
                        onPress={() => { Actions.MaterialScreen() }}>
                        <Text style={{ color: "#bcbcbc", }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 6.8, }}>
                <Image
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="stretch"
                    source={require('../../assets/drawable-xxxhdpi/tutorialback.jpeg')}
                />
            </View>
            <View style={{ flex: 1.6, alignItems: "center", backgroundColor: "#5e5e5e" }}>
                <ImageBackground
                    source={require("../../assets/drawable-xxxhdpi/tutorialbottum.png")}
                    style={styles.tutorialButtom}>
                    <Text style={{ fontSize: 20, color: "#b6c9d9", }}>Back Photo</Text>
                </ImageBackground>
            </View>
        </View >
    )
};
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        padding: 5,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute"
    },
    cameraText: {
        fontSize: 20,
        color: "#bcbcbc", 
    },
    tutorialButtom: {
        height: 33,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    
    backBtn: {
        fontSize: 30, 
        color:"#bcbcbc"
    },
});
export default TutorialBack;
