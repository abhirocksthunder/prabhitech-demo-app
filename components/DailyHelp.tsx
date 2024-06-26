import { Icon } from "@rneui/base";
import { router } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const DailyHelpIcon = () => {
    return (
        <TouchableWithoutFeedback onPress={() => router.push("/AddDailyHelp")}><View style={styles.container}>
            {/* Person Icon */}

            <Icon
                // source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/person-male.png' }}
                name="person-3"
                size={30}
                style={styles.personIcon}
                type="material-icon"
                color="#555"
            />

            {/* Plus Icon */}
            <View style={styles.plusIconContainer}>
                <Icon name="plus" type="font-awesome" size={10} color="white" />
            </View>
            {/* Pre-Approve Text */}
            <Text style={styles.preApproveText}>Daily Help</Text>
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        // width: 80,
        // height: 80,
        alignItems: "center",
        justifyContent: "center",
        // margin: 10,
        marginRight: 5,
    },
    personIcon: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 120,
        backgroundColor: "#ccc",
        padding: 4,
    },
    plusIconContainer: {
        position: "absolute",
        top: 0,
        right: 5,
        backgroundColor: "#555",
        borderRadius: 12,
        width: 14,
        height: 14,
        alignItems: "center",
        justifyContent: "center",
    },
    plusIcon: {
        fontSize: 15,
    },
    preApproveText: {
        marginTop: 5,
        fontSize: 10,
        color: "#222",
        fontWeight: "bold",
    },
});

export default DailyHelpIcon;