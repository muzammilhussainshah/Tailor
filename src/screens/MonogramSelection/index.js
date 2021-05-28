import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import React, { useState } from 'react';
import { Actions } from 'react-native-router-flux';
const MonogramSelection = () => {
    const [isSelected, setisSelected] = useState(true)
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 2 }}>
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
                        <Text style={styles.Options}>Monogram</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <View style={styles.leftViewStrapper}>
                                <Text style={{ color: "white", marginLeft: "26.6%", }}>1</Text>
                                <Text style={{ color: "white", marginLeft: "17.8%", }}>2</Text>
                                <Text style={{ color: "white", marginLeft: "17.8%", }}>3</Text>
                            </View>
                            <View style={styles.strapperView}>
                                <Text style={{ color: "white", }}>4</Text>
                            </View>
                            <View style={styles.rightViewStrapper}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "white", marginLeft: "50%", }}>5</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ backgroundColor: "#001e2d", flex: 7 }}>
                <Text style={styles.Options2}>Do you want a Monogram </Text>
                <Text style={styles.Options1}>(Initials)?</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 30 }}>
                    <TouchableOpacity
                        onPress={() => setisSelected(true)}
                        style={[styles.btns, { backgroundColor: isSelected ? "white" : "black", borderWidth: !isSelected ? 2 : 0, borderColor: !isSelected ? "white" : "black" }]}>
                        <Text style={{ fontSize: 30, color: isSelected ? "black" : "white", }}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setisSelected(false)}
                        style={[styles.btns, { backgroundColor: !isSelected ? "white" : "black", borderWidth: isSelected ? 2 : 0, borderColor: isSelected ? "white" : "black" }]}>
                        <Text style={{ fontSize: 30, color: !isSelected ? "black" : "white", }}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={styles.nextBtnView}>
                    <TouchableOpacity
                        onPress={() => Actions.AdditionalScreen()}
                        style={styles.nextBtn}>
                        <Text style={{ fontSize: 25, color: "white" }}>Next </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
};
const styles = StyleSheet.create({
    Options: {
        fontSize: 32,
        letterSpacing: 1.5,
        textAlign: "center",
    },
    Options2: {
        fontSize: 25,
        textAlign: "center",
        color: "white",
        width: "100%",
        marginTop: 20
    },
    Options1: {
        fontSize: 25,
        textAlign: "center",
        color: "white"
    },
    backBtn: {
        fontSize: 30,
        marginTop: 10,
        marginLeft: 10
    },
    shirtTitle: {
        fontSize: 25,
        color: "white",
        letterSpacing: 1.5,
        textAlign: "center",
    },
    shirtTitle2: {
        fontSize: 20,
        color: "white",
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
    leftViewStrapper: {
        width: "53.4%",
        height: 16,
        borderRadius: 15,
        backgroundColor: "#001e2d",
        flexDirection: "row",
        alignItems: "center",
    },
    strapperView: {
        alignItems: "center",
        zIndex: 2,
        left: "52%",
        position: "absolute",
        justifyContent: "center",
        backgroundColor: "#001e2d",
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#007db8"
    },
    rightViewStrapper: {
        width: "26.6%",
        height: 16,
        borderRadius: 10,
        backgroundColor: "#b7bbbf",
        justifyContent: "center"
    },
    btns: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 25,
        width: 140
    }
});
export default MonogramSelection;
