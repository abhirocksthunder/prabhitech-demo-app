import { faker } from '@faker-js/faker';
import { Icon, ListItem } from '@rneui/base';
import { router } from 'expo-router';
import React from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';

interface Item {
    id: number;
    title: string;
    count: number;
}

const data: Item[] = [
    { id: 1, title: "Maid", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 2, title: "Cook", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 3, title: "Milkman", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 4, title: "Paperboy", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 5, title: "Car Cleaner", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 6, title: "Nanny", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 7, title: "Gym Instructor", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 8, title: "Laundry", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 9, title: "Full Time Nanny", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 10, title: "Gardener", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 11, title: "Security", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 12, title: "Trainers", count: faker.number.int({ min: 1, max: 30 }) },
    { id: 13, title: "Helper", count: faker.number.int({ min: 1, max: 30 }) },
    // Add more items as needed
    // Add more items as needed
];

const AddDailyHelp: React.FC = () => {
    const renderItem = ({ item }: { item: Item }) => (
        <ListItem bottomDivider onPress={() => router.push({ pathname: "/DailyHelpers", params: item })}>
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