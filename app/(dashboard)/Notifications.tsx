import BottomSheetComponent from '@/components/BottomsheetComponent'
import lightPalette from '@/themes/lightPalette'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import { Button, Icon, Text } from '@rneui/base'
import { router } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { View } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Notifications = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const openBottomSheet = (index: number) => {
        console.log('index', index)
        bottomSheetRef.current?.snapToIndex(index);
    };
    useEffect(() => {
        bottomSheetRef.current?.snapToIndex(0);
    }, [])
    return (
        <>
            <View style={{ paddingVertical: 100, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, rowGap: 20 }}>
                <Icon name="notifications-none" size={100} type="material" />
                <Text h4>Nothing here Yet!</Text>
                <Text style={{ textAlign: 'center' }}>Try exploring your home feed, or creating a new post</Text>
                <Button title="Go to home" type="outline" onPress={() => router.back()} />
            </View>
            <View
                style={{
                    position: "absolute",
                    bottom: 18,
                    right: 18,
                    backgroundColor: lightPalette.purpleTheme.palette.primary.main,
                    borderRadius: 50,
                    height: 50,
                    width: 50,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TouchableWithoutFeedback onPress={() => openBottomSheet(1)}>
                    <Icon name="add" type="ionicons" color={lightPalette.purpleTheme.palette.primary.contrastText} size={30} /></TouchableWithoutFeedback>
            </View>
            <BottomSheetComponent ref={bottomSheetRef} />
        </>
    )
}

export default Notifications