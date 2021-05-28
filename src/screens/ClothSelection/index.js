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
import Ionicons from "react-native-vector-icons/Ionicons"
import { Actions } from 'react-native-router-flux';
const ClothSelection = () => {
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
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Ionicons name="chevron-back" style={styles.backBtn} />
                    </TouchableOpacity>
                    <Text style={styles.Options}>Choose One Options.</Text>
                </ImageBackground>
            </View>
            <View style={{ backgroundColor: "#001e2d", flex: 7 }}>
                <View style={{ flex: 7.5, justifyContent: "space-evenly" }}>
                    {length &&
                        <Image style={{ height: "75%", width: "100%" }}
                            resizeMode="contain"
                            source={require("../../assets/drawable-xxxhdpi/s.png")}></Image>
                    }
                    {length1 &&
                        <Image style={{ height: "75%", width: "100%" }}
                            resizeMode="contain"
                            source={require("../../assets/drawable-xxxhdpi/s3.png")}></Image>
                    }
                    {length2 &&
                        <Image style={{ height: "75%", width: "100%" }}
                            resizeMode="contain"
                            source={require("../../assets/drawable-xxxhdpi/s4.png")}></Image>
                    }
                    {length3 &&
                        <Image style={{ height: "75%", width: "100%" }}
                            resizeMode="contain"
                            source={require("../../assets/drawable-xxxhdpi/s5.png")}></Image>
                    }
                    <Text style={styles.shirtTitle}>Formal Shirt</Text>
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
                                <Image style={{ height: "80%", width: "80%" }}
                                    resizeMode="contain"
                                    source={require("../../assets/drawable-xxxhdpi/s.png")}></Image>
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
                                    source={require("../../assets/drawable-xxxhdpi/s3.png")}></Image>
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
                                    source={require("../../assets/drawable-xxxhdpi/s4.png")}></Image>
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
                                    source={require("../../assets/drawable-xxxhdpi/s5.png")}></Image>
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
                        onPress={() => Actions.CollarSelection()}
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
        marginTop:"5%"
    },
    shirtTitle: {
        fontSize: 25,
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
        height: "80%",
        width: 100,
        marginLeft: 20,
        borderRadius: 20,
    },
    backBtn: {
        fontSize: 30, 
        marginTop: 10,
        marginLeft: 10
    },
});
export default ClothSelection;
