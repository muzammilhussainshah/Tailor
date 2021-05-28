import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { Actions } from 'react-native-router-flux';
import Ionicons from "react-native-vector-icons/Ionicons"
const CollarSelection = () => {
    const [length, setlength] = useState(true)
    const [length1, setlength1] = useState(false)
    const [length2, setlength2] = useState(false)
    const [length3, setlength3] = useState(false)
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
                        <Text style={styles.Options}>Choose Collar Style</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <View style={styles.leftViewStrapper}></View>
                            <View style={styles.strapperView}>
                                <Text style={{ color: "white", }}>1</Text>
                            </View>
                            <View style={styles.rightViewStrapper}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "white", marginLeft: "26.3%", }}>2</Text>
                                    <Text style={{ color: "white", marginLeft: "13.3%", }}>3</Text>
                                    <Text style={{ color: "white", marginLeft: "13.3%", }}>4</Text>
                                    <Text style={{ color: "white", marginLeft: "13.3%", }}>5</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ backgroundColor: "#001e2d", flex: 7 }}>
                <View style={{ flex: 7.5, justifyContent: "space-evenly" }}>
                    {length &&
                        <Image style={{ height: "50%", width: "100%" }}
                            resizeMode="contain"
                            source={require("../../assets/drawable-xxxhdpi/clr3.png")}></Image>
                    }
                    {length1 &&
                        <Image style={{ height: "50%", width: "100%" }}
                            resizeMode="contain"
                            source={require("../../assets/drawable-xxxhdpi/clr1.png")}></Image>
                    }
                    {length2 &&
                        <Image style={{ height: "50%", width: "100%" }}
                            resizeMode="contain"
                            source={require("../../assets/drawable-xxxhdpi/clr2.png")}></Image>
                    }
                    {length3 &&
                        <Image style={{ height: "50%", width: "100%" }}
                            resizeMode="contain"
                            source={require("../../assets/drawable-xxxhdpi/clr3.png")}></Image>
                    }
                    <View>
                        <Text style={styles.shirtTitle}>Formal Shirt</Text>
                        <Text style={styles.shirtTitle2}>Great for everyday used. Can be contrasted with ties. </Text>
                    </View>
                </View>
                <View style={{ flex: 2.5, backgroundColor: "#20475c" }}>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setlength(true)
                                    setlength1(false)
                                    setlength2(false)
                                    setlength3(false)
                                }
                                }
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: length ? "#007db8" : "#2c4d54" }]}>
                                <Image
                                    resizeMode="contain"
                                    style={{ height: "80%", width: "80%" }}
                                    source={require("../../assets/drawable-xxxhdpi/clr3.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setlength(false)
                                    setlength1(true)
                                    setlength2(false)
                                    setlength3(false)
                                }}
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: length1 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "80%", width: "80%" }}
                                    resizeMode="contain"
                                    source={require("../../assets/drawable-xxxhdpi/clr1.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setlength(false)
                                    setlength1(false)
                                    setlength2(true)
                                    setlength3(false)
                                }
                                }
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: length2 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "85%", width: "85%" }}
                                    resizeMode="contain"
                                    source={require("../../assets/drawable-xxxhdpi/clr2.png")}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    setlength(false)
                                    setlength1(false)
                                    setlength2(false)
                                    setlength3(true)
                                }
                                }
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: length3 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "85%", width: "85%" }}
                                    resizeMode="contain"
                                    source={require("../../assets/drawable-xxxhdpi/clr4.png")}></Image>
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
                        onPress={() => Actions.CuffSelection()}
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
    fabric: {
        height: "75%",
        width: 90,
        marginLeft: 20,
        borderRadius: 20,
    },
    leftViewStrapper: {
        width: "13.3%",
        height: 16,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: "#001e2d",
        justifyContent: "center"
    },
    strapperView: {
        alignItems: "center",
        zIndex: 2,
        left: "13%",
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
        width: "66.7%",
        height: 16,
        borderRadius: 10,
        backgroundColor: "#b7bbbf",
        justifyContent: "center"
    }
});
export default CollarSelection;
