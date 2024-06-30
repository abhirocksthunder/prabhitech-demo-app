// components/Advertisement.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Advertisement: React.FC = () => {
    return (
        <View style={styles.adContainer}>
            <Image
                source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-banner-advertising-design-template-aebf779d2afa43bdb051accd03d708de_screen.jpg' }} // Replace with actual ad image URL
                style={styles.adImage}
            />
        </View>
    );
};

export default Advertisement;

const styles = StyleSheet.create({
    adContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    adImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    adText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
