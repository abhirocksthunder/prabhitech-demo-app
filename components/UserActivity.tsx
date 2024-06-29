// UserCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from '@rneui/base';

type UserCardProps = {
    imageUrl: string;
    name: string;
    rating: number;
    status: string;
    time: string;
    userType: string;
    entryCount: number;
    date: string;
    onCallPress: () => void;
    onRateNowPress: () => void;
    onAttendancePress: () => void;
};

const UserActivity: React.FC<UserCardProps> = ({
    imageUrl,
    name,
    rating,
    status,
    time,
    userType,
    entryCount,
    date,
    onCallPress,
    onRateNowPress,
    onAttendancePress,
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <View style={styles.headerText}>
                    <View style={styles.nameRating}>
                        <Text style={styles.name}>{name}</Text>
                        <View style={styles.rating}>
                            {[...Array(5)].map((_, index) => (
                                <FontAwesome
                                    key={index}
                                    name={index < rating ? 'star' : 'star-o'}
                                    size={16}
                                    color="gold"
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.nameRating}>
                        <Text style={[styles.status, { backgroundColor: status === 'Left' ? '#CCC' : status === 'Society' ? 'orange' : status === 'Denied' ? 'pink' : 'green' }]}>{status}</Text>
                        <Text style={styles.timeType}>{`${time} • ${userType}`}</Text>
                    </View>
                </View>

            </View>
            <Text style={styles.entryCount}>Entered: {entryCount} times</Text>
            <View style={styles.footer}>
                <TouchableOpacity style={[styles.call, { borderLeftWidth: 0 }]} onPress={onCallPress} activeOpacity={1}>
                    <Icon name="telephone" type="foundation" color='green' style={{ paddingLeft: 20, }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.call} onPress={onRateNowPress} activeOpacity={1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome
                            name={'star-o'}
                            size={18}
                            color="#CCC"
                        /><Text style={[styles.buttonText, { marginLeft: 5 }]}>
                            Rate Now</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.call, { borderRightWidth: 0 }]} onPress={onAttendancePress} activeOpacity={1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome
                            name={'calendar'}
                            size={18}
                            color="#555"
                        /><Text style={[styles.buttonText, { marginLeft: 5 }]}>
                            Attendance</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        // padding: 16,
        marginVertical: 10,
        // marginHorizontal: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        padding: 16
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    headerText: {
        flex: 1,
    },
    nameRating: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    rating: {
        flexDirection: 'row',
        marginLeft: 10
    },
    status: {
        fontSize: 14,
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        backgroundColor: 'gray',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeType: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 10
    },
    entryCount: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
        paddingHorizontal: 16
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        borderRadius: 10
    },
    button: {
        flex: 1,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    call: {
        padding: 10,
        alignItems: 'center',
        // paddingHorizontal: 10,
        borderLeftWidth: 1,
        borderLeftColor: '#DDD',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default UserActivity;
