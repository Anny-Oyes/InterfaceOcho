import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { AntDesign, Ionicons, FontAwesome, FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


export default function Interface() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" />

            <ScrollView>
                <View style={styles.subContainer}>
                    <AntDesign name="arrowleft" style={styles.iconArrow} />
                    <Text style={styles.textNotifation}>Notification</Text>
                    <Ionicons name="ellipsis-horizontal-circle-outline" style={styles.iconEllipsi} />
                </View>


                <View style={styles.containerbar}>
                    <Text style={styles.textGeneral}>General</Text>
                    <Text style={styles.textApplications}>Applications</Text>
                </View>

                <View style={styles.RowOne}>
                    <View style={styles.containerBall}>
                        <FontAwesome5 name="basketball-ball" style={styles.iconBall} />
                    </View>

                    <View style={styles.containerText}>
                        <Text style={styles.textOne}>Product Management</Text>
                        <Text style={styles.textTwo}>Dribbble Inc.</Text>
                        <Text style={styles.textThree}>Application Sent</Text>
                    </View>

                    <View style={styles.iconArrow}>
                        <AntDesign name="right" style={styles.iconRight} />
                    </View>
                </View>

                <View style={styles.RowTwo}>

                    <View style={styles.containerDiamond}>
                        <FontAwesome name="diamond" style={styles.iconDiamond} />
                    </View>

                    <View style={styles.containerTextTwo}>
                        <Text style={styles.textOneUX}>UX Designer & Developer</Text>
                        <Text style={styles.textTwoUX}>Sketch</Text>
                        <Text style={styles.textThreeUX}>Application Accepted</Text>
                    </View>

                    <View>
                        <AntDesign name="right" style={styles.iconRight} />
                    </View>
                </View>

                <View style={styles.RowThree}>

                    <View style={styles.containerQuality}>
                        <FontAwesome5 name="airbnb" style={styles.iconQuality} />
                    </View>

                    <View style={styles.containerTextThree}>
                        <Text style={styles.textOneQ}>Quality Assurance</Text>
                        <Text style={styles.textTwoQ}>AirBNB</Text>
                        <Text style={styles.textThreeQ}>Application Rejected</Text>
                    </View>

                    <View>
                        <AntDesign name="right" style={styles.iconRight} />
                    </View>
                </View>

                <View style={styles.RowFour}>

                    <View style={styles.containerTwitter}>
                        <Entypo name="twitter" style={styles.iconTwitter} />
                    </View>

                    <View style={styles.containerTextFour}>
                        <Text style={styles.textOneSoft}>Software Engineer</Text>
                        <Text style={styles.textTwoSoft}>Twitte Inc.</Text>
                        <Text style={styles.textThreeSoft}>Application Pending</Text>
                    </View>

                    <View>
                        <AntDesign name="right" style={styles.iconRight} />
                    </View>
                </View>

                <View style={styles.RowFive}>

                    <View style={styles.containerWechat}>
                        <FontAwesome name="wechat" style={styles.iconWechat} />
                    </View>

                    <View style={styles.containerTextFive}>
                        <Text style={styles.textOneNet}>Network Administrator</Text>
                        <Text style={styles.textTwoNet}>weChat</Text>
                        <Text style={styles.textThreeNet}>Application Sent</Text>
                    </View>

                    <View>
                        <AntDesign name="right" style={styles.iconRight} />
                    </View>
                </View>

                <View style={styles.RowSix}>

                    <View style={styles.containerSnapchat}>
                        <Fontisto name="snapchat" style={styles.iconSnapchat} />
                    </View>

                    <View style={styles.containerTextSix}>
                        <Text style={styles.textOneDev}>DevOps Enginner</Text>
                        <Text style={styles.textTwoDev}>Snapchat</Text>
                    </View>

                    <View>
                        <AntDesign name="right" style={styles.iconRight} />
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    subContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 30,
        marginVertical: 40,
        marginTop: 70,
    },

    textNotifation: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#212121",
    },

    iconArrow: {
        color: "black",
        marginLeft: -2,
        fontSize: 25,
    },

    iconEllipsi: {
        color: "black",
        fontSize: 25,
    },

    containerbar: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#9c9c9c",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 10,
        marginTop: -10,
    },

    textGeneral: {
        fontSize: 18,
        color: "#aaaaaa",
        marginHorizontal: 30,
        marginVertical: 20,
    },

    textApplications: {
        fontSize: 18,
        color: "#246bfd",
        marginHorizontal: 30,
        marginVertical: 20,
    },

    RowOne: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 10,
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#9c9c9c",
    },

    containerBall: {
        width: 65,
        height: 65,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#aaaaaa",

    },
    iconBall: {
        fontSize: 30,
        color: "#ea4c89",
        alignSelf: "center",
        marginTop: 15,
    },

    containerText: {
        flexDirection: "column",
        marginTop: -2,
        marginLeft: -40,
        marginVertical: 20,
    },

    textOne: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#212121",
    },

    textTwo: {
        marginTop: 10,
        fontSize: 15,
        color: "#9c9c9c",
    },

    textThree: {
        marginTop: 10,
        fontSize: 8,
        color: "#246bfd",
        backgroundColor: "#eef4ff",
        width: 85,
        height: 18,
        textAlign: "center",
        borderRadius: 3,
    },

    iconRight: {
        marginTop: 20,
        fontSize: 24,
        color: "#212121",
    },


    RowTwo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 10,
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#9c9c9c",
    },

    containerDiamond: {
        width: 65,
        height: 65,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#aaaaaa",
        marginTop: 2,

    },

    iconDiamond: {
        fontSize: 30,
        color: "#fdb71c",
        alignSelf: "center",
        marginTop: 18,
    },

    containerTextTwo: {
        flexDirection: "column",
        marginTop: -2,
        marginLeft: -10,
        marginVertical: 20,
    },


    textOneUX: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#212121",
    },

    textTwoUX: {
        marginTop: 10,
        fontSize: 15,
        color: "#9c9c9c",
    },

    textThreeUX: {
        marginTop: 10,
        fontSize: 8,
        color: "#31ca8a",
        backgroundColor: "#e9fbef",
        width: 105,
        height: 18,
        textAlign: "center",
        borderRadius: 3,
    },

    RowThree: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 10,
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#9c9c9c",
    },

    containerQuality: {
        width: 65,
        height: 65,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#aaaaaa",
        marginTop: 2,
    },

    iconQuality: {
        fontSize: 30,
        color: "#ea4c89",
        alignSelf: "center",
        marginTop: 15,
    },

    containerTextThree: {
        flexDirection: "column",
        marginTop: -2,
        marginLeft: -60,
        marginVertical: 20,
    },

    textOneQ: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#212121",
    },

    textTwoQ: {
        marginTop: 10,
        fontSize: 15,
        color: "#9c9c9c",
    },

    textThreeQ: {
        marginTop: 10,
        fontSize: 8,
        color: "#ea4c89",
        backgroundColor: "#feeaea",
        width: 105,
        height: 18,
        textAlign: "center",
        borderRadius: 3,
    },

    RowFour: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 10,
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#9c9c9c",
    },

    containerTwitter: {
        width: 65,
        height: 65,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#aaaaaa",
        marginTop: 2,

    },
    iconTwitter: {
        fontSize: 30,
        color: "#1d9bf0",
        alignSelf: "center",
        marginTop: 15,
    },

    containerTextFour: {
        flexDirection: "column",
        marginTop: -2,
        marginLeft: -60,
        marginVertical: 20,
    },

    textOneSoft: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#212121",
    },

    textTwoSoft: {
        marginTop: 10,
        fontSize: 15,
        color: "#9c9c9c",
    },

    textThreeSoft: {
        marginTop: 10,
        fontSize: 8,
        color: "#fbcc16",
        backgroundColor: "#fef8e3",
        width: 105,
        height: 18,
        textAlign: "center",
        borderRadius: 3,
    },

    RowFive: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 10,
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#9c9c9c",
    },

    containerWechat: {
        width: 65,
        height: 65,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#aaaaaa",
        marginTop: 2,
    },

    iconWechat: {
        fontSize: 30,
        color: "#05dc6d",
        alignSelf: "center",
        marginTop: 15,
    },

    containerTextFive: {
        flexDirection: "column",
        marginTop: -2,
        marginLeft: -20,
        marginVertical: 20,
    },

    textOneNet: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#212121",
    },

    textTwoNet: {
        marginTop: 10,
        fontSize: 15,
        color: "#9c9c9c",
    },

    textThreeNet: {
        marginTop: 10,
        fontSize: 8,
        color: "#246bfd",
        backgroundColor: "#eef4ff",
        width: 105,
        height: 18,
        textAlign: "center",
        borderRadius: 3,
    },

    RowSix: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 10,
        marginTop: 20,

    },

    containerSnapchat: {
        width: 65,
        height: 65,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#aaaaaa",
        marginTop: 2,
    },

    iconSnapchat: {
        fontSize: 30,
        color: "#fffc01",
        alignSelf: "center",
        marginTop: 15,
    },

    containerTextSix: {
        flexDirection: "column",
        marginTop: -2,
        marginLeft: -60,
        marginVertical: 20,
    },

    textOneDev: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#212121",
    },

    textTwoDev: {
        marginTop: 10,
        fontSize: 15,
        color: "#9c9c9c",
    },

});
