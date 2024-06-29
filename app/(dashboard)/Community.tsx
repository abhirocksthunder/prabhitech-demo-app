import { Card, Icon, Image, Text } from "@rneui/base";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Community = () => {
    return (
        <ScrollView style={{ marginBottom: 10, }}>
            <View style={{ flex: 1, flexWrap: 'wrap' }}>
                <Text h4 style={{ paddingHorizontal: 20, paddingVertical: 10 }}>Pay</Text>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                    <View style={{ borderRadius: 20, rowGap: 10, width: '45%', backgroundColor: '#FFF', padding: 10, marginHorizontal: 5 }}>
                        <Icon name="payments" type="material" size={40} style={{ alignItems: 'flex-start' }} />
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>Society Dues</Text>
                        <Text>Pay Society dues, deposits & advances</Text>
                    </View>
                    <View style={{ borderRadius: 20, rowGap: 10, width: '45%', backgroundColor: '#FFF', padding: 10, marginHorizontal: 5 }}>
                        <Icon name="currency-exchange" type="material" size={35} style={{ alignItems: 'flex-start' }} />
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>Rent Pay</Text>
                        <Text>Make rent pay & manage receipts</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 15 }}>
                    <View style={{ borderRadius: 20, rowGap: 10, width: '45%', backgroundColor: '#FFF', padding: 10, marginHorizontal: 5 }}>
                        <Icon name="pool" type="material" size={40} style={{ alignItems: 'flex-start' }} />
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>Utility Payments</Text>
                        <Text>All in one payment solution</Text>
                    </View>
                    <View style={{ borderRadius: 20, width: '45%', backgroundColor: '#FFF', }}>
                        <Image
                            source={{
                                uri: "https://img.freepik.com/premium-vector/real-estate-web-banner-ad-design-business-advertising_701243-15.jpg",
                            }}
                            style={styles.adImages}
                        />
                    </View>
                </View>

            </View>
            <View style={{ flex: 1, flexWrap: 'wrap' }}>
                <Text h4 style={{ paddingHorizontal: 20, paddingVertical: 15 }}>Discover</Text>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                    <View style={{ borderRadius: 20, rowGap: 10, width: '45%', backgroundColor: '#FFF', padding: 10, marginHorizontal: 5 }}>
                        <Icon name="persons" type="fontisto" size={40} style={{ alignItems: 'flex-start' }} />
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>Residents</Text>
                        <Text>View society residents</Text>
                    </View>
                    <View style={{ borderRadius: 20, rowGap: 10, width: '45%', backgroundColor: '#FFF', padding: 10, marginHorizontal: 5 }}>
                        <Icon name="hands-helping" type="font-awesome-5" size={40} style={{ alignItems: 'flex-start' }} />
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>Daily Help</Text>
                        <Text>Find daily helps & service providers</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 15 }}>
                    <View style={{ borderRadius: 20, rowGap: 10, width: '45%', backgroundColor: '#FFF', padding: 10, marginHorizontal: 5 }}>
                        <Icon name="contact-emergency" type="material" size={40} style={{ alignItems: 'flex-start' }} />
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>Emergency No's</Text>
                        <Text>All emergency numbers</Text>
                    </View>
                    <View style={{ borderRadius: 20, rowGap: 10, width: '45%', backgroundColor: '#FFF', padding: 10, marginHorizontal: 5 }}>
                        <Icon name="address-book" type="font-awesome" size={35} style={{ alignItems: 'flex-start' }} />
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>Local Directory</Text>
                        <Text>all helpline numbers</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    adImages: {
        resizeMode: "cover",
        width: 150,
        height: 140,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 15,
    },
})

export default Community;