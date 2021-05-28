import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Picker
} from 'react-native'; 
import Ionicons from "react-native-vector-icons/Ionicons"
import React, { useState } from 'react';
import { Actions } from 'react-native-router-flux';
const AdditionalScreen = () => {
    const [selectedValue, setSelectedValue] = useState("Pocket");
    const [selectedBtn, setselectedBtn] = useState("black");
    const [selectedWatch, setselectedWatch] = useState("No Watch");
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
                        <Text style={styles.Options}>Additonal Options</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <View style={styles.leftViewStrapper}>
                                <Text style={{ color: "white", marginLeft: "17.8%", }}>1</Text>
                                <Text style={{ color: "white", marginLeft: "17.8%", }}>2</Text>
                                <Text style={{ color: "white", marginLeft: "17.8%", }}>3</Text>
                                <Text style={{ color: "white", marginLeft: "17.8%", }}>4</Text>
                            </View>
                            <View style={styles.strapperView}>
                                <Text style={{ color: "white", }}>5</Text>
                            </View>
                            <View style={styles.rightViewStrapper}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ backgroundColor: "#001e2d", flex: 7 }}>
                <View style={{ flex: 2, justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={styles.Options2}>Do you want a pocket? </Text>
                    <View style={{ justifyContent: "center", alignItems: "center", height: 40, width: "80%", backgroundColor: "white", borderRadius: 20 }}>
                        <Picker
                            note
                            mode="dropdown"
                            style={{  width: "90%", }}
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} 
                        >
                            <Picker.Item label="Pocket" value="Pocket" />
                            <Picker.Item label="No Pocket" value="No Pocket" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flex: 2, alignItems: "center" }}>
                    <Text style={styles.Options2}>Select your button color </Text>
                    <View style={{ justifyContent: "center", alignItems: "center", height: 40, width: "80%", backgroundColor: "white", borderRadius: 20 }}>
                        <Picker
                            mode="dropdown"
                            selectedValue={selectedBtn}
                            style={{ height: 50, width: "90%", }}
                            fontSize={25}
                            onValueChange={(itemValue, itemIndex) => setselectedBtn(itemValue)}
                        >
                            <Picker.Item
                                label="black" value="black" />
                            <Picker.Item
                                label="White" value="White" />
                            <Picker.Item
                                label="brown" value="brown" />
                            <Picker.Item
                                label="blue" value="blue" />
                        </Picker>

                    </View>
                </View>
                <View style={{ flex: 2, alignItems: "center" }}>
                    <Text style={styles.Options4}>Where do you wear your watch? </Text>
                    <View style={{ justifyContent: "center", alignItems: "center", height: 40, width: "80%", backgroundColor: "white", borderRadius: 20 }}>
                        <Picker
                            mode="dropdown"
                            selectedValue={selectedWatch}
                            style={{ height: 50, width: "90%", }}
                            fontSize={25}
                            onValueChange={(itemValue, itemIndex) => setselectedWatch(itemValue)}
                        >
                            <Picker.Item
                                label="No Watch" value="No Watch " />
                            <Picker.Item
                                label="Right wrist" value="Right wrist" />
                            <Picker.Item
                                label="Left wrist" value="Left wrist" />
                        </Picker>

                    </View>
                </View>
                <View style={{ flex: 2 }}>

                    <Text style={styles.Options3}>Do you want a contrasting white </Text>
                    <Text style={styles.Options1}>collar?</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        <TouchableOpacity
                            onPress={() => setisSelected(true)}
                            style={[styles.btns, { backgroundColor: isSelected ? "white" : "black", borderWidth: !isSelected ? 2 : 0, borderColor: !isSelected ? "white" : "black" }]}>
                            <Text style={{ fontSize: 20, color: isSelected ? "black" : "white", }}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setisSelected(false)}
                            style={[styles.btns, { backgroundColor: !isSelected ? "white" : "black", borderWidth: isSelected ? 2 : 0, borderColor: isSelected ? "white" : "black" }]}>
                            <Text style={{ fontSize: 20, color: !isSelected ? "black" : "white", }}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={styles.nextBtnView}>
                    <TouchableOpacity
                        onPress={() => Actions.ChooseShirtFit()}
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
        fontSize: 20,
        textAlign: "center",
        color: "white",
        width: "100%",
        marginVertical: 15
    },
    Options4: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        width: "100%",
        marginBottom: 20
    },
    Options3: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        width: "100%",
    },
    Options1: {
        fontSize: 20,
        textAlign: "center",
        color: "white"
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
    leftViewStrapper: {
        width: "66.7%",
        height: 16,
        borderRadius: 15,
        backgroundColor: "#001e2d",
        flexDirection: "row",
        alignItems: "center",
    },
    strapperView: {
        alignItems: "center",
        zIndex: 2,
        left: "64%",
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
        width: "13.3%",
        height: 16,
        borderRadius: 10,
        backgroundColor: "#b7bbbf",
        justifyContent: "center"
    },
    btns: {
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        marginTop: 10,
        borderRadius: 25,
        width: 120
    },
});
export default AdditionalScreen;
