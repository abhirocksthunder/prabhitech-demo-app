import { Icon, ListItem, Text } from '@rneui/base'
import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'




const Search = () => {
    const data = [{
        id: 1,
        title: 'Daily Help',
        icon: 'person-4',
        type: 'material'
    },
    {
        id: 2,
        title: 'Society Dues',
        icon: 'payments',
        type: 'material'
    },
    {
        id: 3,
        title: 'Visitor Preapprove',
        icon: 'person',
        type: 'material'
    },
    {
        id: 4,
        title: 'Amenities',
        icon: 'pool',
        type: 'material'
    },
    {
        id: 5,
        title: 'Message Guard',
        icon: 'message',
        type: 'material'
    },
    {
        id: 6,
        title: 'Car Booking',
        icon: 'car-rental',
        type: 'material'
    }, {
        id: 7,
        title: 'Plumbers',
        icon: 'water-damage',
        type: 'material'
    },
    {
        id: 8,
        title: 'Book Airport cab',
        icon: 'cab',
        type: 'font-awesome'
    }, {
        id: 9,
        title: 'Carpenters',
        icon: 'carpenter',
        type: 'material'
    },
    {
        id: 10,
        title: 'Chat with Neighbor',
        icon: 'surround-sound',
        type: 'material'
    },
    {
        id: 11,
        title: 'Guest Preapprove',
        icon: 'person',
        type: 'material'
    }, {
        id: 12,
        title: 'Buy & Sell',
        icon: 'sell',
        type: 'material'
    }];
    const [searchItems, setSearchItems] = useState(data);
    const [searching, setSearching] = useState(false);

    const filterItems = (filterText: string) => {
        setSearching(true);
        let newSearchItems = searchItems;
        newSearchItems = newSearchItems.filter(item => item.title.includes(filterText));
        setSearchItems(newSearchItems);

        if (filterText === "") {
            setSearching(false);
            setSearchItems(data);
        }
    }
    return (
        <ScrollView>
            <Stack.Screen
                options={{
                    headerTitle: () => <TextInput placeholder='What are you looking for' onChange={(e) => filterItems(e.nativeEvent.text)} />
                }}
            />
            <View style={{ padding: 10, borderTopWidth: 1, borderTopColor: '#CCC' }}>
                <Text> {searching ? `Features (${searchItems.length})` : 'Popular Searches'}</Text>
            </View>
            {searchItems.map(item => (
                <ListItem bottomDivider key={item.id}>
                    <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                        <Icon name={item.icon} type={item.type} color={'#555'} size={30} />
                        <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
            {/* <ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="person-4" type="material" color={'#555'} size={30} />
                    <ListItem.Title>{'Daily Help'}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="payments" type="material" color={'#555'} size={30} />
                    <ListItem.Title>{'Society Dues'}</ListItem.Title>
                </ListItem.Content>
            </ListItem><ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="feed-person" type="octicon" color={'#555'} size={30} />
                    <ListItem.Title>{'Visitor PreApproval'}</ListItem.Title>
                </ListItem.Content>
            </ListItem><ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="pool" type="material" size={30} color={'#555'} /><ListItem.Title>{'Amenities'}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="person-4" type="material" color={'#555'} size={30} />
                    <ListItem.Title>{'Daily Help'}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="payments" type="material" color={'#555'} size={30} />
                    <ListItem.Title>{'Society Dues'}</ListItem.Title>
                </ListItem.Content>
            </ListItem><ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="feed-person" type="octicon" color={'#555'} size={30} />
                    <ListItem.Title>{'Visitor PreApproval'}</ListItem.Title>
                </ListItem.Content>
            </ListItem><ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="pool" type="material" size={30} color={'#555'} /><ListItem.Title>{'Amenities'}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="person-4" type="material" color={'#555'} size={30} />
                    <ListItem.Title>{'Daily Help'}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="payments" type="material" color={'#555'} size={30} />
                    <ListItem.Title>{'Society Dues'}</ListItem.Title>
                </ListItem.Content>
            </ListItem><ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="feed-person" type="octicon" color={'#555'} size={30} />
                    <ListItem.Title>{'Visitor PreApproval'}</ListItem.Title>
                </ListItem.Content>
            </ListItem><ListItem bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                    <Icon name="pool" type="material" size={30} color={'#555'} /><ListItem.Title>{'Amenities'}</ListItem.Title>
                </ListItem.Content>
            </ListItem> */}
        </ScrollView>
    )
}

export default Search