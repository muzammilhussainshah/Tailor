import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import React, {
    useState
} from 'react';
const CustomizeScreen = () => {
    const [fabSelected, setFabselected] = useState(false)
    const [fab1Selected, setFab1selected] = useState(false)
    const [fab2Selected, setFab2selected] = useState(false)
    const [fab3Selected, setFab3selected] = useState(false)
    const [coller, setcoller] = useState(false)
    const [coller1, setcoller1] = useState(false)
    const [coller2, setcoller2] = useState(false)
    const [coller3, setcoller3] = useState(false)
    const [cuff, setcuff] = useState(false)
    const [cuff1, setcuff1] = useState(false)
    const [cuff2, setcuff2] = useState(false)
    const [cuff3, setcuff3] = useState(false)
    const [length, setlength] = useState(false)
    const [length1, setlength1] = useState(false)
    const [length2, setlength2] = useState(false)
    return (
        <ImageBackground
            source={require('../../assets/drawable-xxxhdpi/customizeBgImg.png')}
            resizeMode="stretch"
            style={{ height: '100%', width: "100%" }}>
            <View style={{ flex: 2.2, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={styles.headerCustomize}>Customize</Text>
                    <TouchableOpacity
                        onPress={() => Actions.WalkThrough()}
                    >
                        <Text style={{ color: "white", fontSize: 20, marginRight: 15 }}>Done</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.Options}>Choose from hundreds of</Text>
                <Text style={styles.Options1}>options.</Text>
            </View>
            <View style={{ flex: 1.95, }}>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 29, marginHorizontal: 15, color: "white" }}>Fabric</Text>
                </View>
                <View style={{ flex: 7, }}>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setFabselected(true)
                                    setFab1selected(false)
                                    setFab2selected(false)
                                    setFab3selected(false)
                                }
                                }
                                style={[styles.fabric]}>
                                <Image style={{ height: "100%", width: "100%", borderRadius: 20, borderWidth: fabSelected ? 5 : 0, borderColor: fabSelected ? "#007db8" : "none" }}
                                    source={require("../../assets/drawable-xxxhdpi/f1.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setFabselected(false)
                                    setFab1selected(true)
                                    setFab2selected(false)
                                    setFab3selected(false)
                                }}
                                style={[styles.fabric]}>
                                <Image style={{ height: "100%", width: "100%", borderRadius: 20, borderWidth: fab1Selected ? 5 : 0, borderColor: fab1Selected ? "#007db8" : "none" }}
                                    source={require("../../assets/drawable-xxxhdpi/f2.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setFabselected(false)
                                    setFab1selected(false)
                                    setFab2selected(true)
                                    setFab3selected(false)
                                }
                                }
                                style={[styles.fabric]}>
                                <Image style={{ height: "100%", width: "100%", borderRadius: 20, borderWidth: fab2Selected ? 5 : 0, borderColor: fab2Selected ? "#007db8" : "none" }}
                                    source={require("../../assets/drawable-xxxhdpi/f5.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setFabselected(false)
                                    setFab1selected(false)
                                    setFab2selected(false)
                                    setFab3selected(true)

                                }}
                                style={[styles.fabric]}>
                                <Image style={{ height: "100%", width: "100%", borderRadius: 20, borderWidth: fab3Selected ? 5 : 0, borderColor: fab3Selected ? "#007db8" : "none" }}
                                    source={require("../../assets/drawable-xxxhdpi/f4.png")}></Image>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={{ flex: 1.95, }}>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 29, marginHorizontal: 15, color: "white" }}>Collar</Text>
                </View>
                <View style={{ flex: 7, }}>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setcoller(true)
                                    setcoller1(false)
                                    setcoller2(false)
                                    setcoller3(false)
                                }
                                }
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: coller ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/clr5.png")}
                                    resizeMode="contain"></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setcoller(false)
                                    setcoller1(true)
                                    setcoller2(false)
                                    setcoller3(false)
                                }}
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: coller1 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/clr1.png")}
                                    resizeMode="contain"></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setcoller(false)
                                    setcoller1(false)
                                    setcoller2(true)
                                    setcoller3(false)
                                }
                                }
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: coller2 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/clr2.png")}
                                    resizeMode="contain"></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setcoller(false)
                                    setcoller1(false)
                                    setcoller2(false)
                                    setcoller3(true)

                                }}
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: coller3 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/clr4.png")}
                                    resizeMode="contain"></Image>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={{ flex: 1.95, }}>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 29, marginHorizontal: 15, color: "white" }}>Cuff</Text>
                </View>
                <View style={{ flex: 7, }}>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setcuff(true)
                                    setcuff1(false)
                                    setcuff2(false)
                                    setcuff3(false)
                                }
                                }
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: cuff ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/e.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setcuff(false)
                                    setcuff1(true)
                                    setcuff2(false)
                                    setcuff3(false)
                                }}
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: cuff1 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/f.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setcuff(false)
                                    setcuff1(false)
                                    setcuff2(true)
                                    setcuff3(false)

                                }
                                }
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: cuff2 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/c.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setcuff(false)
                                    setcuff1(false)
                                    setcuff2(false)
                                    setcuff3(true)


                                }}
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: cuff3 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/d.png")}></Image>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={{ flex: 1.95, }}>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 29, marginHorizontal: 15, color: "white" }}>Length</Text>
                </View>
                <View style={{ flex: 7, }}>
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
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/l1.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setlength(false)
                                    setlength1(true)
                                    setlength2(false)
                                }}
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: length1 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/l2.png")}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setlength(false)
                                    setlength1(false)
                                    setlength2(true)
                                }
                                }
                                style={[styles.fabric, { justifyContent: "center", alignItems: "center", backgroundColor: length2 ? "#007db8" : "#2c4d54" }]}>
                                <Image style={{ height: "70%", width: "70%" }}
                                    source={require("../../assets/drawable-xxxhdpi/l3.png")}></Image>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ImageBackground >
    )
};
const styles = StyleSheet.create({
    headerCustomize: {
        fontSize: 33,
        marginVertical: 10,
        marginHorizontal: 15,
        color: "white"
    },
    Options: {
        fontSize: 25,
        textAlign: "center",
        color: "white",
        width: "100%",
    },
    Options1: {
        fontSize: 25,
        textAlign: "center",
        color: "white"
    },
    fabric: {
        height: "90%",
        width: 90,
        marginLeft: 20,
        borderRadius: 20,
    }
});
export default CustomizeScreen;
