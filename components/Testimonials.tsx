// components/Testimonials.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const testimonials = [
    { id: '1', content: 'Great service and amazing properties!', author: 'John Doe' },
    { id: '2', content: 'I found my dream home thanks to this app.', author: 'Jane Smith' },
    // Add more testimonials
];

const TestimonialCard: React.FC<{ content: string, author: string }> = ({ content, author }) => (
    <View style={styles.testimonialCard}>
        <Text style={styles.testimonialContent}>"{content}"</Text>
        <Text style={styles.testimonialAuthor}>- {author}</Text>
    </View>
);

const Testimonials: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Testimonials</Text>
            <FlatList
                data={testimonials}
                renderItem={({ item }) => (
                    <TestimonialCard
                        content={item.content}
                        author={item.author}
                    />
                )}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default Testimonials;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    testimonialCard: {
        width: 250,
        marginRight: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    testimonialContent: {
        fontSize: 14,
        fontStyle: 'italic',
    },
    testimonialAuthor: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
    },
});
