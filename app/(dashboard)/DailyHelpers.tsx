import { faker } from '@faker-js/faker'
import { Card, Icon, Image, Text } from '@rneui/base'
import { Stack, router, useLocalSearchParams } from 'expo-router';
import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

function DailyHelpers({ navigation }: any) {
    const { count, title, id } = useLocalSearchParams();

    return (
        <ScrollView style={{ marginBottom: 10 }}>
            <Stack.Screen
                options={{
                    headerTitle: title?.toString(), // to set the header title dynamically
                }}
            />
            {Array.from({ length: parseInt(count?.toString() || "") || 0 }, (_, i) => (
                <Card key={i} containerStyle={{ borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image source={{ uri: faker.image.avatar() }} style={{ width: 80, height: 80, borderRadius: 30 }} />
                        </View>
                        <View style={{ marginLeft: 15, justifyContent: 'center' }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Text style={{ fontSize: 22 }}>{faker.person.firstName()}</Text><Icon name="chevron-thin-right" type="entypo" size={14} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                                <Icon name="star" type="fontawesome" size={15} color={'gold'} />
                                <Text style={{ marginHorizontal: 5 }}>{faker.number.int({ min: 0.0, max: 5.0 })}</Text>
                                <Text style={{ marginHorizontal: 5 }}>{'•'}</Text>
                                <Text style={{ marginHorizontal: 5 }}>{faker.number.int({ min: 1, max: 20 })}{' Houses'}</Text>
                            </View>
                        </View>
                    </View>
                </Card>
            ))
            }
        </ScrollView>
    )
}

export default DailyHelpers