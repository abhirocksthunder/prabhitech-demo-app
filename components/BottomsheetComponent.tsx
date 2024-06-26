import { Card, Icon } from '@rneui/base';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

const { height } = Dimensions.get('window');

interface Option {
    id: number;
    name: string;
    type: string;
    description: string;
}

interface Section {
    header: string;
    options: Option[];
}

const sections: Section[] = [
    {
        header: "Pre-approve entry",
        options: [
            { id: 1, name: "guest", type: "zocial", description: 'Guest' },
            { id: 2, name: "car", type: 'ionicon', description: "Cab" },
            { id: 3, name: "motorbike", type: 'material-community', description: "Delivery" },
            { id: 4, name: "tools", type: 'entypo', description: "Visiting Help" },
        ],
    },
    {
        header: "Security",
        options: [
            { id: 5, name: "phone-call", type: "feather", description: 'Call Security' },
            { id: 6, name: "message-square", type: 'feather', description: "Message Guard" },
            { id: 7, name: "baby-face", type: 'material-community', description: "Allow Kid Exit" },
        ],
    },
    {
        header: "Create Post",
        options: [
            { id: 11, name: "post-add", type: "material", description: 'Create Post' },
            { id: 12, name: "poll", type: 'font-awesome-5', description: "Start Poll" },
            { id: 13, name: "price-tag", type: 'entypo', description: "Sell or Buy" },
            { id: 14, name: "stream", type: 'material', description: "Host Event" },

        ],
    },

    // Add more sections as needed
];

const BottomSheetComponent = forwardRef<BottomSheet, {}>((props, ref) => {
    const [backdropPressBehavior, setBackdropPressBehavior] = useState<
        'none' | 'close' | 'collapse'
    >('collapse');
    const snapPoints = useMemo(() => [1, 500], []);
    const renderBackdrop = useCallback(
        (props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
            <BottomSheetBackdrop {...props} pressBehavior={backdropPressBehavior} />
        ),
        [backdropPressBehavior]
    );

    return (
        <BottomSheet
            ref={ref}
            snapPoints={snapPoints}
            animateOnMount={true}
            enablePanDownToClose
            backdropComponent={renderBackdrop}
        >
            <ScrollView style={styles.sheetContent}>
                {sections.map((section, index) => (
                    <View key={index} style={styles.sectionContainer}>
                        <Text style={styles.header}>{section.header}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            {section.options.map((option) => (
                                <View style={{ flexDirection: "column", alignItems: "center" }}>
                                    <Card key={option.id} containerStyle={styles.smallCard}>
                                        <Icon
                                            name={option.name}
                                            size={35}
                                            type={option.type}
                                            color="#666"
                                        />

                                    </Card>
                                    <Text style={styles.smallIconsText}>{option.description}</Text>
                                </View>

                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </BottomSheet>
    );
});

const styles = StyleSheet.create({
    sheetContent: {
        backgroundColor: 'white',
        padding: 16,
        height: height * 0.5,
    },
    card: {
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 14,
        color: 'gray',
    },
    sectionContainer: {
        marginBottom: 20,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    smallIconsText: { marginTop: 5, fontSize: 12, overflow: "hidden" },
    smallCard: {
        padding: 5,
        margin: 6,
        borderRadius: 20,
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#EEE'
    },
});

export default BottomSheetComponent;


// import { Card } from '@rneui/base';
// import React, { useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// import BottomSheet from 'reanimated-bottom-sheet';

// interface Option {
//     id: number;
//     title: string;
//     description: string;
// }

// interface Section {
//     header: string;
//     options: Option[];
// }

// const sections: Section[] = [
//     {
//         header: "Header 1",
//         options: [
//             { id: 1, title: "Option 1", description: "Description 1" },
//             { id: 2, title: "Option 2", description: "Description 2" },
//         ],
//     },
//     {
//         header: "Header 2",
//         options: [
//             { id: 3, title: "Option 3", description: "Description 3" },
//             { id: 4, title: "Option 4", description: "Description 4" },
//         ],
//     },
//     // Add more sections as needed
// ];

// const BottomSheetComponent: React.FC = () => {
//     const bottomSheetRef = useRef<BottomSheet>(null);

//     const renderContent = () => (
//         <ScrollView style={styles.sheetContent}>
//             {sections.map((section, index) => (
//                 <View key={index} style={styles.sectionContainer}>
//                     <Text style={styles.header}>{section.header}</Text>
//                     {section.options.map((option) => (
//                         <Card containerStyle={styles.card} key={option.id}>
//                             <TouchableOpacity onPress={() => console.log(option.title)}>
//                                 <Text style={styles.cardTitle}>{option.title}</Text>
//                                 <Text style={styles.cardDescription}>{option.description}</Text>
//                             </TouchableOpacity>
//                         </Card>
//                     ))}
//                 </View>
//             ))}
//         </ScrollView>
//     );

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={() => bottomSheetRef.current?.snapTo(0)}>
//                 <Text style={styles.openButton}>Open Bottom Sheet</Text>
//             </TouchableOpacity>
//             <BottomSheet
//                 ref={bottomSheetRef}
//                 snapPoints={[450, 300, 0]}
//                 borderRadius={10}
//                 renderContent={renderContent}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     openButton: {
//         fontSize: 18,
//         color: 'blue',
//     },
//     sheetContent: {
//         backgroundColor: 'white',
//         padding: 16,
//         height: 450,
//     },
//     sectionContainer: {
//         marginBottom: 20,
//     },
//     header: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     card: {
//         padding: 10,
//         borderRadius: 8,
//     },
//     cardTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     cardDescription: {
//         fontSize: 14,
//         color: 'gray',
//     },
// });


// export default BottomSheetComponent;