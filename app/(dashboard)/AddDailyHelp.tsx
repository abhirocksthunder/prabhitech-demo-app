import { Icon, ListItem } from '@rneui/base';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

interface Item {
    id: number;
    title: string;
    count: number;
}

const data: Item[] = [
    { id: 1, title: "Maid", count: 90 },
    { id: 2, title: "Cook", count: 20 },
    { id: 3, title: "Milkman", count: 15 },
    { id: 4, title: "Paperboy", count: 25 },
    { id: 5, title: "Car Cleaner", count: 35 },
    { id: 6, title: "Nanny", count: 52 },
    { id: 7, title: "Gym Instructor", count: 41 },
    { id: 8, title: "Laundry", count: 41 },
    { id: 9, title: "Full Time Nanny", count: 54 },
    { id: 10, title: "Gardener", count: 2 },
    { id: 11, title: "Security", count: 4 },
    { id: 12, title: "Trainers", count: 74 },
    { id: 13, title: "Helper", count: 41 },
    // Add more items as needed
    // Add more items as needed
];

const AddDailyHelp: React.FC = () => {
    const renderItem = ({ item }: { item: Item }) => (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <View style={styles.countContainer}>
                <ListItem.Subtitle style={styles.countText}>{item.count}</ListItem.Subtitle>
            </View>
            <Icon name="chevron-right" type="material" />
        </ListItem>
    );

    return (
        <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    countContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countText: {
        marginRight: 10,
        fontSize: 16,
        color: 'gray',
    },
});

export default AddDailyHelp;