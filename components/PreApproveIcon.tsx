import { Icon } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import ApprovalModal from "./ApprovalModal";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Audio } from "expo-av";

const PreApproveIcon = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [sound, setSound] = useState<Audio.Sound | null>(null);

    const playSound = async () => {
        // Load the sound file
        const { sound } = await Audio.Sound.createAsync(
            require('@/assets/sounds/ring-ring.mp3')
        );
        setSound(sound);
        // Play the sound
        await sound.playAsync();
    };

    const stopSound = async () => {
        // Load the sound file
        const { sound } = await Audio.Sound.createAsync(
            require('@/assets/sounds/ring-ring.mp3')
        );
        setSound(sound);
        // Play the sound
        await sound.unloadAsync();
    };
    useEffect(() => {
        return sound
            ? () => {
                // Clean up the sound when component unmounts
                sound.unloadAsync();
            }
            : undefined;
    }, [sound])

    const handleApprove = () => {
        setModalVisible(false);
        stopSound();
        // Handle the approve action
        console.log('Visitor Approved');
    };

    const handleDeny = () => {
        setModalVisible(false);
        stopSound();
        // Handle the deny action
        console.log('Visitor Denied');
    };

    const handleLeaveAtGate = () => {
        setModalVisible(false);
        stopSound();
        // Handle the leave at gate action
        console.log('Leave at Gate');
    };
    return (
        <View style={styles.container}>
            <ApprovalModal
                isVisible={isModalVisible}
                onClose={() => { setModalVisible(false); stopSound(); }}
                onApprove={handleApprove}
                onDeny={handleDeny}
                onLeaveAtGate={handleLeaveAtGate}
            />
            {/* Person Icon */}
            <TouchableWithoutFeedback onPress={() => { setModalVisible(true); playSound(); }}>
                <Icon
                    // source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/person-male.png' }}
                    name="person"
                    size={30}
                    style={styles.personIcon}
                    type="octicons"
                    color="#555"

                />
            </TouchableWithoutFeedback>
            {/* Plus Icon */}
            <View style={styles.plusIconContainer}>
                <Icon name="plus" type="font-awesome" size={10} color="white" />
            </View>
            {/* Pre-Approve Text */}
            <Text style={styles.preApproveText}>Pre-Approve</Text>
        </View>
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

export default PreApproveIcon;