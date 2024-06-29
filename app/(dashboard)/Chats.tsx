import lightPalette from '@/themes/lightPalette';
import { faker } from '@faker-js/faker';
import { Card, Icon, Image, Text } from '@rneui/base'
import { CardImage } from '@rneui/base/dist/Card/Card.Image';
import { Tab, TabView } from '@rneui/themed';
import React from 'react'
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Chats = () => {
    const [index, setIndex] = React.useState(0);

    return (
        <>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'black',
                    height: 3,
                }}
                variant="default"
            >
                <Tab.Item
                    title="Chats"
                    titleStyle={{ fontSize: 15, color: 'black' }}
                />
                <Tab.Item
                    title="Calls"
                    titleStyle={{ fontSize: 15, color: 'black' }}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={{ backgroundColor: lightPalette.purpleTheme.palette.primary.light, width: '100%' }}>
                    <ScrollView style={{ marginBottom: 10 }}>
                        <Card containerStyle={{ borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Image source={{ uri: faker.image.avatar() }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                                <View style={{ marginLeft: 15, alignItems: 'flex-start' }}>
                                    <Card.Title>{faker.person.firstName()}</Card.Title>
                                    <Card.FeaturedSubtitle style={{ color: '#333' }}>{faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', 20)}</Card.FeaturedSubtitle>
                                </View>
                                <View>
                                    <Text>{faker.number.int({ min: 1, max: 12 })} months ago</Text>
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Image source={{ uri: faker.image.avatar() }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                                <View style={{ marginLeft: 15, alignItems: 'flex-start' }}>
                                    <Card.Title>{faker.person.firstName()}</Card.Title>
                                    <Card.FeaturedSubtitle style={{ color: '#333' }}>{faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', 20)}</Card.FeaturedSubtitle>
                                </View>
                                <View>
                                    <Text>{faker.number.int({ min: 1, max: 12 })} months ago</Text>
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Image source={{ uri: faker.image.avatar() }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                                <View style={{ marginLeft: 15, alignItems: 'flex-start' }}>
                                    <Card.Title>{faker.person.firstName()}</Card.Title>
                                    <Card.FeaturedSubtitle style={{ color: '#333' }}>{faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', 20)}</Card.FeaturedSubtitle>
                                </View>
                                <View>
                                    <Text>{faker.number.int({ min: 1, max: 12 })} months ago</Text>
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Image source={{ uri: faker.image.avatar() }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                                <View style={{ marginLeft: 15, alignItems: 'flex-start' }}>
                                    <Card.Title>{faker.person.firstName()}</Card.Title>
                                    <Card.FeaturedSubtitle style={{ color: '#333' }}>{faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', 20)}</Card.FeaturedSubtitle>
                                </View>
                                <View>
                                    <Text>{faker.number.int({ min: 1, max: 12 })} months ago</Text>
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Image source={{ uri: faker.image.avatar() }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                                <View style={{ marginLeft: 15, alignItems: 'flex-start' }}>
                                    <Card.Title>{faker.person.firstName()}</Card.Title>
                                    <Card.FeaturedSubtitle style={{ color: '#333' }}>{faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', 20)}</Card.FeaturedSubtitle>
                                </View>
                                <View>
                                    <Text>{faker.number.int({ min: 1, max: 12 })} months ago</Text>
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Image source={{ uri: faker.image.avatar() }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                                <View style={{ marginLeft: 15, alignItems: 'flex-start' }}>
                                    <Card.Title>{faker.person.firstName()}</Card.Title>
                                    <Card.FeaturedSubtitle style={{ color: '#333' }}>{faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', 20)}</Card.FeaturedSubtitle>
                                </View>
                                <View>
                                    <Text>{faker.number.int({ min: 1, max: 12 })} months ago</Text>
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Image source={{ uri: faker.image.avatar() }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                                <View style={{ marginLeft: 15, alignItems: 'flex-start' }}>
                                    <Card.Title>{faker.person.firstName()}</Card.Title>
                                    <Card.FeaturedSubtitle style={{ color: '#333' }}>{faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', 20)}</Card.FeaturedSubtitle>
                                </View>
                                <View>
                                    <Text>{faker.number.int({ min: 1, max: 12 })} months ago</Text>
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Image source={{ uri: faker.image.avatar() }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                                <View style={{ marginLeft: 15, alignItems: 'flex-start' }}>
                                    <Card.Title>{faker.person.firstName()}</Card.Title>
                                    <Card.FeaturedSubtitle style={{ color: '#333' }}>{faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', 20)}</Card.FeaturedSubtitle>
                                </View>
                                <View>
                                    <Text>{faker.number.int({ min: 1, max: 12 })} months ago</Text>
                                </View>
                            </View>
                        </Card>
                    </ScrollView>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: lightPalette.purpleTheme.palette.primary.light, width: '100%' }}>
                    <>
                        <Card containerStyle={{ borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <Image source={{ uri: faker.image.avatar() }} alt='Image' style={{ width: 50, height: 50, borderRadius: 30 }} />
                                    <View style={{ alignItems: 'flex-start' }}>
                                        <Card.Title>{faker.person.firstName()}</Card.Title>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                            <Icon name="phone-outgoing" type="feather" size={15} />
                                            <Text>{faker.number.int({ min: 1, max: 12 })} months ago</Text></View>

                                    </View>
                                </View>
                                <View>
                                    <Icon name="phone" type="feather" color={'green'} size={25} />
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <Image source={{ uri: faker.image.avatar() }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <Card.Title>{faker.person.firstName()}</Card.Title>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                            <Icon name="phone-incoming" type="feather" size={15} />
                                            <Text>{faker.number.int({ min: 1, max: 12 })} months ago</Text></View>
                                    </View>
                                </View>
                                <View>
                                    <Icon name="phone" type="feather" color={'green'} size={25} />
                                </View>
                            </View>
                        </Card>
                    </>
                </TabView.Item>

            </TabView >
        </>
    );
}

export default Chats;