// components/NearbyProperties.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const properties = [
    { id: '1', title: 'Cozy Apartment', location: 'Bangalore', price: '32000/month', image: 'https://fmcreworld.com/wp-content/uploads/2023/09/bengaluru-real-estate.jpg' },
    { id: '2', title: 'Modern Condo', location: 'Hyderabad', price: '25000/month', image: 'https://i.ytimg.com/vi/oKwbiRBbgfU/mqdefault.jpg' },
    { id: '3', title: 'Cozy Apartment', location: 'Vijayawada', price: '12000/month', image: 'https://fmcreworld.com/wp-content/uploads/2023/09/bengaluru-real-estate.jpg' },
    { id: '4', title: 'Modern Condo', location: 'Rajahmundry', price: '12500/month', image: 'https://i.ytimg.com/vi/oKwbiRBbgfU/mqdefault.jpg' },
    // Add more property objects
];

const PropertyCard: React.FC<{ title: string, location: string, price: string, image: string }> = ({ title, location, price, image }) => (
    <View style={styles.propertyCard}>
        <Image source={{ uri: image }} style={styles.propertyImage} />
        <Text style={styles.propertyTitle}>{title}</Text>
        <Text style={styles.propertyLocation}>{location}</Text>
        <Text style={styles.propertyPrice}>{price}</Text>
    </View>
);

const NearbyProperties: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nearby Properties</Text>
            <FlatList
                data={properties}
                renderItem={({ item }) => (
                    <PropertyCard
                        title={item.title}
                        location={item.location}
                        price={item.price}
                        image={item.image}
                    />
                )}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default NearbyProperties;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    propertyCard: {
        width: Dimensions.get('window').width / 2 - 20,
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    propertyImage: {
        width: '100%',
        height: 100,
    },
    propertyTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5,
    },
    propertyLocation: {
        fontSize: 14,
        color: 'gray',
        paddingLeft: 5,
        paddingBottom: 5,
    },
    propertyPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingBottom: 5,
    },
});
