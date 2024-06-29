import { Icon, Image } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Audio } from 'expo-av';

const ApprovalModal = ({ isVisible, onClose, onApprove, onDeny, onLeaveAtGate }: any) => {

    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={{ backgroundColor: '#673AB7', borderRadius: 50, borderWidth: 2, borderColor: "#FFF", width: 60, height: 60, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: -30, left: '48%' }}>
                    {/* <Icon  name='person' type="ionicon" size={40} color={"#FFF"} /> */}
                    <Image
                        source={{
                            uri: "https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
                        }}
                        style={styles.photo}
                    />
                </View>

                <Text style={styles.title}>Visitor Approval</Text>
                <Text style={styles.message}>A visitor is requesting access. What would you like to do?</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={onApprove}>
                        <Icon name='done' type="materialicon" size={40} color={"#FFF"} style={{ paddingTop: 10 }} />
                        <Text style={styles.buttonText}>Approve</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.leaveAtGateButton]} onPress={onLeaveAtGate}>
                        <Icon name='box-open' type="font-awesome-5" size={30} color={"#FFF"} style={{ paddingTop: 14 }} />
                        <Text style={styles.buttonText}>Leave at Gate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.denyButton]} onPress={onDeny}>

                        <Icon name='cross' type="entypo" size={40} color={"#FFF"} style={{ paddingTop: 10 }} />
                        <Text style={styles.buttonText}>Deny</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingTop: 20
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        // marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        // borderRadius: 5,
        // backgroundColor: '#28a745',

        backgroundColor: '#28a745',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#FFF",
        width: 60,
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 5,
        top: 45,
    },
    denyButton: {
        backgroundColor: '#dc3545',
    },
    leaveAtGateButton: {
        backgroundColor: '#ffc107',
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        position: 'relative',
        top: 15,
        textAlign: 'center'
    },
    photo: {
        width: 50,
        height: 50,
        // marginRight: 10,
        borderRadius: 50,
        resizeMode: "center",
    },
});

export default ApprovalModal;