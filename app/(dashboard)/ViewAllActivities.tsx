// App.js
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { format, isSameDay } from 'date-fns';
import { ScrollView } from 'react-native-gesture-handler';
import UserActivity from '@/components/UserActivity';
import { faker } from '@faker-js/faker';

type User = {
    id: string;
    imageUrl: string;
    name: string;
    rating: number;
    status: 'Inside' | 'Left';
    time: string;
    userType: string;
    entryCount: number;
};

const App = () => {
    const [data, setData] = useState<any>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [floatingDate, setFloatingDate] = useState('');
    const flatListRef = useRef(undefined || null);

    const getRandomTime = (): string => {
        const randomDate = faker.date.anytime();
        return format(randomDate, 'HH:mm');
    };

    const getRandomDate = () => {
        const randomDate = faker.date.between({ from: '2024-06-15T00:00:00.000Z', to: new Date() })
        // return format(randomDate, 'yyyy-MM-dd HH:mm');
        return randomDate;
    };
    // Mock data fetch function
    const fetchData = useCallback(async () => {
        if (loading || !hasMore) return;

        setLoading(true);

        // Simulate fetching data
        setTimeout(() => {
            const newRecords = Array.from({ length: 20 }, (_, index) => {
                const recordDate = new Date();
                recordDate.setDate(recordDate.getDate() - (index + (page - 1) * 20));
                const statuses: Array<'Inside' | 'Left' | 'Denied' | 'Society'> = ['Inside', 'Left', 'Denied', 'Society'];
                const userTypes = ['Delivery', 'Maid', 'Guest'];
                return {
                    id: (index + (page - 1) * 20).toString(),
                    imageUrl: faker.image.avatar(),
                    name: faker.person.firstName(),
                    rating: faker.number.int({ min: 0, max: 5 }),
                    status: statuses[faker.number.int({ min: 0, max: 3 })],
                    time: getRandomTime(),
                    userType: userTypes[faker.number.int({ min: 0, max: userTypes.length - 1 })],
                    entryCount: faker.number.int({ min: 1, max: 20 }),
                    date: getRandomDate(),
                };
            });

            setData(newRecords.sort((a, b) => b.date.getTime() - a.date.getTime()));
            setPage(page + 1);
            setLoading(false);
            if (newRecords.length < 20) {
                setHasMore(false);
            }
        }, 1000);
    }, [loading, hasMore, page]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedDate) {
            const filtered = data.filter((item: { date: string | number | Date; }) =>
                isSameDay(new Date(item.date), selectedDate)
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [data, selectedDate]);

    const handleScroll = (event: { nativeEvent: { contentOffset: { y: any; }; }; }) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const visibleIndex = Math.floor(offsetY / 170); // Assuming item height is 170
        const visibleItem = (selectedDate ? filteredData : data)[visibleIndex];
        if (visibleItem) {
            setFloatingDate(format(new Date(visibleItem.date), 'yyyy-MM-dd'));
        }
    };

    const resetFilter = () => {
        setSelectedDate(null);
        setFilteredData(data);
        setFloatingDate('');
    };
    const handleCallPress = () => {
        Alert.alert('Call pressed');
    };

    const handleRateNowPress = () => {
        Alert.alert('Rate Now pressed');
    };

    const handleAttendancePress = () => {
        Alert.alert('Attendance pressed');
    };

    const renderItem = ({ item }: any) => (
        // <View style={styles.item}>
        //     <Text>{item.title}</Text>
        //     <Text>{format(new Date(item.date), 'yyyy-MM-dd')}</Text>
        <UserActivity
            imageUrl={item.imageUrl}
            name={item.name}
            rating={item.rating}
            status={item.status}
            time={item.time}
            userType={item.userType}
            entryCount={item.entryCount}
            date={item.date}
            onCallPress={handleCallPress}
            onRateNowPress={handleRateNowPress}
            onAttendancePress={handleAttendancePress}
        />
        // </View>
    );

    return (
        <View style={styles.container}>
            {/* <View style={styles.filterContainer}>
                <Button title="Select Date" onPress={() => setDatePickerVisible(true)} />
                {selectedDate && (
                    <Button title="Reset Filter" onPress={resetFilter} />
                )}
            </View> */}

            {floatingDate && (
                <View style={styles.floatingDateContainer}>
                    <Text style={styles.floatingDateText}>{floatingDate}</Text>
                </View>
            )}

            <FlatList
                ref={flatListRef}
                data={selectedDate ? filteredData : data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                // onEndReached={fetchData}
                // onEndReachedThreshold={0.1}
                ListFooterComponent={loading ? <ActivityIndicator /> : null}
                onScroll={handleScroll}
                showsVerticalScrollIndicator={false}
            />

            <DatePicker
                modal
                open={datePickerVisible}
                date={new Date()}
                onConfirm={(date) => {
                    setDatePickerVisible(false);
                    setSelectedDate(date);
                    setFloatingDate(format(date, 'yyyy-MM-dd'));
                    flatListRef.current !== (null || undefined) && flatListRef?.current?.scrollToOffset({ offset: 0, animated: true });
                }}
                onCancel={() => setDatePickerVisible(false)}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 40,
        padding: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 60, // Match this height with the item height used in handleScroll
    },
    floatingDateContainer: {
        position: 'absolute',
        top: '3%',
        left: '40%',
        padding: 5,
        backgroundColor: '#AAA',
        borderRadius: 5,
        zIndex: 999
    },
    floatingDateText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default App;
