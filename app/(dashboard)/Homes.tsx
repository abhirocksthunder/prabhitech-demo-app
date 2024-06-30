import Advertisement from '@/components/Advertisements';
import NearbyProperties from '@/components/NearbyProperties';
import PropertyServices from '@/components/PropertyServices';
import Testimonials from '@/components/Testimonials';
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';


const Homes: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <Advertisement />
            <NearbyProperties />
            <PropertyServices />
            <Testimonials />
        </ScrollView>
    );
};

export default Homes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});