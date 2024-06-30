// components/PropertyServices.tsx
import { Icon } from '@rneui/base';
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const services = [
    { id: '1', name: 'Cleaning', icon: 'cleaning-services' },
    { id: '2', name: 'Repair', icon: 'build' },
    { id: '3', name: 'Security', icon: 'security' },
    { id: '4', name: 'Wifi', icon: 'wifi' },
    { id: '5', name: 'Parking', icon: 'local-parking' },
    { id: '6', name: 'Gym', icon: 'fitness-center' },
    { id: '7', name: 'Swimming Pool', icon: 'pool' },
];

const ServiceCard: React.FC<{ name: string, icon: string }> = ({ name, icon }) => (
    <View style={styles.serviceCard}>
        <Icon name={icon} size={30} />
        <Text style={styles.serviceText}>{name}</Text>
    </View>
);

const PropertyServices: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Property Services</Text>
            <FlatList
                data={services}
                renderItem={({ item }) => (
                    <ServiceCard
                        name={item.name}
                        icon={item.icon}
                    />
                )}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default PropertyServices;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    serviceCard: {
        width: 80,
        marginRight: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    serviceText: {
        fontSize: 14,
        marginTop: 5,
    },
});
