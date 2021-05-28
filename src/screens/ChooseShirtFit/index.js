import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Actions } from 'react-native-router-flux';
const ChooseShirtFit = () => {
    const [length, setlength] = useState(true)
    const [length1, setlength1] = useState(false)
    const [length2, setlength2] = useState(false)
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 2 }}>
                <ImageBackground source={require("../../assets/drawable-xxxhdpi/header.png")}
                    resizeMode="cover"
                    style={{ height: "100%", width: "100%", }}
                >
                    <View style={{ flex: 4, }}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Ionicons name="chevron-back" style={styles.backBtn} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 6 }}>
                        <Text style={styles.Options}>Choose Shirt Fit</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ backgroundColor: "#001e2d", flex: 7 }}>
                <View style={{ flex: 7.5, justifyContent: "space-evenly" }}>
                    {length &&
                        <>
                            <Image style={{ height: "50%", width: "100%" }}
                                resizeMode="contain"
                                source={require("../../assets/drawable-xxxhdpi/s.png")}></Image>
                            <View>
                                <Text style={styles.shirtTitle}>Normal</Text>
                                <Text style={styles.shirtTitle2}>Perfect for everyday use </Text>
                            </View>
                        </>
                    }
                    {length1 &&
                        <>
                            <Image style={{ height: "50%", width: "100%" }}
                                resizeMode="contain"
                                source={require("../../assets/drawable-xxxhdpi/s.png")}></Image>
                            <View>
                                <Text style={styles.shirtTitle}>Skinny </Text>
                                <Text style={styles.shirtTitle2}>Perfect for everyday use </Text>
                            </View>
                        </>
                    }
                    {length2 &&
                        <>
                            <Image style={{ height: "50%", width: "100%" }}
                                resizeMode="contain"
                                source={require("../../assets/drawable-xxxhdpi/s.png")}></Image>
                            <View>
                                <Text style={styles.shirtTitle}>Loose</Text>
                                <Text style={styles.shirtTitle2}>Perfect for everyday use </Text>
                            </View>
                        </>
                    }
                </View>
                <View style={{ flex: 2.5, backgroundColor: "#20475c" }}>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setlength(true)
                                    setlength1(false)
                                    setlength2(false)
                                }
                                }
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: length ? "#007db8" : "#2c4d54" }]}>
                                <Image
                                    resizeMode="contain"
                                    style={{ height: "80%", width: "80%" }}
                                    source={require("../../assets/drawable-xxxhdpi/s.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setlength(false)
                                    setlength1(true)
                                    setlength2(false)
                                }}
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: length1 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "80%", width: "80%" }}
                                    resizeMode="contain"
                                    source={require("../../assets/drawable-xxxhdpi/s.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setlength(false)
                                    setlength1(false)
                                    setlength2(true)
                                }
                                }
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: length2 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "85%", width: "85%" }}
                                    resizeMode="contain"
                                    source={require("../../assets/drawable-xxxhdpi/s.png")}></Image>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={styles.nextBtnView}>
                    <TouchableOpacity
                        onPress={() => Actions.FasionReady()}
                        style={styles.nextBtn}>
                        <Text style={{ fontSize: 25, color: "white" }}>Done </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
};
const styles = StyleSheet.create({
    shirtTitle2: {
        fontSize: 20,
        color: "white",
        letterSpacing: 1.5,
        textAlign: "center",
    },
    Options: {
        fontSize: 32,
        letterSpacing: 1.5,
        textAlign: "center",
    },
    backBtn: {
        fontSize: 30,
        marginTop: 10,
        marginLeft: 10
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
    fabric: {
        height: "80%",
        width: 100,
        marginLeft: 20,
        borderRadius: 20,
    },
    shirtTitle: {
        fontSize: 25,
        color: "white",
        letterSpacing: 1.5,
        textAlign: "center",
    },
});
export default ChooseShirtFit;
