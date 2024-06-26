import { ScrollView, View, Image, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Badge, Card, Header, Icon, Text } from "@rneui/base";
import PreApproveIcon from "@/components/PreApproveIcon";
import DailyHelpIcon from "@/components/DailyHelp";
import styles from "./index.styles";
import BottomSheetComponent from "@/components/BottomsheetComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "@gorhom/bottom-sheet";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const Dashboard = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const openBottomSheet = (index: number) => {
    console.log('index', index)
    bottomSheetRef.current?.snapToIndex(index);
  };
  useEffect(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      {/* <Header
        leftComponent={{ text: 'Name', style: { color: '#fff', fontSize: 18 } }}
        centerComponent={{ text: '', style: { color: '#fff' } }}
        rightComponent={(
          <View style={styles.headerRight}>
            <Icon name="search" type="font-awesome" color="#fff" containerStyle={styles.headerIcon} />
            <Icon name="bell" type="font-awesome" color="#fff" containerStyle={styles.headerIcon} />
            <Icon name="envelope" type="font-awesome" color="#fff" />
          </View>
        )}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Advertisement Cards */}
        <ScrollView horizontal style={{ flexDirection: "row", paddingLeft: 5 }}>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-vector/real-estate-web-banner-ad-design-business-advertising_701243-15.jpg",
            }}
            style={styles.adImages}
          />
          <Image
            source={{
              uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-banner-advertising-design-template-aebf779d2afa43bdb051accd03d708de_screen.jpg",
            }}
            style={styles.adImages}
          />
          <Image
            source={{
              uri: "https://www.creativehatti.com/wp-content/uploads/edd/2022/02/Promote-your-business-with-digital-marketing-on-template-banner-24-large.jpg",
            }}
            style={styles.adImages}
          />
          <Image
            source={{
              uri: "https://www.creativehatti.com/wp-content/uploads/edd/2022/03/Digital-marketing-agency-with-a-flat-template-banner-23-large.jpg",
            }}
            style={styles.adImages}
          />
        </ScrollView>
        {/* Photos with View All */}
        <Card containerStyle={{ borderRadius: 15 }}>
          <ScrollView horizontal style={styles.photoRow}>
            <PreApproveIcon />
            <Image
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
              }}
              style={styles.photo}
            />
            {/* <Image
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/028/238/588/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
              }}
              style={styles.photo}
              resizeMethod="scale"
            /> */}
            <Image
              source={{
                uri: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small_2x/cute-boy-avatar-png.png",
              }}
              style={styles.photo}
              resizeMethod="scale"
            />
            <DailyHelpIcon />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <Icon
                name="rightcircle"
                type="antdesign"
                size={35}
                color={"#CCC"}
              />
              <Text style={styles.viewAll}>{'View All'}</Text>
            </View>
          </ScrollView>
        </Card>

        {/* Row with Title and Subtitle */}
        <Card containerStyle={{ borderRadius: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <View>
              <Text style={styles.cardTitle}>FlatCheck Offers</Text>
              <Text style={styles.cardSubtitle}>
                Unlock the future of flats
              </Text>
            </View>
            <View>
              <Image
                source={{
                  uri: "https://www.shutterstock.com/shutterstock/photos/2180594735/display_1500/stock-vector-black-bulb-with-checkmark-like-quick-tip-icon-flat-stroke-linear-simple-trend-modern-efficiency-2180594735.jpg",
                }}
                width={40}
                height={40}
              />
            </View>
          </View>
        </Card>

        {/* Horizontal Scroll with Icons */}
        <ScrollView horizontal style={styles.horizontalScroll}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Card containerStyle={styles.smallCard}>
              <Icon
                name="chatbox-ellipses-outline"
                size={35}
                type="ionicon"
                color="#444"
              />
            </Card>
            <Text style={styles.smallIconsText}>Ask Society</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Card containerStyle={styles.smallCard}>
              <Icon
                name="payment"
                size={35}
                type="material-icon"
                color="green"
              />
            </Card>
            <Text style={styles.smallIconsText}>Payment</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Card containerStyle={styles.smallCard}>
              <Icon
                name="people-outline"
                size={35}
                type="ionicon"
                color="#26A"
              />
            </Card>
            <Text style={styles.smallIconsText}>Community</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Card containerStyle={styles.smallCard}>
              <Icon
                name="miscellaneous-services"
                size={35}
                type="material-icons"
                color="#444"
              />
            </Card>
            <Text style={styles.smallIconsText}>Settings</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Card containerStyle={styles.smallCard}>
              <Icon
                name="documents-outline"
                size={35}
                type="ionicon"
                color="#444"
              />
            </Card>
            <Text style={styles.smallIconsText}>Documents</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Card containerStyle={styles.smallCard}>
              <Icon
                name="medical-services"
                size={35}
                type="material-icons"
                color="#444"
              />
            </Card>
            <Text style={styles.smallIconsText}>Services</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Card containerStyle={styles.smallCard}>
              <Icon
                name="car-sport"
                size={35}
                type="ionicon"
                color="#444"
              />
            </Card>
            <Text style={styles.smallIconsText}>Vehicle Services</Text>
          </View>

        </ScrollView>

        {/* List of Detailed Cards */}
        <Card containerStyle={{ borderRadius: 15 }}>
          <View style={styles.detailedCardHeader}>
            <View>
              <Icon name="bell" size={30} type="font-awesome" />
              <Badge value="3" status="success" containerStyle={styles.badge} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.cardTitle}>Notice</Text>
              <Text style={styles.cardSubtitle}>Society</Text>
            </View>
            <Icon name="ellipsis-vertical" type="ionicon" />
          </View>
          <Card.Divider />
          <Text style={styles.cardBody}>
            This is a notice to everyone as a precautionary measure to fix all
            the security issues going on in the Society. Please cooperate with
            RWA.
          </Text>
        </Card>

        <Card containerStyle={{ borderRadius: 15 }}>
          <View style={styles.detailedCardHeader}>
            <View>
              <Icon name="bell" size={30} type="font-awesome" />
              <Badge value="3" status="success" containerStyle={styles.badge} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.cardTitle}>Notice</Text>
              <Text style={styles.cardSubtitle}>Society</Text>
            </View>
            <Icon name="ellipsis-vertical" type="ionicon" />
          </View>
          <Card.Divider />
          <Text style={styles.cardBody}>
            This is a notice to everyone as a precautionary measure to fix all
            the security issues going on in the Society. Please cooperate with
            RWA.
          </Text>
        </Card>
        <Card containerStyle={{ borderRadius: 15 }}>
          <View style={styles.detailedCardHeader}>
            <View>
              <Icon name="bell" size={30} type="font-awesome" />
              <Badge value="3" status="success" containerStyle={styles.badge} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.cardTitle}>Notice</Text>
              <Text style={styles.cardSubtitle}>Society</Text>
            </View>
            <Icon name="ellipsis-vertical" type="ionicon" />
          </View>
          <Card.Divider />
          <Text style={styles.cardBody}>
            This is a notice to everyone as a precautionary measure to fix all
            the security issues going on in the Society. Please cooperate with
            RWA.
          </Text>
        </Card>
        <Card containerStyle={{ borderRadius: 15 }}>
          <View style={styles.detailedCardHeader}>
            <View>
              <Icon name="bell" size={30} type="font-awesome" />
              <Badge value="3" status="success" containerStyle={styles.badge} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.cardTitle}>Notice</Text>
              <Text style={styles.cardSubtitle}>Society</Text>
            </View>
            <Icon name="ellipsis-vertical" type="ionicon" />
          </View>
          <Card.Divider />
          <Text style={styles.cardBody}>
            This is a notice to everyone as a precautionary measure to fix all
            the security issues going on in the Society. Please cooperate with
            RWA.
          </Text>
        </Card>

        {/* Add more detailed cards as needed */}
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 18,
          right: 18,
          backgroundColor: "#26A",
          borderRadius: 50,
          height: 50,
          width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableWithoutFeedback onPress={() => openBottomSheet(1)}>
          <Icon name="add" type="ionicons" color="#FFF" size={30} /></TouchableWithoutFeedback>
      </View>
      <BottomSheetComponent ref={bottomSheetRef} />
    </SafeAreaView>

  );
};


export default Dashboard;
